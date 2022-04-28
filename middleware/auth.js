export default function ({ app, store, redirect }) {
    if (!app.$cookies.get('token')) return redirect("/login");
    //if (!sessionStorage.getItem('token')) return redirect("/login");
    else{
      store.commit('setToken', app.$cookies.get('token'))
        store.commit('setUser', app.$cookies.get('user'))
        store.commit('setLogger', true)
    }

    
  }