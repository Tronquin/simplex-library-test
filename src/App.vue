<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" class="yellow--text text-decoration-none">
        <div class="d-flex align-center">
          <h1 class="text-h4 font-weight-bold">Simplex Library</h1>
        </div>
      </router-link>
    </v-app-bar>

    <v-main class="container mt-10 mb-10">
      <router-view />
    </v-main>
    <spinner />
    <toast-notifications />
  </v-app>
</template>

<script>
import Spinner from "./components/Spinner.vue";
import ToastNotifications from "./components/ToastNotifications.vue";
export default {
  components: { Spinner, ToastNotifications },
  name: "App",

  data: () => ({}),
};
</script>
