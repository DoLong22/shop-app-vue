<template>
  <nav aria-label="Page navigation example" class="paging">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalItem"
      :page-size=12
      @current-change="nextPage($event)"
    >
    </el-pagination>
  </nav>
</template>

<script>

export default {
  name: "PagingView",
  props: {
    totalItem: {
      type: Number,
      default: 12,
    },
  },
  methods: {
    nextPage(page) {
      this.$store.dispatch("setCurrentPage", page);
    },
  },
};
</script>

<style scoped>
.paging {
  padding-top: 2rem;
}
</style>
