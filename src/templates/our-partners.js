import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
import SolutionListing from '../components/Home/solutionlisting';
import {graphql, Link} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
// import {graphql} from "gatsby";
import NewsInsightsSolution from '../components/Solutions/newsInsightsSolution';
import PartnersbySolutions from "../components/Partners/partnersbySolutions";
import SiteTrans from "../components/LangConfig/siteTrans.json";

const ParternsListingPagge = (props) => {
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
        // var mapElement = document.getElementById('map');
    }

    // const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wpPageOne
    const allWpSolution = props.data.allWpSolution.edges
    const allWpPartner = props.data.allWpPartner.edges
    const allWpPressreleaseNews = props.data.allWpPressrelease.edges
    const allWpPerspectiveNews = props.data.allWpPerspective.edges

    const clickHandler = (e) => {}

    return (
        <React.Fragment>
            <Layout translations={currentPage.translated} lang={currentPage.locale.id} location={props.location} 
            // seoTitle={currentPage.seo.opengraphTitle ? currentPage.seo.opengraphTitle : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
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
                {/* <GatsbySeo
                    description={currentPage.seo.opengraphDescription ? currentPage.seo.opengraphDescription : null}
                    openGraph={{
                        url: shareUrl,
                        title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
                    }}
                /> */}

                {/* <section className="main-slider-wrapper innnerslider our-solution-banner">
                    <div className="main-slider">
                        <div className="item" style={{ backgroundImage: `url(${currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : null})` }}>
                            {currentPage.AdditionalFields.heroImageGradent === true ? <div className="feature-image-overlay"></div> : null}
                            <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" className="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">{SiteTrans.our_partners_label[currentPage.locale.id]}</p>
                                    <h1 className="wow fadeIn" data-wow-delay="0.4s" dangerouslySetInnerHTML={{ __html: currentPage.AdditionalFields.heading }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="solution-details-section">
                    <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                        __html: currentPage.content
                    }} />
                </section>


                {/* <section className="featured-partner section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text">
                                    <h4>{currentPage.AdditionalFields.fpartnerListingTitle}</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative">
                                    {currentPage.AdditionalFields.fpartnerListingThumbnail.sourceUrl ?
                                        <img className="img-fluid" src={currentPage.AdditionalFields.fpartnerListingThumbnail !== null ? currentPage.AdditionalFields.fpartnerListingThumbnail.sourceUrl : ''} alt="img" />
                                        : null}
                                </div>

                                <div className="modal sdfdsf fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Yofox_h4zGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 pl-md-5">
                                <img className="pb-4 featured-partner-logo" src={currentPage.AdditionalFields.fpartnerListingLogo !== null ? currentPage.AdditionalFields.fpartnerListingLogo.sourceUrl : ''} alt="img" />
                                <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{ __html: currentPage.AdditionalFields.fpartnerListingShortDesc }} />
                                <Link to={currentPage.AdditionalFields.featuredPartnerListing.localizedWpmlUrl}>
                                    {SiteTrans.read_more_txt[currentPage.locale.id]}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/***********************Partners By Solutions**************************/}
                
                <PartnersbySolutions lang={currentPage.locale.id} allWpSolution={allWpSolution} allWpPartner={allWpPartner} />
                {/***********************End Partners By Solutions**********************/}

                



                {/***********************News & Insight Section**********************/}
                <div className="partner-list-newsinsights">
                    <NewsInsightsSolution lang={currentPage.locale.id} allWpPressreleaseNews={allWpPressreleaseNews} allWpPerspectiveNews={allWpPerspectiveNews} />
                </div>
                {/***********************End News & Insight Section**********************/}

                {/***********************Solution Listing Section**********************/}
                {allWpSolution.length > 1 ?
                <section className="what-we-do-solutions mb-5 section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mt-5">
                                    <h4>
                                        {SiteTrans.solutions_section_heading[currentPage.locale.id]}
                                    </h4>
                                </div>

                            </div>
                        </div>
                        
                            <SolutionListing lang={currentPage.locale.id} allWpSolution={allWpSolution} />
                        
                    </div>
                </section>
                    :null
                        }
                {/***********************End Solution Listing Section**********************/}
            </Layout>
        </React.Fragment>
    )
}

export default ParternsListingPagge

export const ParternsListingPageQuery = graphql `
    query ParternsListingPageQuery($id: String!, $langCode: ID!) {
        wpPageOne: wpPage(id: { eq: $id }) {
            title
            content
            slug
            date(formatString: "MMMM D, Y")
            id,
            featuredImage {
                node {
                    sourceUrl
                }
            }
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
        allWpSolution(sort: {menuOrder: ASC} filter: {locale: {id: {eq: $langCode} } }) {
            edges {
                node {
                    id
                    content
                    title
                    link
                    localizedWpmlUrl
                    our_solution_custom_fields {
                    icon {
                        altText
                        sourceUrl
                    }
                    shortDescription
                    }
                }
            }
        }
        allWpPartner(sort: {menuOrder: ASC} filter: {locale: {id: {eq: $langCode} } } ) {
            edges {
                node {
                id
                title
                content
                localizedWpmlUrl
                featuredImage{
                    node{ 
                        sourceUrl
                    }
                }
                PartnersData {
                    logoBackgroundStyle
                                  
                    partnerThumbnail {
                    sourceUrl
                    }
                    partnerIcon {
                        sourceUrl              
                    }
                    verticalPartnerLogo {
                        localFile {
                            url
                        }
                    }
                    parentSolution {
                    ... on WpSolution {
                        id
                        title              
                    }
                    }
                }
                }
            }
        }  

        allWpPressrelease( filter: {press_release_acf: {}, locale: {id: {eq: $langCode}}, status: {eq: "publish"}}  sort: {fields: date, order: DESC}  limit: 10  ) {
            totalCount
            edges {
                node {
                    press_release_acf {
                        shortTitle
                        summary
                        location
                
                    }
                    date(formatString: "MMMM D, Y")
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    localizedWpmlUrl
                }
            }
        }
      
        allWpPerspective(filter: {press_release_acf: {}, locale: {id: {eq: $langCode}}, status: {eq: "publish"}}sort: {fields: date, order: DESC} limit: 10 ) {
            totalCount
            edges {
                node {
                    press_release_acf {
                        shortTitle
                        summary
                        location
                    }
                    date(formatString: "MMMM D, Y")
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    localizedWpmlUrl
                }
            }
        }

    }
`




// AdditionalFields {
//                 heroImageGradent
//                 heading
//                 topheading
//                 fpartnerListingTitle
//                 fpartnerListingShortDesc      
//                 fpartnerListingThumbnail {
//                     sourceUrl
//                 }
//                 fpartnerListingLogo {
//                     sourceUrl
//                 }
//                 featuredPartnerListing {
//                     ... on WpPartner {
//                     id
//                     link
//                     localizedWpmlUrl
//                     title
//                     }
//                 }
//             }