// const activeEnv =
//     process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
// console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config()

console.log(`Using environment config: '${process.env.ENV}'`)
const SiteUrl = process.env.ENV == 'clone' ? 'solutioncms.aljhealth.com' : 'solutioncms.aljhealth.com' 
module.exports = {
    siteMetadata: {
        title: 'Jameel Health',
        subtitle: `Fetch Data From Local WP Install`,
    },
    plugins: [
         `gatsby-transformer-sharp`,
         `gatsby-plugin-sass`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
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
                siteUrl: `https://aljhealth.com`,
            },
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: '/main.js', 
            },
        },
        {
        resolve: 'gatsby-plugin-apollo',
        options: {
            uri: `https://${SiteUrl}/graphql`
        }
        },{
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
        schema: {
            previewRequestConcurrency: 150,
          },
           
        // schema: {
        //     perPage: 20, // currently set to 100
        //     requestConcurrency: 5, // currently set to 15
        //     previewRequestConcurrency: 2, // currently set to 5
        // },
        
        production: {
            allow404Images: true,
            allow401Images: true,
        },
        url:`https://solutioncms.aljhealth.com/graphql`,
        // auth: {
        //   htaccess: {
        //     username: "aljadmin",
        //     password: "aljadmin",
        //   }
        // },
        timeout: 3600000000,
        html: {
            useGatsbyImage: false,
            createStaticFiles: false,
          },
      },
      
      includedRoutes: [
        '/*/*/categories',
        '/*/*/posts',
        '/*/*/pages',
        '/*/*/media',
        '/*/*/tags',
        '/*/*/taxonomies',
        '/*/*/users',
        '/*/*/ourpeople',
        '/*/*/menus'
      ],
    },{
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`,
        //   ignore: [`${__dirname}/src/pages/en/about-us.js`],
        useACF: true,
        },
    },
        // {
        //     resolve: "gatsby-source-wordpress",
        //     options: {
        //         baseUrl: SiteUrl ,
        //         protocol: "http",
        //         restApiRoutePrefix: "wp-json",
        //         hostingWPCOM: false,
        //         useACF: true,
        //         verboseOutput: true,
        //         auth: {
        //             // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //             // to access endpoints that are protected with .htaccess.
        //             htaccess_user: "aljadmin",
        //             htaccess_pass: "aljadmin",
        //             htaccess_sendImmediately: true,
        //             keepMediaSizes: true,
        //             },
        //     }
        // },
        // {
        //     resolve: "gatsby-source-custom-api",
        //     options: {
        //         url: `https://dev-alh-health.pantheonsite.io//wp-json/wp-rest-api-sidebars/v1/sidebars`,
        //         rootKey: "newsSidebar",
        //         schemas: {
        //             widgets: `
        //            name: String
        //            rendered: String
        //   `,
        //         },
        //     },
        // },
        // {
        //     resolve: `@ccalamos/gatsby-source-googlemaps-static`,
        //     options: {
        //         key: 'AIzaSyDycGYmqlx_zaN1kO0uRN13S6uLEFzk4Ik',
        //         paths: [
        //             {
        //                 color: `0x00000000`,
        //                 weight: `5`,
        //                 fillColor: `0xFFFF0033`,
        //                 points: [
        //                     `8th Avenue & 34th St, New York, NY`,
        //                     `8th Avenue & 42nd St,New York,NY`,
        //                     `Park Ave & 42nd St,New York,NY,NY`,
        //                     `Park Ave & 34th St,New York,NY,NY`,
        //                 ],
        //             },
        //         ],
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
    //  'gatsby-plugin-remove-console',
     
    //     {
    //     resolve: 'gatsby-plugin-next-seo',
    //     options: {
    //         description: `Accelerating access adding value We are committed to adding real, tangible value, not only to all our business partner relationships but also to the communities in which we operate. As a solutions partner, we strongly believe in success through service – working together with stakeholders; taking a structured, systemic, focus to delivering on our promises. With this approach, we are accelerating access to modern medical care for more people in more places and for those that need it most.`,
    //         openGraph: {
    //             title:"Jameel Health",
    //             type: 'website',
    //             locale: 'en_US',
    //             description: `Accelerating access adding value We are committed to adding real, tangible value, not only to all our business partner relationships but also to the communities in which we operate. As a solutions partner, we strongly believe in success through service – working together with stakeholders; taking a structured, systemic, focus to delivering on our promises. With this approach, we are accelerating access to modern medical care for more people in more places and for those that need it most.`,
    //             images: [
    //                 {
    //                     url: 'https://media.aljhealth.com/wp-content/uploads/2021/04/01062650/metaimage.jpg',
    //                     //secure_url:'https://media.aljhealth.com/wp-content/uploads/2021/03/31085452/meta-image-2.png',
    //                     // type:'image/jpeg',
    //                     // itemprop:'image',
    //                     alt:'Jameel Health'
    //                 }
    //              ],
    //             site_name: 'Jameel Health',
    //         },
            
    //     },
    // },           
    
    //secure_url:'https://media.aljhealth.com/wp-content/uploads/2021/03/31085452/meta-image-2.png',
          
    ],
};


