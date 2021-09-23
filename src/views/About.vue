<template>
  <div class="about">
    {{ book }}
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
