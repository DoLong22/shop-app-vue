<template>
  <div class="category">
    <div class="row">
      <div class="col" v-for="cate in categories" :key="cate" @click="onClick($event)">
        <CategoryItem
          :imageUrl="cate.imageUrl"
          :desCategory="cate.desCategory"
          :label="cate.label"
        />
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
          label:"clothing",  
        },
        {
          imageUrl: "img/entertainment.png",
          desCategory: "Entertainment",
          label:"entertainment",
        },
        {
          imageUrl: "img/music.png",
          desCategory: "Music",
          label:"music",
        },
        {
          imageUrl: "img/sport.png",
          desCategory: "Sport",
          label:"sport",
        },
        {
          imageUrl: "img/pets.png",
          desCategory: "Pets",
          label:"pets",
        },
        {
          imageUrl: "img/kitchen.png",
          desCategory: "Kitchen Accessories",
          label:"kitchen",
        },
        {
          imageUrl: "img/travel.png",
          desCategory: "Travel Equiqment",
          label:"travel",
        },
        {
          imageUrl: "img/garden.png",
          desCategory: "Growing & Garden",
          label:"garden",
        },
        {
          imageUrl: "img/electrical.png",
          desCategory: "Electrical Tools",
          label:"electric",
        },
        {
          imageUrl: "img/mother-care.png",
          desCategory: "Mother Care",
          label:"mother care",
        },
        {
          imageUrl: "img/toy&enter.png",
          desCategory: "Toy & Entertainment",
          label:"toy",
        },
        {
          imageUrl: "img/vintage.png",
          desCategory: "Vintage",
          label:"vintage",
        },
      ],
    };
  },
  methods:{
    onClick(event){
      const topic = event.target.name;
      this.$store.commit('UPDATE_KEY_SEARCH',topic);
      console.log(this.$store.state.topic)
    }
  }
};

</script>

<style lang="scss">
@import "@/resources/styles/category.style.scss";
</style>
