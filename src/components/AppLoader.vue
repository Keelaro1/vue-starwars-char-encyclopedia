<template>
  <div class="loader"
    :class="{loaded: loaded}">
    <div
      class="loader__wrapper"
    >
      <div class="loader__img"></div>
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
    height: 66.666vh;
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
      content: url("../assets/img/loader__falcon.svg");
      transform: rotate(25deg);
      width: 60px;
      height: 65px;
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
</style>
