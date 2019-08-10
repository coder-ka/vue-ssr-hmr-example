import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}
