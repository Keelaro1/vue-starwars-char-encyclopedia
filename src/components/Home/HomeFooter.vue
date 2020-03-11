<template>
  <footer class="footer">
    <div class="footer__text">
      STAR WARS CHARACTER Encyclopedia, 2019
    </div>
  </footer>
</template>

<script>
  export default {
    name: "HomeFooter"
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
      text-align: center;
      letter-spacing: 0.11em;
      font-feature-settings: 'cpsp' on;
      color: #FFF;
    }
  }
</style>
