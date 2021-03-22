<template>
    <select
      v-model="value"
      class="form-select form-select-sm"
      aria-label=".form-select-sm example"
      placeholder="Select"
    >
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      ></option>
    </select>
</template>

<script>
export default {
  name: "SortItem",
  data() {
    return {
      options: [
        {
          value: "Random",
          label: "Random",
        },
        {
          value: "Name",
          label: "Name",
        },
        {
          value: "Price",
          label: "Price",
        },
        {
          value: "Voted",
          label: "Voted",
        },
      ],
      value: "",
    };
  },
  created() {
    //   console.log(this.getValue);
  },
  computed: {},
  methods: {},
};
</script>
