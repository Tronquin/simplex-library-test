<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1 class="text-h4 font-weight-bold">Simplex Library</h1>
      </div>
    </v-app-bar>

    <v-main class="container mt-10 mb-10">
      <router-view />
    </v-main>
    <spinner :loading="loading" v-if="loading" />
  </v-app>
</template>

<script>
import Spinner from "./components/Spinner.vue";
import http from "./http-client";
export default {
  components: { Spinner },
  name: "App",

  data: () => ({
    loading: false,
  }),
  created() {
    // before a request is made start the nprogress
    http.interceptors.request.use((config) => {
      this.loading = true;
      return config;
    });

    // before a response is returned stop nprogress
    http.interceptors.response.use((response) => {
      this.loading = false;
      return response;
    });
  },
};
</script>
