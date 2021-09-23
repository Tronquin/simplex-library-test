<template>
  <v-card :book="book">
    {{ book.title }}
  </v-card>
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
};
</script>

<style></style>
