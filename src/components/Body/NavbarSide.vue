<template>
  <li class="nav-item">
    <select class="" id="filterByPrice" @change="filterByPrice">
      <option selected>All price</option>
      <option value="1">From 1.000 to 15.000</option>
      <option value="2">From 15.000 to 30.000</option>
      <option value="3">From 30.000 to 45.000</option>
      <option value="4">Greater 45.000</option>
    </select>
  </li>
</template>

<script>
export default {
  name: "NavbarSide",
  methods: {
    filterByPrice() {
      const filterValue = document.getElementById("filterByPrice").value;
      this.$store.dispatch("setFilter", {
        filterBy: "price",
        filterValue,
      });
    },
  },
};
</script>

<style lang='scss'>
@import "@/resources/styles/navbar-side.style.scss";
</style>