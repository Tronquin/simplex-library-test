<template>
  <div class="about">
    <v-layout class="d-flex flex-column pa-4">
      <v-row class="d-flex flex-column flex-md-row">
        <v-col class="col-md-4">
          <v-card class="pa-4">
            <v-img :lazy-src="bookCover(book)" :src="bookCover(book)"></v-img
          ></v-card>
        </v-col>
        <v-col class="col-md-8">
          <v-card class="pa-4 d-flex align-center" height="100%">
            <v-list-item three-line class="pa-0">
              <v-list-item-content class="align-self-center pa-0">
                <div class="text-h5 font-weight-bold mb-2">
                  {{ book.title }}
                </div>
                <div class="d-flex mb-4">
                  <h5 class="font-weight-regular text-h6 mr-2">By</h5>
                  <v-list-item-title
                    class="font-weight-regular text-h6 mb-1 mr-2"
                    v-for="(author, i) in book.author_name"
                    :key="i"
                  >
                    {{ author
                    }}{{ i !== book.author_name.length - 1 ? ", " : "" }}
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
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-card class="pa-4 mr-2 ml-2" width="100%">
          <div class="subjects-container">
            <h5 class="text-h5 mr-4 mb-4">Subjects:</h5>
            <div class="subjects-list">
              <v-list-item-title
                class="font-weight-regular text-sm mb-1 mr-2 subject"
                v-for="(subject, i) in book.subject"
                :key="i"
              >
                {{ subject }}{{ i !== book.subject.length - 1 ? ", " : "" }}
              </v-list-item-title>
            </div>
          </div>
        </v-card>
      </v-row>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return { book: {} };
  },
  created() {
    this.book = this.$route.params.book;
  },
  methods: {
    bookCover(book) {
      return `http://covers.openlibrary.org/b/isbn/${
        book.isbn && book.isbn.length >= 0 ? book.isbn[0] : 0
      }-L.jpg`;
    },
  },
};
</script>

<style>
.subject {
  flex: 1;
  margin: 0;
}

.subjects-container {
  display: flex;
  flex-flow: column wrap;
}

.subjects-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>
