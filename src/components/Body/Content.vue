<template>
  <div class="content">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <Item v-for="item in listItem" :key="item" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemServices from "@/services/product.service";
import ImageService from "@/services/image.service";
import Item from "../views/Item.View.vue";

export default {
  components: { Item },
  async created() {
    await this.fetchItems();
  },
  data() {
    return {
      listItem: [],
      finishFetchData: false,
    };
  },
  //   computed:{
  //       getListItem: ()=>this.listItem,
  //   },
  methods: {
    async fetchItems() {
      let listImage = [];
      const items = ItemServices.getItems();
      const images = ImageService.getImages();
      const response = await Promise.all([items, images]);
      response[1]?.data?.photos.map((data) => {
        listImage.push(data?.src?.medium);
      });
      this.listItem = response[0]?.data.map((data, index) => {
        data.imageUrl = listImage[index];
        return data;
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/resources/styles/content.style.scss";
</style>
