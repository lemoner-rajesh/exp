import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
// import Solutionlisting from '../components/Home/solutionlisting';
import {graphql, Link} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
import SolutionsListingAbout from '../components/Home/solutionsListingAbout';
// import NewsInsightsSolutionDetails from '../components/Solutions/newsInsightsSolutionDetails';
// import SolutionsPartnersList from "../components/Partners/solutionsPartnersList";
import SiteTrans from "../components/LangConfig/siteTrans.json";

const SolutionDetailPage = (props) => {
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
    //console.log(props)
    // const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wpSolution;
    // const allWpPressreleaseNews = props.data.wpSolution.our_solution_custom_fields.newsBySolutionList;
    // const allWpPerspectiveNews = props.data.wpSolution.our_solution_custom_fields.insightsBySolution;
    const allWpSolution = props.data.allWpSolution.edges

    // function youtube_parser(url) {
    //     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    //     var match = url.match(regExp);
    //     return (match && match[7].length === 11) ? match[7] : false;
    // }

    // let getyoutubeid
    // if (currentPage.our_solution_custom_fields.youtubeVideoLink !== null) {
    //     getyoutubeid = youtube_parser(currentPage.our_solution_custom_fields.youtubeVideoLink)
    // } else {
    //     getyoutubeid = null
    // }

    const clickHandler = (e) => {}

    return (
        <React.Fragment>
            <Layout
                translations={currentPage.translated}
                lang={currentPage.locale.id}
                location={props.location}
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
                     description={"currentPage.seo.opengraphDescription ? currentPage.seo.opengraphDescription : null"}
                     openGraph={{
                         url: "shareUrl",
                         title: "test",                     
                    }} /> */}

                {/* <section className="main-slider-wrapper innnerslider our-solution-banner">
                    <div className="main-slider">
                        <div className="item"
                            style={{
                                backgroundImage: `url(${currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : null})`
                            }}>
                            {currentPage.our_solution_custom_fields.heroImageGradent === true ? <div className="feature-image-overlay"></div> : null}
                            <img
                                src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png"
                                className="slider-transparent img-fluid slider-transparent-img"
                                alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">{SiteTrans.solutions_section_top_heading[currentPage.locale.id]}</p>
                                    <div className="d-flex align-items-center">
                                        {currentPage.our_solution_custom_fields.icon && currentPage.our_solution_custom_fields.icon.sourceUrl ?
                                            <img src={currentPage.our_solution_custom_fields.icon !== null ? currentPage.our_solution_custom_fields.icon.sourceUrl : ''} alt="img" />
                                            : null}
                                        <h1 className="wow fadeIn" data-wow-delay="0.4s">{currentPage.title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="solution-detail-main-block">
                    <div
                        onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
                        dangerouslySetInnerHTML={{
                            __html: currentPage.content
                        }} />

                </div>        
                {/* <section className="solution-details-section mb-0">
                    <div
                        onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
                        dangerouslySetInnerHTML={{
                            __html: currentPage.content
                        }} />
                </section> */}
                {/* <section className="foot-notes mb-5" id="foot_notes" >
                    <div className="container">
                        {
                            currentPage.our_solution_custom_fields.footnotes !== null ? <h4>{SiteTrans.footnote_lable[currentPage.locale.id]}</h4> : ''
                        }
                        <div dangerouslySetInnerHTML={{
                            __html: currentPage.our_solution_custom_fields.footnotes
                        }}></div>
                    </div>
                </section> */}

                {/* <section className="featured-partner section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text">
                                    <h4>{SiteTrans.featured_partners_lable[currentPage.locale.id]}</h4>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="position-relative">
                                    {currentPage.our_solution_custom_fields.partnerPicture && currentPage.our_solution_custom_fields.partnerPicture.sourceUrl ?
                                        <img className="img-fluid"  src={currentPage.our_solution_custom_fields.partnerPicture !== null ? currentPage.our_solution_custom_fields.partnerPicture.sourceUrl : ''} alt="img" />
                                        : null}
                                    <div className="feature-partner-video">
                                        {getyoutubeid !== null
                                            ? <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-toggle="modal"
                                                data-target="#exampleModalCenter">
                                                <img
                                                    src="https://media.aljhealth.com/wp-content/uploads/2022/06/09111057/video-btn.png" alt="img" />
                                            </button>
                                            : null}
                                    </div>
                                </div>

                                <div
                                    className="modal fade"
                                    id="exampleModalCenter"
                                    tabindex="-1"
                                    role="dialog"
                                    aria-labelledby="exampleModalCenterTitle"
                                    aria-hidden="true">
                                    <div
                                        className="modal-dialog modal-dialog-centered solotion-video-dialog"
                                        role="document">
                                        <div className="modal-content">
                                            <div className="solution-video-btn">
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="solution-video-containter">
                                                <div className="modal-body">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-12 p-0">
                                                                {getyoutubeid !== null
                                                                    ? <iframe
                                                                        width="100%"
                                                                        height="550"
                                                                        src={`https://www.youtube.com/embed/${getyoutubeid}`}
                                                                        title="YouTube video player"
                                                                        frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowfullscreen></iframe>
                                                                    : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 pl-md-5">
                                {currentPage.our_solution_custom_fields.partnerLogo && currentPage.our_solution_custom_fields.partnerLogo.sourceUrl ?
                                    <img className="pb-4 featured-partner-logo" src={currentPage.our_solution_custom_fields.partnerLogo !== null ? currentPage.our_solution_custom_fields.partnerLogo.sourceUrl : ''} alt="img" />
                                    : null}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: currentPage.our_solution_custom_fields.partnerText
                                    }} />
                                <Link
                                    to={currentPage.our_solution_custom_fields.featuredPartner !== null
                                        ? currentPage.our_solution_custom_fields.featuredPartner.link
                                        : '#'}>
                                    {SiteTrans.read_more_txt[currentPage.locale.id]}
                                </Link>
                                <Link
                                    to={SiteTrans.see_all_partners_link[currentPage.locale.id]}
                                    className="see-all-partner-btn">
                                    {SiteTrans.see_all_partners_txt[currentPage.locale.id]}
                                </Link>
                            </div>

                            <div className="col-md-12">
                                <div className="partner-disclaimer">
                                    {
                                        currentPage.our_solution_custom_fields.partnerDisclaimer !== null ? <h4>{SiteTrans.disclaimer_lable[currentPage.locale.id]}</h4> : ''
                                    }
                                    <div dangerouslySetInnerHTML={{
                                        __html: currentPage.our_solution_custom_fields.partnerDisclaimer
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/***********************Partners Listing Section**********************/}
                {/* {currentPage.our_solution_custom_fields.partnersBySolution !== null & currentPage.our_solution_custom_fields.partnersBySolution !== ''
                    ? <section className="section other-partner-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text">
                                        <h4>{SiteTrans.other_partners_txt[currentPage.locale.id]}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid other-partner-logo-container responsive slider">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <SolutionsPartnersList
                                            lang={currentPage.locale.id}
                                            PartnersBySolutionList={currentPage.our_solution_custom_fields.partnersBySolution} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid other-partner-pagenation-container">
                            <div className="container">
                                <div className="other-partner-controller d-flex justify-content-center">
                                    <div className="partner-prev-1 other-partner-first-arrow"><img
                                        src="https://media.aljhealth.com/wp-content/uploads/2022/08/03075232/prev-arrow-black-new-red.png"
                                        alt=" down prev-arrow " /></div>
                                    <div className="partner-next-1"><img
                                        src="https://media.aljhealth.com/wp-content/uploads/2022/08/03075233/next-arrow-black-new-red.png"
                                        alt=" down next-arrow" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    : null} */}
                {/***********************End Partners Listing Section**********************/}

                {/***********************News & Insight Section**********************/}
                {/* {allWpPressreleaseNews !== null || allWpPerspectiveNews !== null
                    ? <NewsInsightsSolutionDetails
                        lang={currentPage.locale.id}
                        allWpPressreleaseNews={allWpPressreleaseNews}
                        allWpPerspectiveNews={allWpPerspectiveNews} />
                    : null} */}
                {/***********************End News & Insight Section**********************/}

                {/***********************Solution Listing Section**********************/}
                {allWpSolution.length > 1 ?
                <section className="what-we-do-solutions section about-solutions-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mt-5">
                                    <h4>{SiteTrans.solutions_section_heading[currentPage.locale.id]}</h4>
                                </div>
                                <SolutionsListingAbout
                                    lang={currentPage.locale.id}
                                    solution_id={currentPage.id}
                                    allWpSolution={allWpSolution} 
                                    pageType="solution" 
                                />
                            </div>
                        </div>
                    </div>
                </section>
                :null}
                {/***********************End Solution Listing Section**********************/}
            </Layout>
        </React.Fragment>
    )
}

