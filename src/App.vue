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
    <spinner />
  </v-app>
</template>

<script>
import Spinner from "./components/Spinner.vue";
export default {
  components: { Spinner },
  name: "App",

  data: () => ({}),
};
</script>
