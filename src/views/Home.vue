<template>
  <div class="home">
    <div class="home__content"
     :class="{blurred: isBlurred}"
    >
      <HomeHeader/>
      <HomeList
        @activateModal="activateModal"
      />
      <HomeFooter />
    </div>
    <HomeModal
      :isModalClicked="isModalClicked"
      :dataFromItem="dataFromItem"
      @hideModal="hideModal()"
    />
  </div>

</template>

<script>
  import HomeHeader from "../components/Home/HomeHeader";
  import HomeList from "../components/Home/HomeList";
  import HomeFooter from "../components/Home/HomeFooter";
  import HomeModal from "../components/Home/HomeModal";

export default {
  name: 'Home',
  components: {
    HomeFooter,
    HomeList,
    HomeHeader,
    HomeModal
  },
  data: () => ({
    isBlurred: false,
    isModalClicked: false,
    dataFromItem: []
  }),
  methods: {
    activateModal: function (item) {
      this.isModalClicked = true;
      this.isBlurred = true;
      this.$store.dispatch('fetchDataModal', {species: item.species, homeworld: item.homeworld, films: item.films});
      setTimeout(() => {
        this.dataFromItem = this.$store.getters.getDataModal;
        this.dataFromItem.push(item);
      }, 2000)
    },
    hideModal: function () {
      this.isModalClicked = false;
      this.isBlurred = false;
    },
  },
}
</script>
<style scoped lang="scss">
  .blurred {
    pointer-events: none;
    margin: 0px -25px;
    -webkit-filter: blur(14px);
    -moz-filter: blur(14px);
    -o-filter: blur(14px);
    -ms-filter: blur(14px);
    filter: blur(14px);
  }
</style>

