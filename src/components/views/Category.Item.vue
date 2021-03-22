<template>
  <button class="btn-category" :name="getLabel">
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
    },
    label:{
        type:String,
        default: ()=>""
    }
  },
  computed: {
    srcImage() {
      return this.imageUrl;
    },
    description(){
        return this.desCategory;
    },
    getLabel(){
        return this.label
    }
  },
};
</script>

<style></style>
