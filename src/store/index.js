import { createStore } from "vuex";

const store = createStore({
  state: {
    down: false,
    preloaded: false,
    theme: "dark",
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export default store;
