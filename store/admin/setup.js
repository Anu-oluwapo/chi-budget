import swal from 'sweetalert2';


export default {
      namespaced:true,
    state: () => ( {
      loading:false,
      pageLoading:false,
      errorMessage:'',
      branches: [],
      companies: [],
      company: {},
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

        setCompanies(state, payload){
        state.companies = payload
        },

        setCompany(state, payload){
        state.company = payload
        },

        setBranches(state, payload){
        state.branches = payload
        },
    
       
      },
      actions: {
          // ------------------- COMPANY ------------------- //

          async getCompanies({ state, commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getAllCompany`)
            commit('setPageLoading', false)
            commit('setCompanies', response)
      
          },

          async getCompany({ commit}, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getCompanyById${payload}`)
            commit('setPageLoading', false)
            commit('setCompany', response)  
            
          },

          async getBranches({ commit}, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getBranch`)
            commit('setPageLoading', false)
            commit('setBranches', response)  
            
          },

          async createCompany({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/addCompany', {
                payload
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                swal.fire({title:"Success!", text: 'Company Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/users'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async updateCompany({state, commit}, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/updateCompany', payload)
              
              if(response.isSuccessful){
                commit('setLoading', false)
               await swal.fire({title:"Success!", text: 'Company Updated Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/users'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          }

          // ------------------- END COMPANY ------------------- //

      },

     
    }