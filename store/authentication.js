import swal from 'sweetalert2';


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

            const response = await this.$axios.$post('/authenticate',{
              userName: payload.username,
              password: payload.password
            })

            //console.log(response)

            if(response.isSuccessful){
              commit('setLoading', false)
              commit('setAuthenticationLevel', 1)

              commit('setToken', response.token , {root:true})
              commit('setUser', 
                {
                  email: response.email,
                  userId: response.userId,
                  role: response.role,
                  userName: response.userName
                }, 
              {root:true})

              swal.fire({title:"Success!", text: 'An OTP Has Been Sent To Your Email', icon: "success", confirmButtonColor: '#990100'})
            } else{
              commit('setLoading', false)
              commit('setError', response.message )
              swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',footer: '<a href="">Why do I have this issue?</a>'})
            }
        },

        async checkOTP({ state, commit, rootGetters }, payload){
          commit('setLoading', true)
          commit('setError', '' )        
          
            const response = await this.$axios.$post('/CheckOTP', payload)
            
            if(response.isSuccessful){
              commit('setLoading', false)
              // this.$cookies.setAll([
              //   { name: 'authStatus', value: true },
              //   { name: 'token', value: rootGetters.getToken },
              //   { name: 'user', value: JSON.stringify(rootGetters.getUser) },
                
              // ])
              this.$cookies.set('authStatus', true)
              this.$cookies.set('token', rootGetters.getToken)
              this.$cookies.set('user', JSON.stringify(rootGetters.getUser) )
              commit('setLogger', true, {root:true})
              window.location ='/'
            }else{
              commit('setLoading', false)
              commit('setError', response.message )
              swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',confirmButtonText:'Retry'})
              
            }
        },

        async resendOtp({ state, commit, rootGetters },){
          commit('setError', '' )        
          
            const response = await this.$axios.$post('/resendOTP', {userName: rootGetters.getUser.userName})
            console.log(response)
            if(response){
              swal.fire({title:"Success!", text: 'An OTP Has Been Sent To Your Email', icon: "success", confirmButtonColor: '#990100'})
            }else{
              
              commit('setError', response.message )
              swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',confirmButtonText:'Retry'})
              
            }
        },
    
        logout(){
          sessionStorage.clear()
          this.$cookies.removeAll()
          location.reload()
        },

      },
    }