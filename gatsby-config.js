module.exports = {
  siteMetadata: {
    title: 'Dreaming of Thailand',
    description: 'Travels in the Land of Smiles',
    siteUrl: 'https://dreaming-of-thailand-v2.netlify.com/',
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-manifest`, // TODO:  Complete manifest...
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // always last in the array...
  ],
};
