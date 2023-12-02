/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wedding Guest Site`,
    siteUrl: `https://josephineandnoah.github.io`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
  pathPrefix: "/josephineandnoah.github.io",
}
