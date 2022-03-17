import axios from 'axios'
import swal from 'sweetalert2';
axios.defaults.baseURL = 'http://192.168.0.2:81';

    export default {
      namespaced:true,
    state: () => ( {
      loading:false,
      errorMessage:'',
      }),

      mutations: {
        setLoading(state, payload){
        state.loading = payload
        },
    
        setError(state, payload){
        state.errorMessage = payload
        },
      },
      actions: {
        async authenticate({ state, commit }, payload){

          commit('setLoading', true)
          commit('setError', '' )        

          setTimeout(()=>{
            console.log(payload)
            commit('setLoading', false)
            commit('setError', 'None' )
            // swal.fire({title:"Success!", text: state.errorMessage, icon: "success", confirmButtonColor: '#990100'})
            swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100',footer: '<a href="">Why do I have this issue?</a>'})
          },3000)

          

          // alert('Done')

          // commit('setLoading', false)
          // commit('setError', 'None' )

          
    
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