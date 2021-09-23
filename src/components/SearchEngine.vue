<template>
  <div class="search-engine pa-4">
    <div class="search-engine--bar">
      <search-bar v-model="value" @input="search($event)" />
    </div>
    <div class="search-engine--results mt-5">
      <search-results
        :response="books"
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
      books: {},
      value: "",
      mode: "everything",
      limit: 10,
    };
  },
  methods: {
    getBooks: async function () {
      try {
        const { data } = await BookRepository.getByQuery(
          this.value,
          this.limit,
          this.mode
        );
        this.books = data;
        this.triggerNotifications(this.books.numFound);
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!");
      }
    },
    getBooksByPage: async function (page) {
      try {
        const { data } = await BookRepository.getByPage(
          this.value,
          page,
          this.limit,
          this.mode
        );
        this.books = data;
        this.triggerNotifications(this.books.numFound);
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!");
      }
    },
    getBooksByAuthor: async function () {
      try {
        const { data } = await BookRepository.getByAuthor(
          this.value,
          this.limit,
          this.mode
        );
        this.books = data;
        this.triggerNotifications(this.books.numFound);
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!");
      }
    },
    getBooksByTitle: async function () {
      try {
        const { data } = await BookRepository.getByTitle(
          this.value,
          this.limit,
          this.mode
        );
        this.books = data;
        this.triggerNotifications(this.books.numFound);
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!");
      }
    },
    search: function () {
      if (this.value) {
        if (this.value.startsWith("author:")) {
          this.getBooksByAuthor(this.value.split("author:")[1]);
        } else if (this.value.startsWith("title:")) {
          this.getBooksByTitle(this.value.split("title:")[1]);
        } else {
          this.getBooks(this.value);
        }
      }
    },
    triggerNotifications(numFound = 0) {
      if (numFound > 0) {
        this.$toasted.success("Success!");
      } else {
        this.$toasted.show("No Results");
      }
    },
  },
};
</script>

<style></style>
