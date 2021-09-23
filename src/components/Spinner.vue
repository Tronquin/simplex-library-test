<template>
  <div class="loading-spinner" :loading="loading" v-if="loading">
    <spinner :size="75" :depth="10" color="#F9EC31"></spinner>
  </div>
</template>

<script>
import Spinner from "vue-spinner-component/src/Spinner.vue";
import http from "../http-client";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      loading: false,
    };
  },
  created() {
    // before a request is made start the nprogress
    http.interceptors.request.use(
      (config) => {
        this.loading = true;
        return config;
      },
      () => {
        this.loading = false;
      }
    );

    // before a response is returned stop nprogress
    http.interceptors.response.use(
      (response) => {
        this.loading = false;
        return response;
      },
      () => {
        this.loading = false;
      }
    );
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
