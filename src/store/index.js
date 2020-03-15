import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: {},
    species: [],
    dataModal: {},
    color: '',
  },
  getters: {
    getPeople: state => state.people,
    getSpecies: state => state.species,
    getDataModal: state => state.dataModal,
    getColor: state => state.color
  },
  mutations: {
    setPeople: (state, data) => state.people = Object.assign(data),
    setSpecies: (state, data) => state.species = data,
    setDataModal: (state, data) => state.dataModal = data,
    setColor: (state, data) => state.color = data
  },
  actions: {
    async fetchPeople({commit}, url) {
      try {
        await axios.get(url)
          .then(response => {
            commit('setPeople', response.data)
          });
      } catch(e) {
        console.log(e)
      }
    },
    async fetchAllSpecies({commit}) {
      return axios("https://swapi.co/api/species/")
        .then(response => {
          return response.data.count;
        })
        .then(count => {
          const pages = Math.ceil((count - 1) / 10);
          let promises = [];
          for (let i = 1; i <= pages; i++) {
            promises.push(axios(`https://swapi.co/api/species?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then(response => {
          let result = [];
          for(let item of response) {
            result = result.concat(item.data.results);
          }
          commit('setSpecies', result);
          return result;
        })
        .catch(e => console.log(e));
    },
    async fetchDataModal({commit}, data) {
      let urls = [];
      let promises = [];
      urls = urls.concat(data.films);
      urls.push(data.homeworld);
      urls.push(data.species);

      for(let i = 0; i < urls.length; i++) {
        promises.push(axios.get((urls[i])))
      }
      return Promise.all(promises)
        .then(response => {
          let result = [];
          for(let item of response) {
            result = result.concat(item);
          }
          commit('setDataModal', result);
          return result;
        })
        .catch(e => console.log(e));
    }
  },
  modules: {
  }
})
