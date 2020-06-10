// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faUser,
//   faCartPlus,
//   faHome,
//   faSearch,
//   faArrowLeft
// } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/utils/plugins.js";

// library.add(faUser, faCartPlus, faHome, faSearch, faArrowLeft);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
