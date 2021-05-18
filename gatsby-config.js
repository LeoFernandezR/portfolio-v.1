module.exports = {
  siteMetadata: {
    title: `Leonardo Fernández`,
    description: `Web Developer - React`,
    author: `Leonardo Fernández`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leonardo Fernández Portfolio Front-end Developer`,
        short_name: `Portfolio Leonardo`,
        start_url: `/`,
        background_color: `#1c2022`,
        theme_color: `#1c2022`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}
