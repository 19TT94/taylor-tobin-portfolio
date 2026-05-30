<template>
  <div class="netlify-form">
    <div class="form" v-if="!processed">
      <h2
        :class="{
          [`form-heading-${store.state.theme}`]: store.state.theme,
        }"
      >
        Get In Touch
      </h2>

      <form
        id="form"
        name="inquiries"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit()"
      >
        <input type="hidden" name="form-name" value="inquries" />
        <input placeholder="Name" type="text" name="name" v-model="name" />
        <input placeholder="Email" type="email" name="email" v-model="email" />
        <textarea placeholder="Inquiry" name="message" v-model="message">
        </textarea>
        <div>
          <button
            class="button submit"
            :class="{ [`submit-${store.state.theme}`]: store.state.theme }"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <div class="proccessed" v-else>
      <div class="message">
        <h3 v-if="success">
          Your message has been recieved, I will reach out!
        </h3>
        <h3 v-else>
          There was an error processing you're request. Please try again later
          or contact me via email.
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import axios from "axios";

const store = useStore();

const name = ref("");
const email = ref("");
const message = ref("");
const processed = ref(false);
const success = ref(false);

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

const handleSubmit = () => {
  const axiosConfig = {
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(
      "/",
      encode({
        "form-name": "inquiries",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
      axiosConfig
    )
    .then(() => {
      processed.value = true;
      success.value = true;
    })
    .catch(() => {
      processed.value = true;
      success.value = false;
    });
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.netlify-form {
  width: 100%;
  max-width: 32rem;
  min-width: 0;
  text-align: center;
  box-sizing: border-box;

  .form {
    width: 100%;
    min-width: 0;
  }

  .form-heading-dark,
  .form-heading-light {
    font-size: 2.25rem;
    margin-bottom: calc($pad * 2);
    padding: 0;

    @media #{$small} {
      font-size: 2rem;
      margin-bottom: calc($pad * 1.5);
    }
  }

  .form-heading-dark {
    color: $white;
  }

  .form-heading-light {
    color: $black;
  }

  #form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;

    input,
    textarea {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      margin: 0.65rem 0;
      padding: 0.9rem 1rem;
      font-size: 1rem;
      line-height: 1.4;

      @media #{$small} {
        font-size: 0.95rem;
        padding: 0.85rem 1rem;
      }

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 1px $turquiose;
      }
    }

    textarea {
      min-height: 10rem;
      resize: vertical;

      @media #{$small} {
        min-height: 8rem;
      }
    }

    button {
      align-self: center;
      margin: calc($pad * 1.5) 0 0;
      padding: 0.75rem 2.75rem;
      font-size: 1rem;
      width: fit-content;

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: none;
        -webkit-text-stroke: 1px $turquiose;
      }
    }
  }

  .message {
    max-width: 80%;
    margin: 0 auto;
    color: $gold;
  }

  .submit-light {
    color: $black;
    border: 1px solid $black;
  }

  .submit-dark {
    color: $gold;
    border: 1px solid $gold;
  }
}
</style>
