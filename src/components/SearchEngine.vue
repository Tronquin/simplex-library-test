<template>
  <div class="search-engine">
    <div class="search-engine--input">
      <search-bar v-model="value" @input="search" />
    </div>
    {{ books }}
  </div>
</template>

<script>
import Repository from "../repositories/repository.factory";
import SearchBar from "./SearchBar.vue";
const BookRepository = Repository.get("books");

export default {
  components: { SearchBar },
  name: "SearchEngine",
  data() {
    return {
      books: [],
      value: "",
      mode: "everything",
      limit: 30,
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
    search: function () {
      this.getBooks(this.value);
    },
  },
};
</script>

<style></style>
