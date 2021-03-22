<template>
  <div class="category">
    <div class="row">
      <div class="col" v-for="ca in categories" :key="ca">
        <CategoryItem :imageUrl="ca.imageUrl" :desCategory="ca.desCategory" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "../views/Category.Item";
export default {
  name: "Category",
  components: { CategoryItem },
  data() {
    return {
      categories: [
        {
          imageUrl: "img/clothing.png",
          desCategory: "Clothing & Shoes",
        },
        {
          imageUrl: "img/entertainment.png",
          desCategory: "Entertainment",
        },
        {
          imageUrl: "img/music.png",
          desCategory: "Music",
        },
        {
          imageUrl: "img/sport.png",
          desCategory: "Sport",
        },
        {
          imageUrl: "img/pets.png",
          desCategory: "Pets",
        },
        {
          imageUrl: "img/kitchen.png",
          desCategory: "Kitchen Accessories",
        },
        {
          imageUrl: "img/travel.png",
          desCategory: "Travel Equiqment",
        },
        {
          imageUrl: "img/garden.png",
          desCategory: "Growing & Garden",
        },
        {
          imageUrl: "img/electrical.png",
          desCategory: "Electrical Tools",
        },
        {
          imageUrl: "img/mother-care.png",
          desCategory: "Mother Care",
        },
        {
          imageUrl: "img/toy&enter.png",
          desCategory: "Toy & Entertainment",
        },
        {
          imageUrl: "img/vintage.png",
          desCategory: "Vintage",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/resources/styles/category.style.scss";
</style>
