<template>
  <div class="container-fluid">
    <Header></Header>
    <Body/>
  </div>
</template>

<script>
import Body from './Body/Body.vue'
import Header from './Header/Header.vue'

export default {
    name: "Home",
    components: {
      Header,
      Body,
    }
}
</script>

<style lang="scss">
@import "@/resources/styles/home.style.scss";
</style>