// module.exports = {
//     siteMetadata: {
//         title: 'Wordpress Gatsby',
//         subtitle: `Fetch Data From Local WP Install`,
//     },
//     plugins: [
//         /*
//          * Gatsby's data processing layer begins with “source”
//          * plugins. Here the site sources its data from WordPress.
//          */
   
//         {
//             resolve: "gatsby-source-wordpress",
//             options: {
//                 /*
//                  * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
//                  * Example : 'demo.wp-api.org' or 'www.example-site.com'
//                  */
//                 baseUrl: "aljmachinery.tk",
//                 // The protocol. This can be http or https.
//                 protocol: "https",
//                 // The rest api route prefix that your WordPress site is using.
//                 // Sometimes this is modified by WordPress plugins.
//                 // If not set, it uses the default of "wp-json"
//                 restApiRoutePrefix: "wp-json",
//                 // Indicates whether the site is hosted on wordpress.com.
//                 // If false, then the assumption is made that the site is self hosted.
//                 // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
//                 // If your site is hosted on wordpress.org, then set this to false.
//                 hostingWPCOM: false,
//                 // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
//                 // This feature is untested for sites hosted on wordpress.com.
//                 // Defaults to true.
//                 useACF: true,
//                 // Include specific ACF Option Pages that have a set post ID
//                 // Regardless if an ID is set, the default options route will still be retrieved
//                 // Must be using V3 of ACF to REST to include these routes
//                 // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
//                 // routes with the ID option_page_1 and option_page_2
//                 // The IDs provided to this array should correspond to the `post_id` value when defining your
//                 // options page using the provided `acf_add_options_page` method, in your WordPress setup
//                 // Dashes in IDs will be converted to underscores for use in GraphQL
//                 acfOptionPageIds: [],
//                 auth: {
//                     // If auth.user and auth.pass are filled, then the source plugin will be allowed
//                     // to access endpoints that are protected with .htaccess.
//                     htaccess_user: "your-htaccess-username",
//                     htaccess_pass: "your-htaccess-password",
//                     htaccess_sendImmediately: false,

//                     // If hostingWPCOM is true then you will need to communicate with wordpress.com API
//                     // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
//                     // then add your clientId, clientSecret, username, and password here
//                     // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
//                     // If two-factor authentication is enabled then you need to create an Application-Specific Password,
//                     // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
//                     wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
//                     wpcom_app_clientId: "54793",
//                     wpcom_user: "gatsbyjswpexample@gmail.com",
//                     wpcom_pass: process.env.WORDPRESS_PASSWORD,

//                     // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
//                     // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
//                     // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
//                     jwt_user: process.env.JWT_USER,
//                     jwt_pass: process.env.JWT_PASSWORD,
//                     jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
//                 },
//                 // Set cookies that should be send with requests to WordPress as key value pairs
//                 cookies: {},
//                 // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
//                 // It can help you debug specific API Endpoints problems.
//                 verboseOutput: false,
//                 // Set how many pages are retrieved per API request.
//                 perPage: 100,
//                 // Search and Replace Urls across WordPress content.
//                 searchAndReplaceContentUrls: {
//                     sourceUrl: "https://source-url.com",
//                     replacementUrl: "https://replacement-url.com",
//                 },
//                 // Set how many simultaneous requests are sent at once.
//                 concurrentRequests: 10,
//                 // Set WP REST API routes whitelists
//                 // and blacklists using glob patterns.
//                 // Defaults to whitelist the routes shown
//                 // in the example below.
//                 // See: https://github.com/isaacs/minimatch
//                 // Example:  `["/*/*/comments", "/yoast/**"]`
//                 // ` will either include or exclude routes ending in `comments` and
//                 // all routes that begin with `yoast` from fetch.
//                 // Whitelisted routes using glob patterns
//                 includedRoutes: [
//                     "**/categories",
//                     "**/posts",
//                     "**/pages",
//                     "**/media",
//                     "**/tags",
//                     "**/taxonomies",
//                     "**/users",
//                 ],
//                 // Blacklisted routes using glob patterns
//                 excludedRoutes: ["**/posts/1456"],
//                 // Set this to keep media sizes.
//                 // This option is particularly useful in case you need access to
//                 // URLs for thumbnails, or any other media detail.
//                 // Defaults to false
//                 keepMediaSizes: false,
//                 // use a custom normalizer which is applied after the built-in ones.
//                 normalizer: function ({ entities }) {
//                     return entities
//                 },
//                 // The normalizers option allows you to manipulate the array of internal
//                 // normalizers that are applied to entities after they're fetched
//                 // from WordPress.
//                 // You can add your own normalizers to this array by adding an object
//                 // that contains name and normalizer properties.
//                 // Name is the name of your normalizer, and normalizer is a function that
//                 // should return the array of entities that are passed to it.
//                 // This is useful if you need more control over the order of normalizers,
//                 // instead of your normalizer being applied after the built in normalizers (as is the case with the normalizer option).
//                 normalizers: normalizers => [
//                     ...normalizers,
//                     {
//                         name: "nameOfTheFunction",
//                         normalizer: function ({ entities }) {
//                             // manipulate entities here
//                             return entities
//                         },
//                     },
//                 ],
//             },
//         },
//     ],
// }