import { createApp } from "vue";
import Vue3TouchEvents from "vue3-touch-events";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

library.add(faMapMarker, faGithubSquare, faLinkedin, faInstagram);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Vue3TouchEvents);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
