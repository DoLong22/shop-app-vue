<template>
  <div class="content">
    <div>
      <SortItem @change="onChange($event)"></SortItem>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <ItemView v-for="item in currentItems" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemServices from "@/services/product.service";
import ImageService from "@/services/image.service";
import ItemView from "../views/Item.View.vue";
import SortItem from "../views/Sort.Item";
// import { watch } from '@vue/runtime-core';

export default {
  components: { ItemView, SortItem },
  async created() {
    await this.fetchItems("GET_ALL");
  },
  data() {
    return {
      currentItems: {
        type: [],
        default: () => [],
      },

      errorCode: {
        type: [],
        default: () => [],
      },
      loading: false,
    };
  },
  computed: {
    topic: function() {
      return this.$store.state.topic;
    },
  },
  watch: {
    topic: async function() {
      console.log(this.$store.sate?.topic);
      await this.fetchItems("SEARCH", this.topic);
      return this.currentItems;
    },
  },
  methods: {
    async fetchItems(doWhat, query) {
      try {
        let listImage = [];
        let images;
        const items = ItemServices.getItems();
        if (doWhat === "GET_ALL") {
          console.log("get all");
          images = ImageService.getImages();
        } else {
          console.log("search");
          images = ImageService.searchImages(query);
        }
        const response = await Promise.all([items, images]);
        response[1]?.data?.photos.map((data) => {
          listImage.push(data?.src?.medium);
        });
        this.currentItems = response[0]?.data.map((data, index) => {
          data.imageUrl = listImage[index];
          return data;
        });
        this.$store.commit("UPDATE_ITEMS", this.currentItems.slice());
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
  },
};
</script>

<style lang="scss">
@import "@/resources/styles/content.style.scss";
</style>
