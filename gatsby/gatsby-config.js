import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  // wes added node options in package.json to use es6 exports
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '62288uyt',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
