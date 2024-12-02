import { createStore } from "vuex";

const store = createStore({
  state: {
    down: false,
    preload: false,
    preloaded: false,
    theme: "dark",
  },
  mutations: {
    toggleTheme(state) {
      state.preload = false;
      state.preloaded = false;
      state.theme = state.theme === "dark" ? "light" : "dark";
      setTimeout(() => {
        store.state.preload = true;
        setTimeout(() => {
          store.state.preloaded = true;
        }, 500);
      }, 1500);
    },
  },
});

export default store;
