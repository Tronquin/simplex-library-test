<template>
  <div class="pagination" v-if="finds > 0">
    <v-pagination
      v-model="pages"
      :length="paginationLength"
      :total-visible="8"
      :value="currentPage"
      @input="onPageChange($event)"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    finds: Number,
    currentPage: Number,
    paginationLength: Number,
  },
  data() {
    return {
      pages: 1,
    };
  },
  watch: {
    finds() {
      this.pages = this.finds;
      return this.finds;
    },
    currentPage() {
      return this.currentPage;
    },
    paginationLength() {
      return this.paginationLength;
    },
  },
  methods: {
    onPageChange(value) {
      this.$emit("onPageChange", value);
    },
  },
};
</script>
