<template>
  <div class="loading-spinner">
    <spinner :size="75" :depth="10" color="#F9EC31"></spinner>
  </div>
</template>

<script>
import Spinner from "vue-spinner-component/src/Spinner.vue";

export default {
  components: {
    Spinner,
  },
};
</script>

<style>
.loading-spinner {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00000056;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
