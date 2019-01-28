module.exports = {
  siteMetadata: {
    title: 'Dreaming of Thailand',
    description: 'Travel Photography in the Land of Smiles',
    siteUrl: 'https://dreamingofthailand.com',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-133339457-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Dreaming of Thailand',
        short_name: 'Dreaming of Thailand',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/white-temple/white-temple.jpg',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // always last in the array...
  ],
};