export default SolutionDetailPage


export const SolutionDetailPageQuery = graphql `
    query SolutionDetailPageQuery($id: String!,$langCode: ID!) {
        wpSolution(id: { eq: $id }) {
            title
            content
            slug
            id            
            seo {
                opengraphTitle
                opengraphDescription
            }
            locale {
                id
                locale
            }
            featuredImage {
                node {
                    altText
                    sourceUrl
                    caption
                    localFile {
                        name
                        ext
                        base
                    }
                }
            }
            our_solution_custom_fields {
                shortDescription
                fieldGroupName
                icon {
                    sourceUrl
                }
                
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

        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
       
    
    }
`
//  our_solution_custom_fields {
//                 // footnotes
//                 // partnerDisclaimer
//                 // partnerText
//                 shortDescription
//                 fieldGroupName
//                 // youtubeVideoLink
//                 //heroImageGradent
//                 icon {
//                     sourceUrl
//                 }
//                 partnerPicture {
//                     sourceUrl
//                 }
//                 partnerLogo {
//                     sourceUrl
//                 }



// featuredPartner {
//                     ... on WpPartner {
//                     id
//                     title
//                     link
//                     content
//                     featuredImage {
//                         node {
//                             sourceUrl
//                         }
//                     }
//                     }
//                 }
//                 partnersBySolution {
//                     ... on WpPartner {
//                     id
//                     title          
//                     localizedWpmlUrl
//                     PartnersData {
//                         logoBackgroundStyle
//                         youtubeVideoLink
//                         partnerIcon {
//                             sourceUrl
//                         }
//                         partnerThumbnail {
//                             sourceUrl
//                         }
//                     }
//                     }
//                 }
//                 newsBySolutionList {
//                     ... on WpPressrelease {
//                     id
//                     press_release_acf {
//                         shortTitle
//                         summary
//                         location
//                     }
//                     date(formatString: "MMMM D, Y")
//                     slug
//                     localizedWpmlUrl
//                     featuredImage {
//                         node {
//                             sourceUrl                      
//                         }
//                     }
//                     }
//                 }
//                 insightsBySolution {
//                     ... on WpPerspective {
//                     id
//                     press_release_acf {
//                         shortTitle
//                         summary
//                         location
//                     }
//                     date(formatString: "MMMM D, Y")
//                     slug
//                     localizedWpmlUrl
//                     featuredImage {
//                         node {
//                             sourceUrl                      
//                         }
//                     }
//                     }
//                 }