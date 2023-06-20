require("dotenv").config()
const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

console.log(`Using environment config: '${process.env.ENV}'`)
const SiteUrl = process.env.ENV == 'clone' ? 'exp.aljhealth.com/' : 'exp.aljhealth.com/'
console.log("siteUrl");
console.log(SiteUrl);
module.exports = {
    siteMetadata: {
        title: 'Jameel Health',
        subtitle: `Fetch Data From Local WP Install`,
        siteUrl: `https://jameelhealth.aljhealth.com`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    breakpoints: [750, 1080, 1366, 1920]
                },
                // Set to false to allow builds to continue on image errors
                // failOnError: false,
                failOn: `warning`,
                quality: 1,

            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://exp.aljhealth.com`,
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '/main.js',
                crossorigin: 'anonymous',
            },
        },
        {
            resolve: 'gatsby-plugin-apollo',
            options: {
                uri: `http://${SiteUrl}/graphql`
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-SB99HZNPH4", // Google Analytics / GA

                ],
            },
        },
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
                verbose: true,
                schema: {
                    previewRequestConcurrency: 150,
                    timeout: 600000,
                    // perPage: 20, // currently set to 100 600000
                    // requestConcurrency: 5, // currently set to 15
                    // previewRequestConcurrency: 2, // currently set to 150
                    // typePrefix: `Wp`,
                },
                production: {
                    allow404Images: true,
                    allow401Images: true,
                },
                
                html: {
                    useGatsbyImage: true,
                    generateWebpImages: true,
                    placeholderType:'none',
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
        //     resolve: `gatsby-plugin-page-creator`,
        //     options: {
        //         path: `${__dirname}/src/templates`,
        //         useACF: true,
        //     },
        // },
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: 'GTM-MLTX392', // leave empty if you want to disable the tracker
                    cookieName: 'gatsby-gdpr-google-analytics', // default
                    anonymize: true, // default
                    allowAdFeatures: false // default
                },
                // defines the environments where the tracking should be available  - default is ["production"]
                environments: ['production', 'development']
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
    ],
};