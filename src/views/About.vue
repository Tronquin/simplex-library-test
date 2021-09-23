<template>
  <div class="about">
    <v-layout>
      {{ book }}
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
};
</script>

<style></style>
