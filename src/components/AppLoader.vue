<template>
  <div class="loader"
    :class="{loaded: loaded}">
    <div class="loader__wrapper">
      <div class="loader__img"></div>
      <div class="loader__lights">
        <div class="loader__light loader__firstLight"></div>
        <div class="loader__light loader__secondLight"></div>
        <div class="loader__light loader__thirdLight"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppLoader",
    props: {
      loaded: {
        type: Boolean
      }
    }
  }
</script>

<style scoped lang="scss">
  .loader {
    background-color: #333;
    padding-top: 220px;
    opacity: 1;
    transition: 1s;
    &__wrapper {
      height: 200px;
      width: 200px;
      animation: spin 3000ms infinite linear;
      margin: 0 auto;
    }
    &__img {
      content: url("../assets/img/loader__img.svg");
      transform: rotate(25deg);
      width: 60px;
      height: 65px;
    }
    &__lights {
      transform: translate(11px, -8px);
      animation: fadeOut 1000ms infinite linear;
    }
    &__light {
      height: 2px;
      background-color: #6EF6FF;
      transform: rotate(25deg);
      margin-bottom: 2px;
    }
    &__firstLight {
      width: 13px;
    }
    &__secondLight {
      width: 11px;
      opacity: 0.4;
    }
    &__thirdLight {
      width: 8px;
      opacity: 0.1;
    }
  }
  .loaded {
    opacity: 0;
    transition: 1s;
  }
  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
</style>
