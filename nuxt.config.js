module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "app",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: false,
  css: ["normalize.css", "~css/global.css"],
  /*
   ** Build configuration
   */
  build: {}
};
