const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
// const fs = require("fs");

var langMapping = [];
langMapping["en_US"] = "en";
langMapping["ar"] = "ar";
langMapping["tr_TR"] = "tr";

var langSlugMapping = [];
langSlugMapping["en_US"] = "en/";
langSlugMapping["ar"] = "ar/";
langSlugMapping["tr_TR"] = "tr/";

const pageQuery = `
{
  allWpPage {
    edges {
      node {
        id
        slug
        uri
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
}
`

const postsQuery = `
 {
  allWpPressrelease {
    edges {
      node {
        id
        title
        slug
        uri
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
} `

const perspectiveQuery = `
 {
  allWpPerspective {
    edges {
      node {
        id
        title
        slug
        uri
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
}`

const inthenewsQuery = `
 {
  allWpInthenews {
    edges {
      node {
        id
        title
        slug
        uri
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
}`

const ourPeopleQuery = `
 {
  allWpOurpeople {
    edges {
      node {
        title
        slug
        uri
        id
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
}`
const ourSolutionsQuery = `
 {
  allWpSolution {
    edges {
      node {
        title
        slug
        uri
        id
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
} `
const partnerslistQuery = `
 {
  allWpPartner {
    edges {
      node {
        title
        slug
        uri
        id
        locale {
          id
          locale
        }
        localizedWpmlUrl
      }
    }
  }
}`


exports.createPages = ({ actions, graphql, reporter }) => {
    // const { createPage ,createRedirect} = boundActionCreators;
    // actions.createRedirect({ fromPath: '/', toPath: '/en/', redirectInBrowser: true, isPermanent: true })
    // actions.createRedirect({ fromPath: '/home/', toPath: '/en/', redirectInBrowser: true, isPermanent: true })

    return new Promise((resolve, reject) => {

        // Pages
        graphql(pageQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                let pageTemplate;
                //  const pageTemplate = path.resolve("./src/templates/page.js");
                //  const pageTemplate = path.resolve("./src/templates/news-listing.js");
                //  console.log('console.log(result)', JSON.stringify(result))
                _.each(result.data.allWpPage.edges, edge => {
                    // console.log('console.log(result)node.slug', JSON.stringify(node))

                    // if (edge.node.slug != "home" && edge.node.locale.id === "en_US") {
                    //     actions.createRedirect({ fromPath: '/' + edge.node.slug, toPath: '/en/' + edge.node.slug + "/", redirectInBrowser: true, isPermanent: true })
                    //     actions.createRedirect({ fromPath: '/' + edge.node.slug + "/", toPath: '/en/' + edge.node.slug + "/", redirectInBrowser: true, isPermanent: true })
                    // }

                    // if (edge.node.slug != "home" && edge.node.locale.id === "tr_TR") {
                    //     actions.createRedirect({ fromPath: '/' + edge.node.slug, toPath: '/tr/' + edge.node.slug + "/", redirectInBrowser: true, isPermanent: true })
                    //     actions.createRedirect({ fromPath: '/' + edge.node.slug + "/", toPath: '/tr/' + edge.node.slug + "/", redirectInBrowser: true, isPermanent: true })
                    // }
                    
                    var slug = "/"+langSlugMapping[edge.node.locale.id]+edge.node.slug+"/";
                    pageTemplate = path.resolve("./src/templates/page.js");
                    if (edge.node.slug === "home") {
                        //  slug = edge.node.locale.id==="en_US"?'/en/':'/ar/';
                        slug = langSlugMapping[edge.node.locale.id];
                        pageTemplate = path.resolve("./src/templates/home.js");
                    }
                    else if (edge.node.slug === "about-us") {
                        pageTemplate = path.resolve("./src/templates/about-us.js");
                    }
                    else if (edge.node.slug === "what-we-do") {
                        pageTemplate = path.resolve("./src/templates/what-we-do.js");
                    }
                    else if (edge.node.slug === "investments") {
                        pageTemplate = path.resolve("./src/templates/investments.js");
                    }
                    else if (edge.node.slug === "our-solutions") {
                        pageTemplate = path.resolve("./src/templates/our-solutions.js");
                    }
                    else if (edge.node.slug === "our-partners") {
                        pageTemplate = path.resolve("./src/templates/our-partners.js");
                    }
                    else if (edge.node.slug === "news") {
                        pageTemplate = path.resolve("./src/templates/news-listing.js");
                    } else if (edge.node.slug === "insights") {
                        pageTemplate = path.resolve("./src/templates/insights-listing.js");
                    } else if (edge.node.slug === "in-the-news") {
                        pageTemplate = path.resolve("./src/templates/inthenews-listing.js");
                    }
                    else if (edge.node.slug === "our-people") {
                        pageTemplate = path.resolve("./src/templates/ourpeople-listing.js");
                    }
                    else if (edge.node.slug === "contact-us") {
                        pageTemplate = path.resolve("./src/templates/contact-us.js");
                    }
                    else if (edge.node.slug === "become-a-partner") {
                        pageTemplate = path.resolve("./src/templates/become-a-partner.js");
                    }
                    else {
                        pageTemplate = path.resolve("./src/templates/page.js");
                    }
                    actions.createPage({
                        path: `${slug}`,
                        component: slash(pageTemplate),
                        //  context: node
                        ownerNodeId: edge.node.id,
                        context: {
                            id: edge.node.id,
                            lang: langMapping[edge.node.locale.id],
                            langCode: edge.node.locale.id

                        },
                    });

                });
                resolve();

                // languages.forEach(lang => {
                //   actions.createPage({
                //     path: lang.path,
                //     component: slash( pageTemplate),
                //     context: {
                //       lang: lang.code,
                //     },
                //   })
                // })


            })
            .then(() => {
                graphql(postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/customPost.js");
                        _.each(result.data.allWpPressrelease.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/news/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/news/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }

                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}news/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: edge.node.locale.id

                                },
                            });
                        });
                        resolve();
                    });
            })
            .then(() => {
                graphql(perspectiveQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/perspective.js");
                        _.each(result.data.allWpPerspective.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/insights/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/insights/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }
                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}insights/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: edge.node.locale.id
                                },
                            });
                        });
                        resolve();
                    });
            })
            .then(() => {
                graphql(inthenewsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const postTemplate = path.resolve("./src/templates/inthenews.js");
                        _.each(result.data.allWpInthenews.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/in-the-news/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/in-the-news/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }
                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}in-the-news/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: edge.node.locale.id
                                },
                            });
                        });
                        resolve();
                    });
            })
            .then(() => {
                graphql(ourPeopleQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const ourPeople = path.resolve("./src/templates/ourPeople.js");
                        _.each(result.data.allWpOurpeople.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/our-people/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/our-people/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }
                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}our-people/${edge.node.slug}/`,
                                component: slash(ourPeople),
                                // context: edge.node
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: edge.node.locale.id
                                },
                            });
                        });
                        resolve();
                    });
            })
            .then(() => {
                graphql(ourSolutionsQuery)
                    .then(result => {

                        // console.log('result.data.allWpSolution', result.data.allWpSolution);
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const solutionDetail = path.resolve("./src/templates/solutionDetail.js");
                        _.each(result.data.allWpSolution.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/solutions/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/solutions/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }
                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}solutions/${edge.node.slug}/`,
                                //path: `/${langSlugMapping[edge.node.locale.id]}solutions/${edge.node.title.replace(/\s+/g, '-')}/`,
                                component: slash(solutionDetail),
                                // context: edge.node
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: langMapping[edge.node.locale.id],
                                    langCode: edge.node.locale.id
                                },
                            });
                        });
                        resolve();
                    });
            })
            .then(() => {
                graphql(partnerslistQuery)
                    .then(result => {

                        // console.log('result.data.allWpSolution', result.data.allWpPartner);
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        const partnerDetail = path.resolve("./src/templates/partnerDetails.js");
                        _.each(result.data.allWpPartner.edges, edge => {
                            // if (edge.node.locale.id === "en_US") {
                            //     actions.createRedirect({ fromPath: '/partners/' + edge.node.slug, toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            //     actions.createRedirect({ fromPath: '/partners/' + edge.node.slug + "/", toPath: edge.node.localizedWpmlUrl, redirectInBrowser: true, isPermanent: true })
                            // }
                            actions.createPage({
                                path: `/${langSlugMapping[edge.node.locale.id]}partners/${edge.node.slug}/`,
                                component: slash(partnerDetail),
                                // context: edge.node
                                ownerNodeId: edge.node.id,
                                context: {
                                    id: edge.node.id,
                                    lang: langMapping[edge.node.locale.id],
                                    langCode: edge.node.locale.id
                                },
                            });
                        });
                        resolve();
                    });
            });

        //         // ==== END POSTS ====
    });
};

