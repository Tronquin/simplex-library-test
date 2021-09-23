<template>
  <div class="search-engine">
    <div class="search-engine--bar">
      <search-bar v-model="value" @input="search" />
    </div>
    <div class="search-engine--results mt-5">
      <search-results
        :docs="books.docs"
        :limit="limit"
        :finds="books.numFound"
        @requestPage="getBooksByPage"
      />
    </div>
  </div>
</template>

<script>
import Repository from "../repositories/repository.factory";
import SearchBar from "./SearchBar.vue";
import SearchResults from "./SearchResults.vue";
const BookRepository = Repository.get("books");

export default {
  components: { SearchBar, SearchResults },
  name: "SearchEngine",
  data() {
    return {
      books: [],
      value: "",
      mode: "everything",
      limit: 10,
      loading: false,
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks: async function () {
      const { data } = await BookRepository.getByQuery(
        this.value,
        this.limit,
        this.mode
      );
      this.books = data;
    },
    getBooksByPage: async function (page) {
      const { data } = await BookRepository.getByPage(
        this.value,
        page,
        this.limit,
        this.mode
      );
      this.books = data;
    },
    search: function () {
      this.getBooks(this.value);
    },
  },
};
</script>

<style></style>
