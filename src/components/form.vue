<template>
  <div class="netlify-form">
    <div class="form" v-if="!processed">
      <h2>Get In Touch</h2>

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
          <button class="button submit" type="submit">Send</button>
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
import axios from "axios";

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
  display: relative;

  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    width: 90%;

    input,
    textarea {
      width: 100%;
      margin: 10px 0;
      font-size: 0.75rem;

      @media #{$small} {
        font-size: inherit;
      }
    }

    button {
      margin: 20px 0 0;
    }
  }

  .message {
    max-width: 80%;
    margin: 0 auto;
    color: $gold;
  }
}
</style>
