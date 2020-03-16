<template>
  <div class="modal__main">
    <div class="modal__wrapper">
    </div>
    <div
      class="modal"
      :class="{displayModal: isModalClicked}"
      v-if="!loadingModal"
    >
      <div class="modal__content">
        <div class="modal__name">
          <div
            class="modal__name_avatar"
            :style="{backgroundColor: getColor}"
          >
            {{ getName.charAt(0) }}
          </div>
          <div class="modal__name_text">
            {{ getName }}
          </div>
        </div>
        <div class="modal__info">
          <table>
            <tr class="modal__info_row">
              <td>
              <span class="modal__info_byear modal__info_item">
                Birth year
              </span>
              </td>
              <td>
              <span class="modal__info_description">
                {{ getBirthYear }}
              </span>
              </td>
            </tr >
            <tr class="modal__info_row">
              <td>
              <span class="modal__info_species modal__info_item">
                Species
              </span>
              </td>
              <td>
              <span class="modal__info_description">
                {{ getSpecies }}
              </span>
              </td>
            </tr>
            <tr class="modal__info_row">
              <td>
              <span class="modal__info_gender modal__info_item">
                Gender
              </span>
              </td>
              <td>
              <span class="modal__info_description">
                {{ getGender }}
              </span>
              </td>
            </tr>
          </table>
          <table>
            <tr class="modal__info_row">
              <td>
              <span class="modal__info_homeworld modal__info_item">
                Homeworld
              </span>
              </td>
              <td>
              <span class="modal__info_description">
                {{ getHomeWorld }}
              </span>
              </td>
            </tr>
            <tr class="modal__info_row">
              <td class="modal__info_filmsCell">
              <span class="modal__info_films modal__info_item">
                Films
              </span>
              </td>
              <td class="modal__info_filmsCell">
              <span class="modal__info_description">
                <h5
                  class="modal__info_film"
                  v-for="item of getFilms"
                  :key="item.title"
                >
                  {{ item.title }}
                </h5>
              </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <span @click="hideModal()">
        <svg
          class="modal__close-btn"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 13L13 1M13 13L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
    </div >
    <HomeModalLoader
      :class="{displayModal: isModalClicked}"
      v-else
    />
  </div>
</template>

<script>
  import HomeModalLoader from "./HomeModalLoader";
  export default {
    name: "HomeModal",
    components: {HomeModalLoader},
    data: function () {
      return {
        dataFromItemLocal: {
          title: 'name',
          birth_year: 'birth_year',
          species: 'species',
          gender: 'gender',
          homeworld: 'homeworld',
          films: 'films'
        },
      }
    },
    props: {
      isModalClicked: {
        type: Boolean
      },
      dataFromItem: {
        type: Array
      },
      loadingModal: {
        type: Boolean
      }
    },
    computed: {
      getName: function() {
        let name = this.dataFromItem[this.dataFromItem.length - 1];
        if(name) {
          return name.name
        }
        return 'name'
      },
      getBirthYear: function() {
        let birthYear = this.dataFromItem[this.dataFromItem.length - 1];
        if(birthYear) {
          return birthYear.birth_year
        }
        return 'birth_year'
      },
      getSpecies: function() {
        let species = this.dataFromItem[this.dataFromItem.length - 2];
        if(species) {
          return species.data.name
        }
        return 'species'
      },
      getGender: function() {
        let gender = this.dataFromItem[this.dataFromItem.length - 1];
        if(gender) {
          return gender.gender
        }
        return 'gender'
      },
      getHomeWorld: function() {
        let homeWorld = this.dataFromItem[this.dataFromItem.length - 3];
        if(homeWorld) {
          return homeWorld.data.name
        }
        return homeWorld;
      },
      getFilms: function() {
        let films = [];
        for(let film of this.dataFromItem) {
          if(film.data) {
            films.push(film.data)
          }
        }
        return films;
      },
      getColor: function () {
        let color = this.$store.getters.getColor;
        if(color) {
          return color;
        }
        return '#FFFFFF'
      }
    },
    methods: {
      hideModal: function () {
        this.$emit('hideModal');
      }
    },
  }
</script>

<style lang="scss">
  table {
    min-width: 45%;
  }
  .modal {
    background-color: #1A1A1A;
    display: none;
    border-radius: 8px;
    width: 810px;
    height: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fadein 0.2s ease-in;
    &__main {
      position: relative;
      overflow: hidden;
    }
    &__content {
      padding: 60px;
    }
    &__name {
      display: flex;
      border-bottom: 2px solid #808080;
      padding-bottom: 80px;
      &_avatar {
        font-weight: 500;
        font-size: 48px;
        line-height: 80px;
        color: #FFF;
        text-align: center;
        width: 80px;
        height: 80px;
        background-color: #BB86FC;
        border-radius: 50%;
      }
      &_text {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        font-feature-settings: 'liga' off;
        color: #FFF;
        align-self: center;
        padding-left: 16px;
      }
    }
    &__info {
      font-size: 18px;
      line-height: 21px;
      font-feature-settings: 'liga' off;
      color: #808080;
      display: flex;
      flex-wrap: wrap;
      margin-top: 60px;
      &_filmsCell {
        vertical-align: top;
      }
      &_film {
        font-size: 18px;
        margin: 0;
      }
      &_row {
        td {
          padding-bottom: 15px;
        }
      }
      &_item {
        width: 220px;
        padding-right: 30px;
        &::before {
          width: 20px;
          height: 20px;
          content: '';
          display: inline-block;
          background-image: url("../../assets/img/modal__spritesheet.png");
          background-repeat: no-repeat;
          transform: translateY(3px);
          padding-right: 7px;
        }
      }
      &_byear::before {
        background-position: -65px -5px;
      }
      &_species::before {
        background-position: -123px -5px;
      }
      &_gender::before {
        background-position: -35px -5px;
      }
      &_homeworld::before {
        background-position: -5px -5px;
      }
      &_films::before {
        background-position: -93px -5px;
      }
      &_description {
        font-weight: bold;
        color: #FFF;
        margin-right: 70px;
      }
    }
    &__close-btn {
      position: absolute;
      top: 22px;
      right: 30px;
      cursor: pointer;
    }
  }
  .displayModal {
    display: block;
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
</style>
