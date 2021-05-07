<template>
  <div class="content">
    <Loading v-if="loading" />
    <div>
      <SortItem @change="onChange($event)"></SortItem>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <ItemView v-for="item in currentItems" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemServices from "@/services/product-fake.service";
import ImageService from "@/services/image.service";
import ItemView from "../views/Item.View.vue";
import SortItem from "../views/Sort.Item";
import Loading from "../views/Loading.View";
import { mapGetters } from "vuex";
export default {
  components: { ItemView, SortItem, Loading },
  async created() {
    await this.fetchItems("GET_ALL");
  },
  data() {
    return {
      currentItems: [],
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getFilter"]),
    topic: function () {
      return this.$store.state.topic;
    },
  },
  watch: {
    topic: async function () {
      await this.fetchItems("SEARCH", this.topic);
      return this.currentItems;
    },
    getFilter: function () {
      const { filterValue, filterBy } = this.getFilter;
      console.log(filterValue + filterBy);
      switch (filterBy) {
        case "price":
          this.filterByPrice(filterValue);
          break;
        default:
          break;
      }
    },
  },
  methods: {
    async fetchItems(doWhat, query) {
      try {
        let listImage = [];
        let images;
        const items = ItemServices.getItems();
        if (doWhat === "GET_ALL") {
          images = ImageService.getImages();
        } else {
          images = ImageService.searchImages(query);
        }
        this.loading = true;
        const response = await Promise.all([items, images]);
        response[1]?.data?.photos.map((data) => {
          listImage.push(data?.src?.medium);
        });
        this.currentItems = response[0]?.data.map((data, index) => {
          data.imageUrl = listImage[index];
          return data;
        });
        this.$store.commit("UPDATE_ITEMS", this.currentItems.slice());
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    sortByName(a, b) {
      const nameA = a.name.toUpperCase(); // bỏ qua hoa thường
      const nameB = b.name.toUpperCase(); // bỏ qua hoa thường
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // name trùng nhau
      return 0;
    },
    onChange(event) {
      const sortBy = event.target.value;
      if (sortBy === "Name") {
        this.currentItems.sort(this.sortByName);
        return this.currentItems;
      } else if (sortBy === "Price") {
        return this.currentItems.sort((a, b) => a.price - b.price);
      } else {
        this.currentItems = this.$store.state.items.slice();
        return this.currentItems;
      }
    },
    filterByPrice(price) {
      switch (price) {
        case "1":
          this.currentItems = this.$store.state.items.filter(
            (item) => item.price > 1000 && item.price <= 15000
          );
          break;
        case "2":
          this.currentItems = this.$store.state.items.filter(
            (item) => item.price > 15000 && item.price <= 30000
          );
          break;
        case "3":
          this.currentItems = this.$store.state.items.filter(
            (item) => item.price > 30000 && item.price <= 45000
          );
          break;
        case "4":
          this.currentItems = this.$store.state.items.filter(
            (item) => item.price > 45000
          );
          break;
        default:
          this.currentItems = this.$store.state.items.slice();
          break;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/resources/styles/content.style.scss";
</style>
