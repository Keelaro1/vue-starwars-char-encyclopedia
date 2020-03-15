<template>
  <div class="loader">
    <div class="loader__wrapper" >
      <div class="loader__img"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeModalLoader",
    props: {
      loadingModal: {
        type: Boolean
      }
    }
  }
</script>

<style scoped lang="scss">
  .loader {
    width: 840px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    border-radius: 8px;
    background-color: #1A1A1A;
    transform: translate(-50%, -50%);
    display: none;
    animation: fadein 0.2s ease-in;
    &__wrapper {
      height: 200px;
      width: 200px;
      animation: spin 3000ms infinite linear;
      margin: 150px auto 0;
    }
    &__img {
      content: url("../../assets/img/loader__falcon.svg");
      transform: rotate(25deg);
      width: 60px;
      height: 65px;
    }
  }
  .displayModal {
    display: block;
  }
  .loaded {
    opacity: 0;
    transition: 1s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
      margin-top: 10px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
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
