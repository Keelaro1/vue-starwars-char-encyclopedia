<template>
  <header class="header">
    <div class="header__bg">
      <div class="header__content">
        <div class="header__img-1"></div>
        <div class="header__text">
          Character Encyclopedia
        </div>
        <div class="header__img-2"></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style scoped lang="scss">
  .header {
    &__bg {
      background: url("../../assets/img/header-bg.jpg") no-repeat center;
      background-size: cover;
      width: 100%;
    }
    &__content {
      display: flex;
      min-height: 35vh;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__img-1 {
      background: url("../../assets/img/header__img-1.png");
      height: 96px;
      width: 406px;
    }
    &__img-2 {
      background: url("../../assets/img/header__img-2.png");
      height: 97px;
      width: 406px;
    }
    &__text {
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.15em;
      font-feature-settings: 'cpsp' on;
      color: #FFF;
      margin: 5px 0;
    }
  }

</style>
