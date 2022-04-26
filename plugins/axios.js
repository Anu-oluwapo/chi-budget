export default ({app, redirect}) =>{
    app.$axios.setHeader('Content-Type', 'application/json', [
        'post'
      ])

      app.$axios.setToken(app.$cookies.get('token'), 'Bearer')
}