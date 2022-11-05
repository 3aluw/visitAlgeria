
export default defineNuxtConfig ({
  // Global page headers: https://go.nuxtjs.dev/config-head

  runtimeConfig: {
    public: {
      contentfulSpace: process.env.NUXT_CONTENTFUL_SPACE,
      contentfulAcsessToken : process.env.NUXT_CONTENTFUL_PUBLIC_ACCESS_TOKEN,
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/Contentful.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
    "@pinia/nuxt",
    {
      autoImports: ["defineStore", "acceptHMRUpdate"],
    },]
  ],
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
)