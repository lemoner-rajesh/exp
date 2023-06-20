import React, {useEffect, useState} from "react"
import Layout from '../components/layouts/index'
// import SolutionListing from '../components/Home/solutionlisting'
import Function from "../lib/functions";
import $ from 'jquery';
import {decode} from 'html-entities';
import {graphql} from "gatsby"
import {downloadIcon} from '/static/images/download-icon.png';
import NewsInsightsHome from '../components/Home/newsInsightsHome'
import SiteTrans from "../components/LangConfig/siteTrans.json"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const HomePageTemplate = (props) => {
    const [shareUrl,
        setShareUrl] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    useEffect(() => onPreRouteUpdate(), []);

    const onPreRouteUpdate = () => {
        Function.LoadingAllSliderScript()
    }
    const handleComponentMounted = () => {

        setTimeout(() => {
            const getUrl = window.location.href

            setShareUrl(getUrl)
            if (window.location.href.indexOf('press-release') !== -1 || window.location.href.indexOf('perspective') !== -1) {
                $('h4.wow').removeClass('wow');
            }
        }, 3000);
    }

    const handleComponentUpdated = () => {
        $('h4.wow').removeClass('wow');
    }

    const currentPage = props.data.wpPage
    const custom_fields = props.data.wpPage.h_fields_group
    const allWpPressreleaseNews = props.data.allWpPressrelease.edges
    const allWpPerspectiveNews = props.data.allWpPerspective.edges
    const allWpSpotlightSlider = props.data.allWpSpotlight.edges
    // const allWpSolution = props.data.allWpSolution.edges
    const downloads = props.data.downloads.edges;

    return (
        <React.Fragment>
            <Layout
                translations={currentPage.translated}
                lang={currentPage.locale.id}
                location={props.location}
                 seosection={{
                  seotitle: currentPage.seo.opengraphTitle
                    ? currentPage.seo.opengraphTitle
                    : decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
                  seodescription: currentPage.seo.opengraphDescription
                    ? currentPage.seo.opengraphDescription
                    : "",
                  openGraphURL: shareUrl,
                  openGraphtitle: decode(currentPage.title).replace(
                    /(<([^>]+)>)/gi,
                    ""
                  ),
                  openGraphdescription: "",
                  openGraphImage: "",
                }}
                
                >

                <section id="home" className="main-slider-wrapper">
                    <div className="main-slider">
                        {allWpSpotlightSlider.map((data, key) => {
                            return (
                              <div className="item">
                                <BackgroundImage
                                       Tag="div"
                                    {...convertToBgImage(getImage(data.node.featuredImage.node.gatsbyImage))}
                                    
                                //     style={{
                                //     backgroundImage: `url(${data.node.featuredImage
                                //         ? data.node.featuredImage.node.sourceUrl
                                //         : null})`
                                // }}
                            
                                
                                >
                                  {/* {console.log("slider", data.node.featuredImage.node.gatsbyImage)} */}
                  
                                    <img
                                        src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082145/slider-transparent.png"
                                        className="slider-transparent img-fluid slider-transparent-img"
                                        alt="slider"/>
                                    <div className="container">
                                        <div className="text">
                                            {data.node.content !== null
                                                ? (
                                                    <div>
                                                        <p className="heading wow fadeIn">
                                                            {data.node.title}
                                                        </p>
                                                        <h4
                                                            className="wow fadeIn"
                                                            data-wow-delay="0.4s"
                                                            dangerouslySetInnerHTML={{
                                                            __html: data.node.content
                                                        }}/>
                                                    </div>
                                                )
                                                : null}
                                            {data.node.spotlights.showReadMore && data.node.spotlights.readMore
                                                ? (
                                                    <a
                                                        className="wow fadeIn read-more-btn"
                                                        data-wow-delay="0.6s"
                                                        rel="noreferrer"
                                                        href={data.node.spotlights.readMore}
                                                        target={data.node.spotlights.target
                                                        ? "_blank"
                                                        : ""}>
                                                        {data.node.spotlights.readMoreText
                                                            ? data.node.spotlights.readMoreText
                                                            : null}
                                                    </a>
                                                )
                                                : null}
                                            <div
                                                className="slider-controllers d-flex align-center justify-content-start wow fadeIn"
                                                data-wow-delay="0.6s">
                                                <div className="prev">
                                                    <img
                                                        src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082148/prev-arrow.png"
                                                        alt="prev-arrow"/>
                                                </div>
                                                <div className="count  d-flex align-center justify-content-center"></div>
                                                <div className="next">
                                                    <img
                                                        src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082149/next-arrow.png"
                                                        alt="next-arrow"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BackgroundImage>
                                </div>
                            );
                        })}
                    </div>
                    <a href="#in" className="scroll-down">
                        <img
                            src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082148/scroll-down.png"
                            className="bounce"
                            alt=" scroll-down "/>{" "}
                        <span>{SiteTrans.mainbanner_scroll_down[currentPage.locale.id]}</span>
                    </a>

                    <div className="container">
                        {currentPage.locale.id === "en_US"
                            ? (
                                <div className="downloads">
                                    <div className="download-icon">
                                        <img src="https://media.aljhealth.com/wp-content/uploads/2021/12/14123212/download-icon.png" className="icon" alt="download icon"/>
                                    </div>

                                    <div className="download-link">
                                        <p>Jameel Health Brochure</p>
                                        <p>
                                            {" "}

                                      {
                                        downloads[0] && downloads[0].node.health_brochure && downloads[0].node.health_brochure.abdulLatifJameelHealthBrochure ?


                                            <a
                                                href={downloads?downloads[0].node.health_brochure.abdulLatifJameelHealthBrochure.mediaItemUrl:null}
                                                target="_blank" rel="noreferrer">
                                                {" "} {downloads? ( downloads[0].node.health_brochure.abdulLatifJameelHealthBrochure.fileSize / (1024 * 1024)).toFixed(2):""}{""}MB (PDF file)
                                            </a>: null}
                                        </p>{" "}
                                    </div>
                                </div>
                            )
                            : null}
                    </div>
                </section>


                {/***********************News & Insights Section********************/}
                {console.log(allWpPressreleaseNews)}
                {console.log(allWpPerspectiveNews)}
                {allWpPressreleaseNews.length > 1 || allWpPerspectiveNews.length > 1 ?
                <NewsInsightsHome
                    lang={currentPage.locale.id}
                    allWpPressreleaseNews={allWpPressreleaseNews}
                    allWpPerspectiveNews={allWpPerspectiveNews}/>
                    :null}
                              {console.log("allWpPressreleaseNews",props)}

                 {/***********************End News & Insights Section********************/}

                {/***********************Our Solutions Section********************/}
                {/* <section id="our-solutions" className="our-solutions-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="heading">{SiteTrans.solutions_section_top_heading[currentPage.locale.id]}</p>
                                <h4>{SiteTrans.solutions_section_heading[currentPage.locale.id]}</h4>
                            </div>
                        </div>
                        <div
                            className="row"
                            dangerouslySetInnerHTML={{
                            __html: custom_fields.homeSolutionsSectionDescription
                        }}/>
                        <SolutionListing lang={currentPage.locale.id} allWpSolution={allWpSolution}/>
                    </div>
                </section> */}
                {/***********************End Our Solutions Section********************/}
                {/***********************From Wordpress Content********************/}
                <div className="solution-home-main-block">
                <div
                    dangerouslySetInnerHTML={{
                    __html: currentPage.content
                }}/> 
                </div>
                {/***********************End Wordpress Content********************/}
            </Layout>
        </React.Fragment>
    );

}

