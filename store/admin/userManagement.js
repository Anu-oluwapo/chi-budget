import swal from 'sweetalert2';


export default {
      namespaced:true,
    state: () => ( {
      loading:false,
      pageLoading:false,
      errorMessage:'',
      users: [],
      userDTO: {},
      }),

      mutations: {
        setLoading(state, payload){
        state.loading = payload
        },
        setPageLoading(state, payload){
        state.pageLoading = payload
        },
    
        setError(state, payload){
        state.errorMessage = payload
        },

        setUsers(state, payload){
        state.users = payload
        },

        setUser(state, payload){
        state.userDTO = payload
        },
    
       
      },
      actions: {

        // ------------------- USER MANAGEMENT------------------- //

        async getAllUsers({ state, commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getAllUser`)
            commit('setPageLoading', false)
            commit('setUsers', response)
      
          },

          async activateUser({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/Activate', {
                "id": payload.id,
                "submittedBy": rootGetters.getUser.email,
                "status": "Inactive"
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'User Activated Successfully', icon: "success", confirmButtonColor: '#990100'})
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async deactivateUser({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/Deactivate', {
                "id": payload.id,
                "submittedBy": rootGetters.getUser.email,
                "status": "Inactive"
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'User Dectivated Successfully', icon: "success", confirmButtonColor: '#990100'})
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async createUser({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/registerUser', {
                "name": payload.name,
                "submittedBy": rootGetters.getUser.email,
                "email": payload.email,
                "userName": payload.username,
                "phoneNumber": payload.phoneNumber,
                "company": payload.company,
                "role": payload.role
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                swal.fire({title:"Success!", text: 'User Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/users'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async getUser({ commit}, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getUserById${payload}`)
            commit('setPageLoading', false)
            commit('setUser', response)  
            
          },

          async updateUser({state, commit}, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/updateUser', payload)
              
              if(response.isSuccessful){
                commit('setLoading', false)
               await swal.fire({title:"Success!", text: 'User Details Updated Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/users'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          // ------------------- END USER MANAGEMENT ------------------- //

      },

     
    }