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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/updates`,
      }
    },
    "gatsby-plugin-mdx",
  ],
  pathPrefix: "/josephineandnoah.github.io",
}