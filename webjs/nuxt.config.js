
// require('dotenv').config()

module.exports = {
  server: {
    port: 8015, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  srcDir: 'src/',
  build: {
  },

   head: {
    title: '',
    meta: [],
    link: [
      { rel:"shortcut icon", href:"/img/favicon.png"}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'rgba(50,191,196,0.95)'
  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  // buildModules: [
  //   ['@nuxtjs/dotenv', { path: '/config/', filename: 'mining-server.conf' }]
  // ],
  /*
  ** Nuxt.js modules
  */
  modules: [
       '@nuxtjs/axios',
       '@nuxtjs/proxy'

  ],
        axios:{
        credentials:true,
        proxyHeaders:true,
        proxy: true
    },

}
