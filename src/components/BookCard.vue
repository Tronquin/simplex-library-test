<template>
  <router-link
    :to="{ name: 'About', params: { key: book.key, book: book } }"
    class="text-decoration-none"
  >
    <v-card :book="book" class="book-card pa-4 mb-5">
      <v-list-item three-line class="pa-0">
        <v-img
          :lazy-src="bookCover(book)"
          max-height="200"
          max-width="150"
          :src="bookCover(book)"
          class="mr-6"
        ></v-img>
        <v-list-item-content class="align-self-center pa-0">
          <div class="text-h5 font-weight-bold mb-2">
            {{ book.title }}
          </div>
          <div class="d-flex mb-4">
            <v-list-item-title
              class="font-weight-regular text-h6 mb-1 mr-2"
              v-for="(author, i) in book.author_name"
              :key="i"
            >
              {{ author }}{{ i !== book.author_name.length - 1 ? ", " : "" }}
            </v-list-item-title>
          </div>
          <v-list-item-subtitle class="mb-2"
            >First Published In
            {{ book.first_publish_year }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >Editions: {{ book.edition_count }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
  data() {
    return {};
  },
  methods: {
    bookCover(book) {
      return `http://covers.openlibrary.org/b/isbn/${
        book.isbn && book.isbn.length >= 0 ? book.isbn[0] : 0
      }-M.jpg`;
    },
  },
};
</script>

<style>
.book-card .v-list-item__title {
  flex: 0 1 auto;
}
</style>
