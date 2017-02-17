import Vue from 'vue'
import Vuex from 'vuex'
var arrayToTree = require('array-to-tree')
Vue.use(Vuex)
const axios = require('axios')
const store = new Vuex.Store({
  state: {
    common:{
      programClass :[]
    }
  },

  actions: {

    program_class_data:({ commit, dispatch, state })=>{
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: '/api/v1/program_class/'
        }).then(function(response){          
          resolve(arrayToTree(response.data,{
            parentProperty: 'FatherId',
            customID: 'Id'
          }));
        });
      }).then(function(data){
        commit('SET_PROGRAM_CLASS', {data})
      })
    }
  },

  mutations: {
    SET_PROGRAM_CLASS:(state, { data }) => {
      state.common.programClass = data
    }
  },

  getters: {
    
  }
})

export default store
