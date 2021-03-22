<template>
  <button class="btn-category">
    <img class="item-category" :src="srcImage" alt="" />
    <p class="description-category">{{description}}</p>
  </button>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    imageUrl: {
      type: String,
      default: () => "",
    },
    desCategory:{
        type: String,
        default:()=>"",
    }
  },
  computed: {
    srcImage() {
      return this.imageUrl;
    },
    description(){
        return this.desCategory;
    }
  },
};
</script>

<style></style>
