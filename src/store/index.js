import { createStore } from "vuex";

const store = createStore({
  state: {
    down: false,
    preloaded: false,
  },
});

export default store;
