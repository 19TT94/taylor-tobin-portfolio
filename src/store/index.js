import { createStore } from "vuex";

const store = createStore({
  state: {
    down: true,
    preloaded: false,
  },
});

export default store;
