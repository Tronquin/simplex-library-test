<template>
  <div class="results">
    <div class="results--container">
      <div v-for="book in docs" :key="book.id">
        <book-card :book="book" />
      </div>
    </div>
    <div class="results--pagination text-center mt-5">
      <pagination
        :finds="finds"
        :currentPage="currentPage"
        :paginationLength="paginationLength"
        @onPageChange="pageChange"
      />
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
import Pagination from "./pagination.vue";
export default {
  name: "SearchResults",
  components: {
    BookCard,
    Pagination,
  },
  props: {
    docs: Array,
    finds: Number,
    limit: Number,
  },
  data() {
    return {
      books: [],
      currentPage: 1,
    };
  },
  watch: {
    docs() {
      this.books = [...this.docs];
      return [...this.docs];
    },
    finds() {
      return this.finds;
    },
  },
  computed: {
    paginationLength: function () {
      return Math.round(this.finds / this.limit);
    },
  },
  methods: {
    pageChange(value) {
      this.currentPage = value;
      this.$emit("requestPage", value);
    },
  },
};
</script>

<style></style>
