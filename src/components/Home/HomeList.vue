<template>
  <main class="main">
    <div
      class="list"
      :class="{blockScroll: !canScroll}"
    >
      <div class="list__wrapper" v-if="!loading">
        <div class="container">
          <div class="list__search">
            <input
              type="text"
              class="list__input"
              placeholder="Search by name"
              v-model="request"
              @input="fetchSearch()"
            >
            <svg class="list__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z" fill="#808080"/>
            </svg>
          </div>
          <div class="list__content">
            <HomeListItem
              v-for="(item, i) in peopleData"
              :avatar="item.name.charAt(0)"
              :name="item.name"
              :species = "species[i]"
              :key="item.name"
              @activateModal="activateModal(item)"
            />
          </div>
          <infinite-loading v-if="canFetchPeople" @infinite="fetchMorePeople()"></infinite-loading>
        </div>
      </div>
      <AppLoader
        v-else
        :loaded = "loaded"
      />
    </div>

  </main>

</template>

<script>
  import HomeListItem from "./HomeListItem";
  import AppLoader from "../AppLoader";
  import InfiniteLoading from "vue-infinite-loading"
  import _ from 'lodash'

  export default {
    name: "HomeList",
    data: () => ({
      peopleData: [],
      speciesData: [],
      species: [],
      pagePeople: 1,
      canFetchPeople: true,
      loading: true,
      isModalClicked: false,
      isBlurred: false,
      loaded: false,
      canScroll: false,
      scrolling: true,
      afterSearch: false,
      request: ''
    }),
    methods: {
      getPeople: function() {
        this.peopleData = this.peopleData.concat(this.$store.getters.getPeople.results);
      },
      fetchSearch: _.debounce(function () {
        this.loading = true;
        this.loaded = false;
        this.peopleData = [];
        this.pagePeople = 1;
        let urlPeople = `https://swapi.co/api/people/?search=${this.request}&page=1`;
        this.$store.dispatch('fetchPeople', urlPeople);
        setTimeout(() => {
          this.getPeople();
          this.afterSearch = true;
          this.loading = false;
        }, 2000)
      }, 3000),
      fetchMorePeople: function() {
        let next = this.$store.getters.getPeople.next;
        if(this.canFetchPeople && next) {
          this.canFetchPeople = false;
          if(this.afterSearch === true) {
            this.$store.dispatch('fetchPeople', next);
              setTimeout(() => {
                this.$store.dispatch('fetchPeople', next);
                setTimeout(() => {
                  this.getPeople();
                  this.setSpecies(this.pagePeople);
                  this.canFetchPeople = true;
                }, 2500)
              }, 1000);
          } else {
            this.pagePeople++;
            let urlPeople = `https://swapi.co/api/people/?page=${this.pagePeople}`;
            setTimeout(() => {
              this.$store.dispatch('fetchPeople', urlPeople);
              setTimeout(() => {
                this.getPeople();
                this.setSpecies(this.pagePeople);
                this.canFetchPeople = true;
              }, 2500)
            }, 1000);
          }
        }
      },
      setSpecies: function (page) {
        let start = 10 * page - 10;
        for(let i = start; i < page * 10; i++) {
          if(!this.peopleData[i]) {
            break;
          } else if (this.peopleData[i].species.length === 0) {
            this.species.push('Unknown Species');
          } else {
            for(let j = 0; j < this.speciesData.length; j++) {
              if(this.speciesData[j].url === this.peopleData[i].species[0]) {
                this.species.push(this.speciesData[j].name);
              }
            }
          }
        }
      },
      activateModal: function (item) {
        this.$emit('activateModal', item)
      }
    },
    components: {AppLoader, HomeListItem, InfiniteLoading},
    mounted() {
      let urlPeople = `https://swapi.co/api/people/?page=${this.pagePeople}`;
      this.$store.dispatch('fetchPeople', urlPeople);
      this.$store.dispatch('fetchAllSpecies');
      setTimeout(() => {
        this.loaded = true;
        this.canScroll = true;
        setTimeout(() => {
          this.getPeople();
          this.speciesData = this.$store.getters.getSpecies;
          this.setSpecies(this.pagePeople);
          this.loading = false;
        }, 500)
      }, 2500);
    },
  }
</script>

<style scoped lang="scss">
  .openedModal {
    display: none;
  }
  .list {
    min-height: 66.6666vh;
    background-color: #333;
    position: relative;
    &__wrapper {
      padding-bottom: 140px;
    }
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
  .blurred {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  .blockScroll {
    position: fixed;
    width: 100%;
  }
  .infinite-loading-container {
    opacity: 0;
  }
</style>
