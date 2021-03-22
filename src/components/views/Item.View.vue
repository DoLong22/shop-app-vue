<template>
  <div class="col">
    <div class="card">
      <img :src="imageUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="price">${{price}}</p>
        <p class="card-text">{{title}}</p>
        <div class="bottom-card-body">
            <ul class="rate">
                <li><span>a</span></li>
                <li><span>a</span></li>
                <li><span>a</span></li>
                <li><span>a</span></li>
                <li><span>a</span></li>
            </ul>
            <button type="button" class="btn btn-outline-primary">
              Watch
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ItemView",
    props:{
        item:{
            type: Object,
            default: () =>{}
        },
    },
    computed:{
      title(){
        return this.item?.title || ""
      },
      price(){
        return this.item?.price || ""
      },
      name(){
        return this.item?.name || ""
      },
      imageUrl(){
        return this.item?.imageUrl || ""
      }
    }
}
</script>

<style lang="scss">
@import "@/resources/styles/item.tyle.scss"
</style>