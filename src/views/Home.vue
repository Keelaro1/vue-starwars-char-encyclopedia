<template>
  <div class="home">
    <HomeHeader/>
    <AppLoader v-if="loading"/>
    <HomeList v-else />
    <HomeFooter />
  </div>
</template>

<script>
  import HomeHeader from "../components/Home/HomeHeader";
  import HomeList from "../components/Home/HomeList";
  import HomeFooter from "../components/Home/HomeFooter";
  import AppLoader from "../components/AppLoader";

export default {
  name: 'Home',
  components: {
    AppLoader,
    HomeFooter,
    HomeList,
    HomeHeader
  },
  data: () => ({
    loading: false
  })
}
</script>
