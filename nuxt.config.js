export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chi-budget',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],

    script: [
      { src: '/js/jquery.min.js', body:true },
      { src: '/js/jquery.sparkline.min.js', body:true },
      { src: '/js/sticky.js', body:true },
      { src: '/js/circle-progress.min.js', body:true },
      { src: '/js/apexcharts.js', body:true },
      { src: '/js/charts.js', body:true },
      { src: '/js/index1.js', body:true },
      { src: '/js/themeColors.js', body:true },
      { src: '/js/custom.js', body:true },

      { src: '/plugins/bootstrap/js/popper.min.js', body:true },
      { src: '/plugins/bootstrap/js/bootstrap.min.js' , body:true},
      { src: '/plugins/peitychart/jquery.peity.min.js', body:true },
      { src: '/plugins/peitychart/peitychart.init.js', body:true },
      { src: '/plugins/sidebar/sidebar.js', body:true },
      { src: '/plugins/p-scroll/perfect-scrollbar.js', body:true },
      { src: '/plugins/p-scroll/pscroll.js', body:true },
      { src: '/plugins/p-scroll/pscroll-1.js', body:true },
      { src: '/plugins/chart/Chart.bundle.js', body:true },
      { src: '/plugins/chart/rounded-barchart.js', body:true },
      { src: '/plugins/select2/select2.full.min.js', body:true },
      { src: '/plugins/datatable/js/jquery.dataTables.min.js', body:true },
      { src: '/plugins/datatable/js/dataTables.bootstrap5.js', body:true },
      { src: '/plugins/datatable/dataTables.responsive.min.js', body:true },
      { src: '/plugins/apexchart/irregular-data-series.js', body:true },
      { src: '/plugins/charts-c3/d3.v5.min.js', body:true },
      { src: '/plugins/charts-c3/c3-chart.js', body:true },
      { src: '/plugins/flot/jquery.flot.js', body:true },
      { src: '/plugins/flot/jquery.flot.fillbetween.js', body:true },
      { src: '/plugins/flot/chart.flot.sampledata.js', body:true },
      { src: '/plugins/flot/dashboard.sampledata.js', body:true },
      { src: '/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js', body:true },
      { src: '/plugins/jvectormap/jquery-jvectormap-world-mill-en.js', body:true },
      { src: '/plugins/sidemenu/sidemenu.js', body:true }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/style.css',
    '~assets/css/dark-style.css',
    '~assets/css/transparent-style.css',
    '~assets/css/skin-modes.css',
    '~assets/css/icons.css',
    '~assets/colors/color1.css',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
