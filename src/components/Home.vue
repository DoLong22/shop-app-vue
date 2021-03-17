<template>
  <div class="container-fluid">
    <Header></Header>
  </div>
</template>

<script>

import Header from './Header.component.vue'
export default {
    name: "Home",
    components: {
      Header
    }
}
</script>

<style lang="scss">
@import "../resources/styles/home.style.scss";
</style>