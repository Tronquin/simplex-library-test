<template>
  <div class="results" v-if="books.length > 0">
    <div class="results--container">
      <div v-for="book in books" :key="book.id">
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
  <div v-else>
    <v-card width="100%" class="pa-10 text-center text-h4">
      <h2>Search For Some Amazing Books!</h2>
    </v-card>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
import Pagination from "./Pagination.vue";
export default {
  name: "SearchResults",
  components: {
    BookCard,
    Pagination,
  },
  props: {
    response: Object,
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
    response() {
      this.books = this.response.docs ? [...this.response.docs] : [];
      return this.response.docs ? [...this.response.docs] : [];
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
