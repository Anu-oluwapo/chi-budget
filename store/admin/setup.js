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

      budgetTypes: [],
      budgetType: {},

      budgetParameters: [],
      budgetParameter: {},

      departments: [],
      department: {},

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

        setDepartments(state, payload){
        state.departments = payload
        },

        setDepartment(state, payload){
        state.department = payload
        },

        setBranches(state, payload){
        state.branches = payload
        },


        setBudgetTypes(state, payload){
        state.budgetTypes = payload
        },

        setBudgetType(state, payload){
        state.budgetType = payload
        },


        setBudgetParameters(state, payload){
        state.budgetParameters = payload
        },

        setBudgetParameter(state, payload){
        state.budgetParameter = payload
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

          async getCompany({ commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getCompanyById${payload}`)
            commit('setPageLoading', false)
            commit('setCompany', response)  

            console.log(response)
            
          },

          async getBranches({ commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getBranch`)
            commit('setPageLoading', false)
            commit('setBranches', response)  
            
          },

          async createCompany({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/addCompany', {
                "id": "",
                "name": payload.name,
                "submittedBy": rootGetters.getUser.email
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'Company Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/company'
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

                window.location = '/admin/setup/company'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          // ------------------- END COMPANY ------------------- //

          // ------------------- DEPARTMENTS ------------------- //

          async getDepartments({ state, commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getAllDepartment`)
            commit('setPageLoading', false)
            commit('setDepartments', response)
      
          },

          async getDepartment({ commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getDepartmentById${payload}`)
            commit('setPageLoading', false)
            commit('setDepartment', response)  

            console.log(response)
            
          },

          async createDepartment({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
             try{ const response = await this.$axios.$post('/addDepartment', {
                "companyId": payload.companyId,
                "name": payload.name,
                "branch": payload.branch.name,
                "branchId": payload.branch.id,
                "submittedBy": rootGetters.getUser.email
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'Department Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/department'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
            } catch(error){
              swal.fire({title:"Error!", text: error, icon: "error", confirmButtonColor: '#990100'})
            }
          },

          async updateDepartment({state, commit}, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/updateDepartment', payload)
              
              if(response.isSuccessful){
                commit('setLoading', false)
               await swal.fire({title:"Success!", text: 'Department Updated Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/department'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          // ------------------- END DEPARTMENTS ------------------- //


          // ------------------- BUDGET TYPES ------------------- //

          async getBudgetTypes({ state, commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getAllBudgetType`)
            commit('setPageLoading', false)
            commit('setBudgetTypes', response)
      
          },

          async getBudgetType({ commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getBudgetTypeById${payload}`)
            commit('setPageLoading', false)
            commit('setBudgetType', response)  

            //console.log(response)
            
          },

          async createBudgetType({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/addBudgetType', {
                
                "name": payload.name,
                "submittedBy": rootGetters.getUser.email
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'Budget Type Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/budgettype'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async updateBudgetType({state, commit}, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/updateBudgetType', payload)
              
              if(response.isSuccessful){
                commit('setLoading', false)
               await swal.fire({title:"Success!", text: 'Budget Type Updated Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/budgettype'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          // ------------------- END BUDGET TYPES ------------------- //


          // ------------------- BUDGET PARAMETERS ------------------- //

          async getBudgetParameters({ commit }, ){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getAllBudgetParameter`)
            commit('setPageLoading', false)
            commit('setBudgetParameters', response)
      
          },

          async getBudgetParameter({ commit }, payload){
            commit('setPageLoading', true)
            const response = await this.$axios.$get(`/getBudgetParameterById${payload}`)
            commit('setPageLoading', false)
            commit('setBudgetParameter', response)  

            //console.log(response)
            
          },

          async createBudgetParameter({ state, commit, rootGetters }, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/addBudgetParameter', {
               ...payload,
                "submittedBy": rootGetters.getUser.email
              })
              
              if(response.isSuccessful){
                commit('setLoading', false)
                await swal.fire({title:"Success!", text: 'Budget Parameter Created Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/budgetparameter'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          },

          async updateBudgetParameter({state, commit}, payload){
            commit('setLoading', true)
            commit('setError', '' )        
            
              const response = await this.$axios.$post('/updateBudgetParameter', payload)
              
              if(response.isSuccessful){
                commit('setLoading', false)
               await swal.fire({title:"Success!", text: 'Budget Parameter Updated Successfully', icon: "success", confirmButtonColor: '#990100'})

                window.location = '/admin/setup/budgetparameter'
              }else{
                commit('setLoading', false)
                commit('setError', response.message )
                swal.fire({title:"Error!", text: state.errorMessage, icon: "error", confirmButtonColor: '#990100'})
                
              }
          }

          // ------------------- END BUDGET PARAMETERS ------------------- //

      },

     
    }