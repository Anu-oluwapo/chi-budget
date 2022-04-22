import axios from 'axios'
import swal from 'sweetalert2';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://192.168.0.2:85';

    export default {
      namespaced:true,
    state: () => ( {
      loading:false,
      errorMessage:'',
      authenticationLevel: 0,
      }),

      mutations: {
        setLoading(state, payload){
        state.loading = payload
        },
    
        setError(state, payload){
        state.errorMessage = payload
        },
    
        setAuthenticationLevel(state, payload){
        state.authenticationLevel = payload
        },
      },
      actions: {
        async authenticate({ state, commit }, payload){

          commit('setLoading', true)
          commit('setError', '' )        

            const response = await axios.post('/authenticate',{
              userName: payload.username,
              password: payload.password
            })

            if(response.data.isSuccessful){
              commit('setLoading', false)
              commit('setAuthenticationLevel', 1)

              commit('setToken', response.data.token , {root:true})
              commit('setUser', 
                {
                  email: response.data.email,
                  userId: response.data.userId,
                  role: response.data.role,
                  userName: response.data.userName
                }, 
              {root:true})

              swal.fire({title:"Success!", text: 'An OTP Has Been Sent To Your Email', icon: "success", confirmButtonColor: '#990100'})
            } else{
              commit('setLoading', false)
              commit('setError', response.data.message )
              swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',footer: '<a href="">Why do I have this issue?</a>'})
            }
            
          // const response = await axios.post('/Login',{
          //     password: payload.password,
          //     userName: payload.username
          // })
      
          // if(response.data.value.status == true){
          //   commit('setUser', response.data.value.user, {root:true})
          //   sessionStorage.setItem('user', JSON.stringify(response.data.value.user) )
    
          //   commit('setLogger', true, {root:true})
    
          //   commit('setToken', response.data.value.data , {root:true})
          //   sessionStorage.setItem('token', response.data.value.data  )
    
          //   commit('setLoading', false)
    
          //   commit('setError', response.data.value.message)
    
          //   window.location.reload()
            
          // } else{
          //   commit('setLoading', false)  
          //   commit('setError', response.data.value.message )
          // }
    
        },

        async checkOTP({ state, commit, rootGetters }, payload){
          commit('setLoading', true)
          commit('setError', '' )        
          
            const response = await axios.post('/CheckOTP', payload)
            
            if(response.data.isSuccessful){
              commit('setLoading', false)
              sessionStorage.setItem('token', rootGetters.getToken  )
              sessionStorage.setItem('user', JSON.stringify(rootGetters.getUser) )
              commit('setLogger', true, {root:true})
              window.location.reload()
            }else{
              commit('setLoading', false)
              commit('setError', response.data.message )
              swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',confirmButtonText:'Retry'})
              
            }
        },
    
        logout(){
          sessionStorage.clear()
          location.reload()
        },

        // login({commit}){
        //   commit('setLogger', true)
        //   commit('setToken',sessionStorage.getItem("token"))
        //   commit('setUser', JSON.parse(sessionStorage.getItem("user")))
          
          
        // }
      },
    }