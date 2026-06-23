<template>
  <div class="page card">
    <section class="section left" aria-hidden="true">
      <img
        class="card-logo"
        src="@/assets/images/tail-portfolio.png"
        alt=""
      />
    </section>

    <section class="section right">
      <div class="info">
        <header class="intro">
          <h1>Taylor Tobin</h1>
          <p class="role">Software Engineer</p>
          <p class="tagline">Open to work · Full-stack &amp; AI</p>
        </header>

        <ul class="contact-details">
          <li>
            <span>Email:</span>
            <a
              href="mailto:ttobin.dev@gmail.com"
              aria-label="Email me at ttobin.dev@gmail.com"
            >
              ttobin.dev@gmail.com
            </a>
          </li>
          <!-- <li>
            <span>Phone:</span>
            <a
              class="mobile"
              href="tel:805-434-7559"
              aria-label="Call me at (805) 434-7559"
            >
              (805) 434-7559
            </a>
            <span class="desktop">805.434.7559</span>
          </li> -->
        </ul>

        <ul class="links">
          <li>
            <a
              href="https://github.com/19TT94"
              aria-label="View my profile on GitHub"
            >
              <font-awesome-icon :icon="['fab', 'github-square']" />
              <span class="handle">@19tt94</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/taylor-tobin/"
              aria-label="View my profile on LinkedIn"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
              <span class="handle">@taylor-tobin</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/19tt94/"
              aria-label="View my profile on Instagram"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" />
              <span class="handle">@19tt94</span>
            </a>
          </li>
        </ul>

        <div class="actions">
          <a
            class="button action"
            :href="Resume"
            download="Taylor-Tobin-Resume.pdf"
            aria-label="Download resume"
          >
            Resume
          </a>

          <router-link class="button action" to="/">
            View portfolio
          </router-link>

          <a
            class="button action"
            :href="calendlyUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>

          <!-- Client inquiry form — not ideal for a quick conference share link
          <router-link class="button action" to="/contact">
            Submit proposal
          </router-link>
          -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Resume from "@/assets/documents/TTResume2026.pdf";

const calendlyUrl = "https://calendly.com/ttobin-dev";
</script>

<style scoped lang="scss">
@import "@/assets/scss/app.scss";

.card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100dvh;
  min-height: 100dvh;
  box-sizing: border-box;
  overflow: hidden;
  color: $white;

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    z-index: $default;
  }

  .left {
    flex: 0 0 auto;
    padding: calc($pad * 2) $pad;
  }

  .right {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background: $black;
    box-shadow: 0 -15px 15px rgba(0, 0, 0, 0.6);
    padding: calc($pad * 2) $pad;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .card-logo {
    display: block;
    width: auto;
    height: clamp(4.5rem, 16vh, 7rem);
    max-width: min(10rem, 40vw);
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

  .info {
    display: flex;
    text-align: left;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .intro {
    text-align: center;
    width: 100%;
    margin: 0 0 calc($pad / 2);

    h1 {
      font-size: 1.75rem;
      padding: 0;
      margin: 0 0 0.25rem;
      line-height: 1.2;
    }

    .role {
      font-family: $title-font;
      font-size: 1rem;
      font-weight: 600;
      color: $gold;
      margin: 0 0 0.35rem;
      letter-spacing: 1px;
    }

    .tagline {
      font-size: 0.85rem;
      line-height: 1.4;
      margin: 0 0 0.5rem;
      opacity: 0.85;
    }
  }

  .contact-details,
  .links {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0 0 0.75rem;
    list-style: none;

    li {
      padding: 0 0 0.4rem;
    }
  }

  .contact-details {
    font-size: 0.9rem;
    word-break: break-word;

    span:first-child {
      opacity: 0.75;
    }
  }

  .handle {
    padding-left: 0.25rem;
  }

  .actions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: calc($pad / 2);
    width: 100%;
    min-width: 0;
    margin-top: 0.25rem;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 0.5rem 0.75rem;
    border: 1px solid $gold;
    font-size: 0.8rem;
    text-align: center;
    margin: 0;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
      -webkit-text-stroke: 1px $turquiose;
    }
  }

  // Landscape phones, tablets, and desktop
  @media (orientation: landscape), (min-width: 768px) {
    position: relative;
    display: block;

    .section {
      position: absolute;
      width: 50%;
      height: 100%;
    }

    .left {
      left: 0;
      padding: 0;
    }

    .right {
      right: 0;
      flex: none;
      min-height: auto;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: $pad;
      box-shadow: -15px -15px 15px rgba(0, 0, 0, 0.6);
    }

    .info {
      max-width: 22rem;
      justify-content: center;
    }

    .card-logo {
      width: 50%;
      height: auto;
      max-width: none;
    }
  }
}
</style>
