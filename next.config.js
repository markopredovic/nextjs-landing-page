require("dotenv").config();

module.exports = {
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  rootPaths: ["./src"],
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseUrl: process.env.STRAPI_BASE_URL, // Pass through env variables
  },
};
