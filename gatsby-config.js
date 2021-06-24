require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'The Cookware company',
    author: 'Jeroen Degloire',
    description:
      'The Cookware Company is a global cookware manufacturer with worldwide brand presence. Starting in Belgium in 2007 with their original brand, GreenPan, The Cookware Company was the first to introduce PTFE-free non-stick cookware into the market.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:200,400,700,700i`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Cookware Company',
        short_name: 'Cookware',
        start_url: '/',
        background_color: '#7C8C42',
        theme_color: '#7C8C42',
        display: 'minimal-ui',
        icon: 'src/images/favicon-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-modal-routing-3`,
      options: {
        // A selector to set react-modal's app root to, default is `#___gatsby`
        // See http://reactcommunity.org/react-modal/accessibility/#app-element
        appElement: '#___gatsby',

        // Object of props that will be passed to the react-modal container
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {},
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_READ_TOKEN,
        overlayDrafts: process.env.SANITY_OVERLAY_DRAFTS,
        watchMode: process.env.SANITY_WATCH_MODE,
      },
    },
  ],
}
