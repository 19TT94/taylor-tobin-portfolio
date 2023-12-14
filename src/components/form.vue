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
          There was an error processing you're resquest. Please try again later
          or contact me via email.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
// const axios = require("axios");

export default {
  name: "NetlifyForm",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      processed: false,
      success: false,
    };
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      axios
        .post(
          "/",
          this.encode({
            "form-name": "inquiries",
            name: this.name,
            email: this.email,
            message: this.message,
          }),
          axiosConfig
        )
        .then(() => {
          this.processed = true;
          this.success = true;
        })
        .catch((e) => {
          this.processed = true;
          this.success = false;
        });
    },
  },
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

      // @media #{$small} {
      //   font-size: inherit;
      // }
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
