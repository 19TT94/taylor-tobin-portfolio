import { createApp } from "vue";
import Vue3TouchEvents from "vue3-touch-events";
// DayJS
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarker,
  faSun,
  faMoon,
  faCircle,
  faLocation,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

library.add(
  faMapMarker,
  faGithubSquare,
  faLinkedin,
  faInstagram,
  faSun,
  faMoon,
  faCircle,
  faLocation,
  faCog
);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Vue3TouchEvents);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
