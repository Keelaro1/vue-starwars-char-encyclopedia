<template>
  <footer class="footer">
    <div class="footer__text">
      STAR WARS CHARACTER Encyclopedia, {{ currentYear }}
    </div>
  </footer>
</template>

<script>
  export default {
    name: "HomeFooter",
    computed: {
      currentYear: () => {
        return new Date().getFullYear();
      }
    }
  }
</script>

<style scoped lang="scss">
  .footer {
    background: #1A1A1A;
    min-height: 120px;
    &__text {
      text-transform: uppercase;
      font-size: 18px;
      line-height: 121px;
      font-weight: bold;
      text-align: center;
      letter-spacing: 0.11em;
      font-feature-settings: 'cpsp' on;
      color: #FFF;
    }
  }
</style>
