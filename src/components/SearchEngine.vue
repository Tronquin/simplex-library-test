<template>
  <div class="search-engine">
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
        this.$toasted.success("Success!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
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
        this.$toasted.success("Success!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
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
        this.$toasted.success("Success!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
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
        this.$toasted.success("Success!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
      } catch (error) {
        this.books = {};
        this.$toasted.error("An Error Has Ocurred!", {
          theme: "bubble",
          position: "bottom-right",
          duration: 5000,
        });
      }
    },
    search: function () {
      if (this.value.startsWith("author:")) {
        this.getBooksByAuthor(this.value.split("author:")[1]);
      } else if (this.value.startsWith("title:")) {
        this.getBooksByTitle(this.value.split("title:")[1]);
      } else {
        this.getBooks(this.value);
      }
    },
  },
};
</script>

<style></style>
