<template>
  <div class="loading">
      <img src="img/monkey.gif" alt="">
  </div>
</template>

<script>
export default {
    name:"Loading"
}
</script>

<style>
    .loading{
        position: fixed;
        z-index: 1000;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    }
</style>