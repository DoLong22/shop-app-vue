<template>
  <div class="content">
    <div class="row">
        <VueXItem/>
      </div>
    <div>
      <SortItem @change="onChange($event)"></SortItem>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <ItemView v-for="item in items" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemServices from "@/services/product.service";
import ImageService from "@/services/image.service";
import ItemView from "../views/Item.View.vue";
import SortItem from "../views/Sort.Item";
import VueXItem from '../views/VueX.Item'

export default {
  components: { ItemView, SortItem,VueXItem },
  async created() {
    await this.fetchItems();
  },
  data() {
    return {
      items: {
        type: [],
        default: () => [],
      },
      orginalItems: {
        type: [],
        default: () => [],
      },
      sortedItems: {
        type: [],
        default: () => [],
      },
    };
  },
  methods: {
    async fetchItems() {
      let listImage = [];
      const items = ItemServices.getItems();
      const images = ImageService.getImages();
      const response = await Promise.all([items, images]);
      response[1]?.data?.photos.map((data) => {
        listImage.push(data?.src?.medium);
      });
      this.orginalItems = response[0]?.data.map((data, index) => {
        data.imageUrl = listImage[index];
        return data;
      });
      this.items = this.orginalItems;
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
        console.log(this.items);

        this.items.sort(this.sortByName);
        console.log(this.items);

        return this.items;
      } else if (sortBy === "Price") {
        return this.items.sort((a, b) => a.price - b.price);
      } else {
        this.items = this.orginalItems.slice();
        return this.items;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/resources/styles/content.style.scss";
</style>
