import 'cookie-universal-nuxt'
export const strict = false
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
      //this.$axios.setToken(this.$cookies.get('token'), 'Bearer')
      const response = await this.$axios.$get(`/getUserById${state.user.userId}`)
        //console.log(response)
      commit('setUser', response)

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

  //console.log($cookies.get('token'))
  

  // if(sessionStorage.getItem('token')){
  //   store.commit('setToken', sessionStorage.getItem('token'),)
  //   store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
  //   store.commit('setLogger', true)
    
  //   // store.dispatch('authenticate/login')
  // }

