module.exports = [{
      plugin: require('/Users/michaelcastor/projects/thailand-blog/node_modules/gatsby-plugin-google-analytics/gatsby-browser'),
      options: {"plugins":[],"trackingId":"UA-133339457-1","head":false,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"optimizeId":"YOUR_GOOGLE_OPTIMIZE_TRACKING_ID","experimentId":"YOUR_GOOGLE_EXPERIMENT_ID","variationId":"YOUR_GOOGLE_OPTIMIZE_VARIATION_ID","sampleRate":5,"siteSpeedSampleRate":10},
    },{
      plugin: require('/Users/michaelcastor/projects/thailand-blog/node_modules/gatsby-plugin-offline/gatsby-browser'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/michaelcastor/projects/thailand-blog/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
