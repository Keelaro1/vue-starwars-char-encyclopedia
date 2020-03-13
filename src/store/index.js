import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: {},
    species: []
  },
  getters: {
    getPeople: state => state.people,
    getSpecies: state => state.species
  },
  mutations: {
    setPeople: (state, data) => state.people = Object.assign(data),
    setSpecies: (state, data) => state.species = data
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
    }
  },
  modules: {
  }
})