// const postsJSONQuery = `
//  {
//   allWpPressrelease {
//     edges {
//       node {
//         id
//         title
//         slug
//         uri
//         locale {
//           id
//           locale
//         }
//         localizedWpmlUrl
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//           }
//         }
//         date(formatString: "MMMM D, Y")
//         press_release_acf {
//           featured
//           location
//           publishedDate
//           shortTitle
//           summary
//         }
//       }
//     }
//   }
// }
 
// `

// const insightsJSONQuery = `
//  {
//   allWpPerspective {
//     edges {
//       node {
//         id
//         title
//         slug
//         uri
//         locale {
//           id
//           locale
//         }
//         localizedWpmlUrl
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//           }
//         }
//         date(formatString: "MMMM D, Y")
//         press_release_acf {
//           featured
//           location
//           publishedDate
//           shortTitle
//           summary
//         }
//       }
//     }
//   }
// }
 
// `

// const inthenewsJSONQuery = `
//  {
//   allWpInthenews {
//     edges {
//       node {
//         id
//         title
//         slug
//         uri
//         locale {
//           id
//           locale
//         }
//         localizedWpmlUrl
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//           }
//         }
//         date(formatString: "MMMM D, Y")
//         press_release_acf {
//           featured
//           location
//           publishedDate
//           shortTitle
//           summary
//         }
//       }
//     }
//   }
// }
 
// `

// exports.onPostBuild = async ({ graphql }) => {
//     // Run the GraphQL query (from example above).
//     await graphql(postsJSONQuery).then(async (result) => {

//         const postsPath = "./public/json"
//         const posts = result.data.allWpPressrelease.edges.map(({ node }) => node)
//         if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath)

//         fs.writeFileSync(`${postsPath}/news.json`, JSON.stringify(posts))

//         await graphql(insightsJSONQuery).then(async (result) => {

//             const postsPath = "./public/json"
//             const posts = result.data.allWpPerspective.edges.map(({ node }) => node)
//             if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath)

//             fs.writeFileSync(`${postsPath}/insights.json`, JSON.stringify(posts))
//             await graphql(inthenewsJSONQuery).then(async (result) => {

//                 const postsPath = "./public/json"
//                 const posts = result.data.allWpInthenews.edges.map(({ node }) => node)
//                 if (!fs.existsSync(postsPath)) fs.mkdirSync(postsPath)

//                 fs.writeFileSync(`${postsPath}/inthenews.json`, JSON.stringify(posts))
//             })
//         })
//     })
// }