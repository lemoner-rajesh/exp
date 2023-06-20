import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
// import SolutionListing from '../components/Home/solutionlisting';
// import {navigate, withPrefix} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
import {graphql} from "gatsby";
import SiteTrans from "../components/LangConfig/siteTrans.json";
import SolutionsListingAbout from '../components/Home/solutionsListingAbout';

const WhatWeDo = (props) => {

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
    const currentPage = props.data.wpPage
    // const pageSeo = props.data.wpPage.seo
    const allWpSolution = props.data.allWpSolution.edges
    const clickHandler = (e) => {}

    return (
        <React.Fragment>
            <Layout
                translations={currentPage.translated}
                lang={currentPage.locale.id}
                location={props.location}
                // seoTitle={currentPage.seo.opengraphTitle
                // ? currentPage.seo.opengraphTitle
                // : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
                
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
                    description={currentPage.seo.opengraphDescription
                    ? currentPage.seo.opengraphDescription
                    : null}
                    openGraph={{
                    url: shareUrl,
                    title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")
                }}/> */}

                {/* <section className="main-slider-wrapper innnerslider">
                    <div className="main-slider">
                        <div
                            className="item"
                            style={{
                            backgroundImage: `url(${currentPage.featuredImage
                                ? currentPage.featuredImage.node.sourceUrl
                                : null})`
                        }}>
                            <img
                                src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png"
                                className="slider-transparent img-fluid slider-transparent-img"
                                alt="hero-transparent"/>
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">{currentPage.AdditionalFields.topheading}</p>
                                    <h1
                                        className="wow fadeIn"
                                        data-wow-delay="0.4s"
                                        dangerouslySetInnerHTML={{
                                        __html: currentPage.AdditionalFields.heading
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="what-we-do-main-block">
                <div
                    onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
                    dangerouslySetInnerHTML={{
                    __html: currentPage.content
                }}/>
                </div>
                {/* </div>
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
                                        allWpSolution={allWpSolution}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    :null
                } */}
                {/***********************End Solution Listing Section**********************/}
            </Layout>
        </React.Fragment>
    )
}

export default WhatWeDo;

export const WhatWeDoQuery = graphql `
    query WhatWeDoQuery($id: String!,$langCode: ID!) {
        wpPage(id: { eq: $id }) {
            title
            content
            slug
            id,
            
            
            seo{
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

        allWpSolution (sort: {menuOrder: ASC} filter: {locale: {id: {eq: $langCode} } }) {
            edges {
                node {
                    id
                    content
                    title
                    link
                    our_solution_custom_fields {
                        icon {
                            altText
                            sourceUrl
                        }
                        shortDescription
                    }
                    locale {
                        id
                    }
                    localizedWpmlUrl
                }
            }
        }
    }
`



// AdditionalFields {
//                 heading
//                 topheading
//             }

// featuredImage {
//                 node {
//                     sourceUrl
//                 }
//             }
