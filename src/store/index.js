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
      await axios.get(url)
        .then(response => {
          commit('setPeople', response.data)
        });
    },
    async fetchSpecies({commit}, url) {
      await axios.get(url)
        .then(response => {
          commit('setSpecies', response)
        })
    }
  },
  modules: {
  }
})
