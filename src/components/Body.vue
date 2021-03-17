<template>
  <div class="body">
    <div class="container-fluid">
      <Category />
      <div class="row">
          <div class="col-3">
              <NavbarSide/>
          </div>
          <div class="col-9">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";
import NavbarSide from './NavbarSide.vue';

export default {
  name: "Body",
  components: {
    Category,
    NavbarSide,
  },
};
</script>

<style lang="scss">
@import "../resources/styles/body.style.scss"
</style>
