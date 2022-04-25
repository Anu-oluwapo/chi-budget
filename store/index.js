import axios from 'axios'
import 'cookie-universal-nuxt'

axios.defaults.baseURL = 'http://192.168.0.2:85';
//axios.defaults.headers.common['Authorization'] = app.$cookies.get('token') 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


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

  export const actions = {
    async getUser({ state, commit }, payload){
      const response = await axios.get(`/getUserById${state.user.userId}`)

    }
  }

  export const getters = {
    getUser(state){
    return state.user
    },
    getToken(state){
    return state.token
    }
  }

  console.log($cookies.get('token'))
  

  // if(sessionStorage.getItem('token')){
  //   store.commit('setToken', sessionStorage.getItem('token'),)
  //   store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
  //   store.commit('setLogger', true)
    
  //   // store.dispatch('authenticate/login')
  // }

