<template>
  <div class="home">
    <HomeHeader/>
    <HomeList />
    <HomeFooter />
  </div>
</template>

<script>
  import HomeHeader from "../components/Home/HomeHeader";
  import HomeList from "../components/Home/HomeList";
  import HomeFooter from "../components/Home/HomeFooter";

export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeList,
    HomeHeader
  },
  data: () => ({
  }),
  mounted() {
  }
}
</script>
