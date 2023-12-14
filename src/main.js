import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueHammer } from "vue2-hammer";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMapMarker, faGithubSquare, faLinkedin, faInstagram);

// vue.component("font-awesome-icon", FontAwesomeIcon);

const app = createApp(App);

app.use(router);
app.use(VueHammer);

app.mount("#app");
