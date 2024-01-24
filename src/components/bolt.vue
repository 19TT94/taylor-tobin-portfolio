<template>
  <div id="bolt">
    <div id="dot"></div>
    <div id="box"></div>
    <div id="diamond"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import utils from "@/utils/index.js";

// const selectors = ref(null);

onMounted(() => {
  // intial cursor state
  if (!utils.isMobileDevice()) {
    let dot = document.getElementById("dot");
    let box = document.getElementById("box");
    let diamond = document.getElementById("diamond");

    // get mouse move events to set custom cursor
    window.addEventListener("mousemove", (e) => {
      dot.style.top = e.clientY + "px";
      dot.style.left = e.clientX + "px";

      setTimeout(() => {
        box.style.top = e.clientY + "px";
        box.style.left = e.clientX + "px";
      }, 100);

      setTimeout(() => {
        diamond.style.top = e.clientY + "px";
        diamond.style.left = e.clientX + "px";
      }, 150);
    });

    // get all anchors and buttons
    const selectors = document.querySelectorAll("a,button");
    // iterate over elements to hijack mouse events
    for (var i = 0; i < selectors.length; i++) {
      // add classes on mouse enter
      selectors[i].onmouseenter = () => {
        // dot.classList.add("grow");
        // box.classList.add("hide");
        // diamond.classList.add("hide");

        box.classList.add("show");
        diamond.classList.add("show");
      };
      // remove classes on mouse leave
      selectors[i].onmouseleave = () => {
        // dot.classList.remove("grow");
        // box.classList.remove("hide");
        // diamond.classList.remove("hide");

        box.classList.remove("show");
        diamond.classList.remove("show");
      };
      // remove classes on mouse click
      // selectors.value[i].onmousedown = () => {
      //   // dot.classList.remove("grow");
      //   box.classList.remove("hide");
      //   diamond.classList.remove("hide");
      // };
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

#bolt {
  display: none;

  @media #{$small} {
    display: block;
  }

  #dot {
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transition: all 0.3s, top 0s, left 0s;
    transform: translate(-50%, -50%);
    pointer-events: none;
    background-color: $white;
    mix-blend-mode: difference;
    z-index: 10;
  }

  #box {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 1px solid $gold;
    transform: translate(-50%, -50%);
    transition: all 0.3s, top 0s, left 0s;
    pointer-events: none;
    animation: spin 5s linear reverse infinite;
    z-index: 10;

    // opacity: 0;
  }

  #diamond {
    position: absolute;
    height: 20px;
    width: 20px;
    border: 1px solid $white;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.3s, top 0s, left 0s;
    pointer-events: none;
    animation: spin 5s linear infinite;
    mix-blend-mode: difference;
    z-index: 10;

    // opacity: 0;
  }
}

// .grow {
//   transform: translate(-50%, -50%) scale(4) !important;
// }

.hide {
  opacity: 0;
}

.show {
  opacity: 1;
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
