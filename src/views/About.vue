<template>
  <div class="page about">
    <h2>
      "Life moves pretty fast. If you don't stop and look around once in a
      while, you could miss it."
    </h2>
    <p>
      My name is Taylor Tobin. I am currently a Junior Fullstack Web Developer
      at <a href="https://pxlagency.com">PXL Agency</a>. I grew up in a small
      town in Central California never thinking I would be a programmer.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.about {
  background: $white;
  color: $black;
  padding: 3rem 1rem;
}
</style>
