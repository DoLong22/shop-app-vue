<template>
  <div class="col">
    <div class="card">
      <img :src="item.imageUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{item.Title}}</h5>
        <p class="price">${{item.price}}</p>
        <p class="card-text">{{item.name}}</p>
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
    name: "Item",
    props:{
        item:{
            type: Object,
            default: () =>{}
        },
    },
}
</script>

<style lang="scss">
@import "@/resources/styles/item.tyle.scss"
</style>