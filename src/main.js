import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import Toasted from "vue-toasted";
Vue.use(Toasted, {
  theme: "bubble",
  position: "bottom-right",
  duration: 5000,
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
