module.exports = {
  siteMetadata: {
    title: 'Dreaming of Thailand',
    description: 'Travels in the Land of Smiles'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dreaming of Thailand',
        short_name: 'Thailand Travel Blog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/white-temple.jpg',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // TODO: set maxWidth of the container, the plugin uses this to generate the image size at render...
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // always should be last in the array...
  ],
};
