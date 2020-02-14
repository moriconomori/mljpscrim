import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag"

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: "UA-158373345-1" },
}, router);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
