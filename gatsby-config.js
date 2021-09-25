const path = require('path');
module.exports = {
  siteMetadata: {
    title: "Julia Trela Notary Public",
    description: "Notary Public office; by appointment only. Notarizations, Real Estate and Personal Planning",
    url: 'https://merrittnotary.ca',
    siteName: "Julia Trela Notary Public",
    titleTemplate: "%s",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
			resolve: "gatsby-plugin-root-import",
			options: {
        src: path.join(__dirname, 'src'),
        content: path.join(__dirname, 'src/content'),
				pages: path.join(__dirname, 'src/pages'),
				component: path.join(__dirname, 'src/components'),
				styles: path.join(__dirname, "src/styles"),
				layout: path.join(__dirname, "src/layouts"),
				utils: path.join(__dirname, "src/styles/utils")
			}
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://merrittnotary.ca',
        sitemap: '',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Merritt Notary`,
        short_name: `Merritt Notary`,
        description: `Notary Public office located in Merritt, B.C`,
        start_url: `/`,
        background_color: `#9F1D35`,
        theme_color: `#9F1D35`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`]
      },
    },
  ],
};
