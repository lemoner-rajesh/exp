import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
// import SolutionListing from '../components/Home/solutionlisting';
import {graphql} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
import SolutionsListingAbout from '../components/Home/solutionsListingAbout';
import SiteTrans from "../components/LangConfig/siteTrans.json";

const PartnerDetailsPage = (props) => {
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

    // const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wpPartner;
    const allWpSolution = props.data.allWpSolution.edges
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

                {/* <section className="main-slider-wrapper innnerslider our-solution-banner our-partner-banner">
                    <div className="main-slider">
                        <div className="item" style={{ backgroundImage: `url(${currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : null})` }}>
                            {currentPage.PartnersData.heroImageGradent === true ? <div className="feature-image-overlay"></div> : null}
                            <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" className="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">{SiteTrans.our_partners_label[currentPage.locale.id]}</p>
                                    <div className="d-flex align-items-center">
                                        {currentPage.PartnersData.partnerIcon.sourceUrl ?
                                            <img className="img-fluid" src={currentPage.PartnersData.partnerIcon !== null ? currentPage.PartnersData.partnerIcon.sourceUrl : ''} alt="img" />
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="partner-detail-main-block">
                <div
                        onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
                        dangerouslySetInnerHTML={{
                            __html: currentPage.content
                  }} />
                </div>
                  {/* <div
                        onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
                        dangerouslySetInnerHTML={{
                            __html: currentPage.content
                        }} />
                <section className="solution-details-section mb-5 mt-5">
                    <div className="container">
                        <div className="row">


<section class="wo-section section">    
    
      <div class="row">
         
          <div class="col-md-6">
            
                    <div  dangerouslySetInnerHTML={{
                                    __html: currentPage.PartnersData.partnerMainLeftText?currentPage.PartnersData.partnerMainLeftText:null
                                }} /> */}
                                {/* <p>{currentPage.PartnersData.partnerMainLeftText !== null ? currentPage.PartnersData.partnerMainLeftText : ''}</p> */}
                                {/* {console.log("currentPage",currentPage)} */}
          {/* </div>

             <div class="col-md-6"> */}
                                            
{/* 
                                             <div  dangerouslySetInnerHTML={{
                                    __html: currentPage.PartnersData.partnerMainRightText?currentPage.PartnersData.partnerMainRightText:null
                                }} />  */}
                                
                                {/* <p>{currentPage.PartnersData.partnerMainLeftText !== null ? currentPage.PartnersData.partnerMainLeftText : ''}</p> */}
          {/* </div> 
          
      </div>
      
</section> */}
                            {/* <div className="col-md-12">
                                          
                                            
                                <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                                    __html: currentPage.content
                                }} />
                            </div> */}
                        {/* </div>
                    </div>
                </section> */}

                {/* <section className="solution-details-section mb-5 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                                    __html: currentPage.content
                                }} />
                            </div>
                        </div>
                    </div>
                </section> */}
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
                                      allWpSolution={allWpSolution} />
                              </div>
                          </div>
                      </div>
                  </section>
                  :null
                }
                {/***********************End Solution Listing Section**********************/}
            </Layout>
        </React.Fragment>
    )
}

export default PartnerDetailsPage

export const PartnerDetailsPageQuery = graphql `
    query PartnerDetailsPageQuery($id: String!, $langCode: ID!) {
      wpPartner(id: { eq: $id }) {
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
            PartnersData {
              
              partnerThumbnail {
                gatsbyImage(width: 500, placeholder: BLURRED)
              }
              partnerIcon {
                sourceUrl
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
    }
`
// heroImageGradent
//               partnerMainLeftText
//                 partnerMainRightText