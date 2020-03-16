<template>
  <div class="modal__loader">
    <div class="modal__loader-wrapper" >
      <div class="modal__loader-img"></div>
      <div class="modal__loader-lights">
        <div class="modal__loader-light modal__loader-firstLight"></div>
        <div class="modal__loader__light modal__loader-secondLight"></div>
        <div class="modal__loader-light modal__loader-thirdLight"></div>
      </div>
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
  .modal__loader {
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
    &-wrapper {
      height: 200px;
      width: 200px;
      animation: spin 3000ms infinite linear;
      margin: 150px auto 0;
    }
    &-img {
      content: url("../../assets/img/loader__img.svg");
      transform: rotate(25deg);
      width: 60px;
      height: 65px;
    }
    &-lights {
      transform: translate(11px, -8px);
      animation: fadeOut 1000ms infinite linear;
    }
    &-light {
      height: 2px;
      background-color: #6EF6FF;
      transform: rotate(25deg);
      margin-bottom: 2px;
    }
    &-firstLight {
      width: 13px;
    }
    &-secondLight {
      width: 11px;
      opacity: 0.4;
    }
    &-thirdLight {
      width: 8px;
      opacity: 0.1;
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
      margin-top: 0;
    }
  }
  @keyframes fadeOut {
    to {
      opacity: 0;
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
