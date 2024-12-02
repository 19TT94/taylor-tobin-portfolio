<template>
  <div id="bolt">
    <div
      id="point"
      :class="{ [`point-${store.state.theme}`]: store.state.theme }"
    ></div>
    <div id="dot"></div>
    <div
      id="box"
      :class="{ [`box-${store.state.theme}`]: store.state.theme }"
    ></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

import { isMobileDevice } from "@/utils/index.js";

onMounted(() => {
  // intial cursor state
  if (!isMobileDevice()) {
    let point = document.getElementById("point");
    let dot = document.getElementById("dot");
    let box = document.getElementById("box");

    // get mouse move events to set custom cursor
    window.addEventListener("mousemove", (e) => {
      point.style.top = e.clientY + "px";
      point.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";

      setTimeout(() => {
        box.style.top = e.clientY + "px";
        box.style.left = e.clientX + "px";
      }, 100);
    });

    // get all anchors and buttons
    const selectors = document.querySelectorAll("a,button");
    // iterate over elements to hijack mouse events
    for (var i = 0; i < selectors.length; i++) {
      // add classes on mouse enter
      selectors[i].onmouseenter = () => {
        box.classList.add("show");
      };
      // remove classes on mouse leave
      selectors[i].onmouseleave = () => {
        box.classList.remove("show");
      };
      // remove classes on mouse click
      selectors[i].onmousedown = () => {
        box.classList.remove("hide");
      };
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

#bolt {
  display: none;
  background-color: $white;

  @media #{$small} {
    display: block;
  }

  #point {
    pointer-events: none;
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: $cursor;
  }

  .point-dark {
    background-color: $white; // inverted from blend mode
  }

  .point-light {
    background-color: $black; // inverted from blend mode
  }

  #dot {
    pointer-events: none;
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    transition: all 0.3s, top 0s, left 0s;
    transform: translate(-50%, -50%);
    background-color: $white;
    mix-blend-mode: difference;
    z-index: $cursor;
  }

  #box {
    position: absolute;
    height: 20px;
    width: 20px;
    transform: translate(-50%, -50%);
    transition: all 0.3s, top 0s, left 0s;
    pointer-events: none;
    animation: spin 5s linear reverse infinite;
    z-index: $cursor;
    opacity: 0;
  }

  .box-dark {
    border: 1px solid $gold;
  }

  .box-light {
    border: 1px solid $black;
  }
}

.hide {
  opacity: 0 !important;
}

.show {
  opacity: 1 !important;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
