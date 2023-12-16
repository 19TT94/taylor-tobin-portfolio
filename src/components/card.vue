<template>
  <div class="page contact">
    <h2 class="title">Taylor Tobin</h2>
    <section class="section left">
      <img class="home-button" src="@/assets/images/tobin.png" />
    </section>
    <section class="section right">
      <div class="info">
        <h2>Get In Touch</h2>
        <ul>
          <li>
            <span>Email:</span>
            <a href="mailto:19tt94@gmail.com">19tt94@gmail.com</a>
          </li>
          <li>
            <span>Phone:</span>
            <a class="mobile" href="tel:805-434-7559">(805) 434-7559</a>
            <span class="desktop">(805) 434-7559</span>
          </li>
        </ul>

        <ul class="links">
          <li>
            <a href="https://github.com/19TT94">
              <font-awesome-icon :icon="['fab', 'github-square']" />
              <span class="amp">@</span>19tt94
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/taylor-tobin/">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
              <span class="amp">@</span>taylor-tobin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/19tt94/">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <span class="amp">@</span>19tt94
            </a>
          </li>
        </ul>

        <button>
          <a
            class="button resume"
            :href="require('@/assets/TTResume.pdf')"
            download="resume.pdf"
            >Resume</a
          >
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss"; // global styles

.contact {
  color: $white;

  .title {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1rem;
  }

  .section {
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: $default;
    display: flex;
    align-items: center;
    justify-content: center;

    .info {
      display: flex;
      text-align: left;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      .subtitle {
        display: none;

        @media #{$small} {
          display: block;
        }
      }
    }

    .home-button {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      animation: spin 5s infinite;

      @keyframes spin {
        0% {
          transform: rotateY(-360deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }
    }
  }

  .right {
    right: 0;
    background: $black;
    box-shadow: -15px -15px 15px rgba(0, 0, 0, 0.6);
  }

  .left {
    left: 0;
  }

  .amp {
    padding-left: 0.5rem;
  }
}

.mobile {
  @media #{$small} {
    display: none;
  }
}

.desktop {
  display: none;

  @media #{$small} {
    display: inline-block;
  }
}
</style>
