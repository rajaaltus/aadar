export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "aadar",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet", href: "css/animations.css" },
      { rel: "stylesheet", href: "css/fonts.css" },
      { rel: "stylesheet", href: "css/main.css" },
      { rel: "stylesheet", href: "css/shop.css" },
    ],
    script: [
      { type: "text/javascript", src: "js/vendor/modernizr-2.6.2.min.js" },
      { type: "text/javascript", src: "js/compressed.js", body: true },
      { type: "text/javascript", src: "js/selectize.min.js", body: true },
      { type: "text/javascript", src: "js/main.js", body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
