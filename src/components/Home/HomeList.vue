<template>
  <main class="list">
    <div class="container">
      <div class="list__search">
        <input type="text" class="list__input" placeholder="Search by name">
        <svg class="list__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" fill="#808080"/>
        </svg>
      </div>
      <div class="list__content">
        <HomeListItem
          v-for="item in 8"
          :key="item"/>
      </div>
    </div>
    <HomeModal />
  </main>
</template>

<script>
  import HomeListItem from "./HomeListItem";
  import HomeModal from "./HomeModal";
  export default {
    name: "HomeList",
    components: {HomeModal, HomeListItem}
  }
</script>

<style scoped lang="scss">
  .list {
    min-height: 66.6666vh;
    padding-bottom: 140px;
    background-color: #333;
    position: relative;
    &__search {
      display: flex;
      justify-content: center;
      padding-top: 85px;
    }
    &__input {
      width: 800px;
      height: 55px;
      padding-top: 20px;
      padding-right: 40px;
      margin-bottom: 45px;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #808080;
      background-color: #333;
      border-bottom: 1px solid #808080;
      transition: 0.2s ease-out;
    }
    &__icon {
      margin-left: -25px;
      margin-top: 20px;
    }
    &__content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding-top: 32px;
    }
  }
</style>
