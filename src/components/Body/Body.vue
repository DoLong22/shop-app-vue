<template>
  <div class="body">
    <div class="container-fluid">
      <div class="row">
        <Category />
      </div>
      <div class="row">
        <div class="col-3">
          <NavbarSide />
        </div>
        <div class="col-9">
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";
import Content from "./Content.vue";
import NavbarSide from "./NavbarSide.vue";

export default {
  name: "Body",
  components: {
    Category,
    NavbarSide,
    Content,
  },
};
</script>
<style lang="scss">
@import "@/resources/styles/body.style.scss";
</style>
