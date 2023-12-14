<template>
  <div class="page not-found">
    <h1>404 Not Found</h1>
    <router-link class="button" to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $white;
}
</style>
