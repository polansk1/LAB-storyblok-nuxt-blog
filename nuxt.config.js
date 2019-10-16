
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Storyblok + Nuxt = <3',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "storyblok-nuxt", { 
        accessToken: 
          process.env.NODE_ENV == 'production'
          ? 'vZOaDry3ngTHjJlCCaEoIQtt' 
          : 'xSp6JG5QTCYfGWx51xeQGQtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  /*
  ** Server configuration
  */
  server: {
    port: 4000, // default: 3000
  },
}
