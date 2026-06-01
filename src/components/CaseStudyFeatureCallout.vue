<template>
  <article
    class="feature-callout"
    :class="[
      `feature-callout-image-${imagePosition}`,
      { [`feature-callout-${store.state.theme}`]: store.state.theme },
    ]"
  >
    <div class="feature-callout-content">
      <h3 class="feature-callout-title">{{ title }}</h3>
      <p class="feature-callout-description">{{ description }}</p>
    </div>
    <figure class="feature-callout-media">
      <img :src="image" :alt="imageAlt" loading="lazy" />
    </figure>
  </article>
</template>

<script setup>
import { useStore } from "vuex";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "",
  },
  imagePosition: {
    type: String,
    default: "right",
    validator: (value) => ["left", "right"].includes(value),
  },
});

const store = useStore();
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.feature-callout {
  display: grid;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);

  @media #{$small} {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 2.5rem;
  }

  &-image-right {
    @media #{$small} {
      .feature-callout-content {
        order: 1;
      }

      .feature-callout-media {
        order: 2;
      }
    }
  }

  &-image-left {
    @media #{$small} {
      .feature-callout-content {
        order: 2;
      }

      .feature-callout-media {
        order: 1;
      }
    }
  }

  .feature-callout-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $gold;
  }

  .feature-callout-description {
    font-size: 1.1rem;
    line-height: 1.7;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }

  .feature-callout-media {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 320px;
      height: auto;
      border-radius: 8px;
      object-fit: contain;
    }
  }

  &-light {
    background: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.15);

    .feature-callout-description {
      color: rgba(0, 0, 0, 0.8);
    }

  }
}
</style>
