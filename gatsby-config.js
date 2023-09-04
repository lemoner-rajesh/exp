/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    'gatsby-plugin-uninline-styles',
    {
            /**
             * First up is the WordPress source plugin that connects Gatsby
             * to your WordPress site.
             *
             * visit the plugin docs to learn more
             * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
             *
             */
            resolve: `gatsby-source-wordpress`,
            options: {
                url: `https://exp.aljhealth.com/graphql`,
                headers:{
                    Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc29sdXRpb25jbXMuYWxqaGVhbHRoLmNvbVwvZW5cLyIsImlhdCI6MTY3NDU1MjU2NywibmJmIjoxNjc0NTUyNTY3LCJleHAiOjE2NzQ1NTI4NjcsImRhdGEiOnsidXNlciI6eyJpZCI6IjgifX19.GCNNHjfaYd-rXohKpYiY1N46ES1GRsmd-NMAI06Oh1Q"
                },
                auth: {
                    htaccess: {
                        username: "aljadmin",
                        password: "aljadmin",
                    }
                },
                // url: `http://54.174.207.47/graphql`,  
                verbose: true,    
                production: {
                    allow404Images: true,
                    allow401Images: true,
                },
                
                html: {
                    useGatsbyImage: true,
                    generateWebpImages: true,
                    placeholderType:'blurred',
                    createStaticFiles: true,

                },
                debug: {
                    // preview: true,
                    // timeBuildSteps: true,
                    // graphql: {
                    //         showQueryVarsOnError: true,
                    //     showQueryOnError: true, 
                    //     //writeQueriesToDisk: true,
                    // },
                  },
                  
            },
            
            // includedRoutes: [
            //     '/*/*/categories',
            //     '/*/*/posts',
            //     '/*/*/pages',
            //     '/*/*/media',
            //     '/*/*/tags',
            //     '/*/*/taxonomies',
            //     '/*/*/users',
            //     '/*/*/ourpeople',
            //     '/*/*/menus'
            // ],
        },
    // {
    //   /**
    //    * First up is the WordPress source plugin that connects Gatsby
    //    * to your WordPress site.
    //    *
    //    * visit the plugin docs to learn more
    //    * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
    //    *
    //    */
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // the only required plugin option for WordPress is the GraphQL url.
    //     url:
    //       process.env.WPGRAPHQL_URL ||
    //       `https://wpgatsbydemo.wpengine.com/graphql`,
    //   },
    // },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },


    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    // {
    //   // resolve: 'gatsby-plugin-copy-files-enhanced',
    //   // options: {
    //   //   source: `${__dirname}/src/common`,
    //   //   destination: '/static/common',
    //   //   purge: true,
    //   // },
    //   resolve: `gatsby-plugin-copy`,
    //   options: {
    //     src: `${__dirname}/src/common`,
    //     dest: `${__dirname}/static/common`,
    //   },
    // },

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-netlify`
  ],
}
