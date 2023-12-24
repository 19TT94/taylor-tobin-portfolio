<template>
  <div class="preloader">
    <div class="loader hide" :class="{ show: show }">
      <img src="@/assets/images/loader.svg" />
      <img src="@/assets/images/loader.svg" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 500);
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $black;
  color: $white;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    animation: title 1s ease;
  }

  .loader {
    position: relative;
    width: 114px;
    height: 10px;
    margin: 0 auto;
    overflow: hidden;

    img {
      width: 100%;
      animation: wave 1s;
      position: absolute;

      &:first-child {
        animation: wave1 linear 3s infinite;
      }

      &:last-child {
        animation: wave2 linear 3s infinite;
      }
    }
  }
}

.move-up {
  transform: translateY(0%);
  transition: all 1s ease;
}

/* Animation */
@keyframes title {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes wave1 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(97.99%);
  }
}

@keyframes wave2 {
  0% {
    transform: translateX(-97.99%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
