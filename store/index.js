//import axios from 'axios'
import 'vuex'

//axios.defaults.baseURL = 'http://192.168.0.2:81';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


  export const state = () =>({
  loading:false,
  errorMessage:'',

  loggedIn:false,
  token:'',
  user:{},


  })

  export const mutations = {
    setUser(state, payload){
    state.user = payload
    
    },

    setLogger(state, payload){
    state.loggedIn = payload
    },

    setToken(state, payload){
    state.token = payload
    },

    setLoading(state, payload){
    state.loading = payload
    },

    setError(state, payload){
      state.errorMessage = payload
      },
  }

  export const getters = {
    getUser(state){
    return state.user
    },
    getToken(state){
    return state.token
    }
  }
  

  // if(sessionStorage.getItem('token')){
  //   store.commit('setToken', sessionStorage.getItem('token'),)
  //   store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
  //   store.commit('setLogger', true)
    
  //   // store.dispatch('authenticate/login')
  // }