export default HomePageTemplate

export const homePageQueryPage = graphql `
    query homePageQueryPage($id: String!, $langCode: ID!) {
        wpPage(id: { eq: $id }) {
            title
            content
            slug
            id,            
            seo {
                opengraphTitle
                opengraphDescription
            }
           
            template {
              templateName
            }
            locale {
        id
        locale
      }
      
    translated {
      id
      localizedWpmlUrl
      locale {
        id
        locale
      }
      slug
      title
    }
            
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
        allWpPressrelease(filter: {locale: {id: {eq: $langCode}}, status: {eq: "publish"}}, sort: {fields: date, order: DESC}){    
        totalCount
        edges {
          node {
            press_release_acf {
              shortTitle
              summary
              location
              featured
           
            }
            date(formatString: "MMMM D, Y")
            slug
            featuredImage {
              node {
                sourceUrl
                gatsbyImage(width: 740)
              }
            }
            localizedWpmlUrl
          }
        }
  } 
  allWpPerspective(filter: {locale: {id: {eq: $langCode}}, status: {eq: "publish"}}, sort: {fields: date, order: DESC}) {
    totalCount
    edges {
      node {
        press_release_acf {
          shortTitle
          summary
          location
          featured
       
        }
        date(formatString: "MMMM D, Y")
        slug
        featuredImage {
          node {
            sourceUrl        
            gatsbyImage(width: 740)
          }
        }
        localizedWpmlUrl
      }
    }
  } 

  allWpSpotlight(filter: {locale: {id: {eq: $langCode}}},sort: {fields: menuOrder, order: ASC}) {
    edges {
      node {
        title
        content
        featuredImage {
          node {
            sourceUrl
            gatsbyImage(width: 1920, placeholder: BLURRED)
          }
        }
        spotlights {
          target
          readMore
          readMoreText
          showReadMore
        }
      }
    }
  }

  downloads: allWpPage(filter: {id: {eq: "cG9zdDozMTQ4"}}) {
    edges {
      node {
        health_brochure {
          abdulLatifJameelHealthBrochure {
            fileSize
            mediaItemUrl
          }
        }
      }
    }
  }

  jameelWidget:  allWpPage(filter: {id: {eq: "cG9zdDozMjM5"}}) {
    edges {
      node {
   content
      }
    }
  }

 
    
}
`
//cG9zdDozMjM5 locale: {id: {eq: "en_US"}}}, sort: {fields: date, order: DESC}
//  h_fields_group {                            
//               homeSolutionsSectionHeading                            
//               homeSolutionsSectionSubHeading           
//               homeSolutionsSectionDescription                 
//             }



//  allWpSolution (filter: {locale: {id: {eq: $langCode} } } sort: {fields: menuOrder, order: ASC}) {
//       edges {
//         node {
//           id
//           content
//           title
//           link
//           our_solution_custom_fields {
//             icon {
//               altText
//               sourceUrl
//             }
//             shortDescription            
//           }
//           locale {
//             id
//           }
//           localizedWpmlUrl
//         }
//       }
//     }