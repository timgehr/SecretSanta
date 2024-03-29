import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: [],
    assignments: []
  },
  mutations: {
    generateNamesList(state, gotNames) {
      state.names = shuffleArray(gotNames)
      for (var i = 0; i < state.names.length - 1; i++) {
        state.assignments[i] = state.names[i+1]
      }
      state.assignments[state.names.length-1] = state.names[0]

      state.assignments, state.names = shuffleTwoArrays(state.assignments, state.names)
    }
  },
  actions: {
  },
  modules: {
  }
})

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}

function shuffleTwoArrays(array1, array2) {
  for (var i = array1.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp1 = array1[i];
      array1[i] = array1[j];
      array1[j] = temp1;

      
      var temp2 = array2[i];
      array2[i] = array2[j];
      array2[j] = temp2;
  }
  return array1, array2
}