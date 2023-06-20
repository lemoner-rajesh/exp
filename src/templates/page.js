import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
import { graphql } from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';

const PageTemplate = (props) => {
    const [shareUrl,
        setShareUrl] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    useEffect(() => onPreRouteUpdate(), []);
console.log("from page template",props.data.wpPage.slug)
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
                {/* <SEO pageSeo={pageSeo} href={props.location.href} /> */}
                {/* <GatsbySeo
                    description={currentPage.seo.opengraphDescription ? currentPage.seo.opengraphDescription : null}
                    openGraph={{
                        url: shareUrl,
                        title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
                    }}
                /> */}

                {/* <section className="main-slider-wrapper innnerslider">
                    <div className="main-slider">
                        <div className="item" style={{ backgroundImage: `url(${currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : null})` }}>
                            <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" className="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <h1 className="wow fadeIn" data-wow-delay="0.4s">{currentPage.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="pages-main-block inner-pages">
                <div onClick={clickHandler}  onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                    __html: currentPage.content
                }} />
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default PageTemplate

export const pageQuery = graphql `
    query currentPageQuery($id: String!) {
        wpPage(id: { eq: $id }) {
            
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
    }
`



// featuredImage {
//                 node {
//                     sourceUrl
//                 }
//             }
// title