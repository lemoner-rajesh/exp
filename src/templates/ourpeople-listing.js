import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
import {graphql, Link} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
// import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
// import shareWhatsappImage from "../common/images/share-whatsapp.png";
// import shareLinkedinImage from "../common/images/share-linkedin.png";
// import shareFBImage from "../common/images/share-fb.png";
// import shareTwitterImage from "../common/images/share-twitter.png";
// import shareMailImage from "../common/images/share-mail.png";
// import shareImage from "../common/images/share.png";
import SiteTrans from "../components/LangConfig/siteTrans.json";

const PageTemplate = (props) => {
    useEffect(() => handleComponentUpdated());
    const [shareUrl,
        setShareUrl] = useState('')
    const handleComponentUpdated = () => {
        const getUrl = window.location.href
        $('h4.wow').removeClass('wow');
        // var mapElement = document.getElementById('map');
        setShareUrl(getUrl)
    }

    // const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wpPageOne
    const allPeople = props.data.allWpOurpeople.edges
    // const ourPeopleTitleData = props.data.wpOurPeoplesListing
    let advisors = allPeople.filter(item => item.node.our_people_fields.type === "advisors")
    let management = allPeople.filter(item => item.node.our_people_fields.type === "management")
    let executive = allPeople.filter(item => item.node.our_people_fields.type === "executive")
    let thejameelfamily = allPeople.filter(item => item.node.our_people_fields.type === "the-jameel-family")

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
                {/* <section className="main-slider-wrapper innnerslider">
                    <div className="main-slider">
                        <div className="item" style={{ backgroundImage: `url(${currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : null})` }}>
                            <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" className="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">{currentPage.AdditionalFields.topheading}</p>
                                    <h1 className="wow fadeIn" data-wow-delay="0.4s" dangerouslySetInnerHTML={{ __html: currentPage.AdditionalFields.heading }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


{/* <section class="main-slider-wrapper innnerslider">
   <div class="main-slider">
      
         <div class="slick-track" style="opacity: 1; width: 2113px;">
            <div class="container">
                  <div class="text">
                     <p class="heading wow fadeIn animated">OUR PEOPLE</p>
                     <h1 class="wow fadeIn" data-wow-delay="0.4s">Our people are<br>our greatest strength</h1>
                  </div>
               </div>
      </div>
   </div>
</section> */}



                <div className="our-people-listing-block">
                    <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                        __html: currentPage.content
                    }} />
                </div>
                {executive ?
                    <section className="contentbx peoplelists blue-bg">
                        <div className="container">
                            {/* <h4>{ourPeopleTitleData.our_peoples_listing.ourPeoplesExecutiveTitle ? ourPeopleTitleData.our_peoples_listing.ourPeoplesExecutiveTitle : "Executive team"}</h4> */}
                            <h4>{SiteTrans.executive_team_text[currentPage.locale.id]}</h4> 
                            <div className="row">
                                {executive.map(data => {
                                    return data.node.title === "Blank-Block" ? <div className="col-6 col-lg-3 Blank-Block"> </div> : <div className="col-6 col-lg-3">
                                        <div className="peoplebiobx">
                                            <div className="imgbx">
                                                {data.node.our_people_fields.thumbnailImage.sourceUrl ?
                                                    <img src={data.node.our_people_fields.thumbnailImage !== null ? data.node.our_people_fields.thumbnailImage.sourceUrl : ''} alt={data.node.our_people_fields.thumbnailImage.altText ? data.node.our_people_fields.thumbnailImage.altText : null} />
                                                    : null}
                                            </div>
                                            <h5>{data.node.title}</h5>
                                            <p>{data.node.our_people_fields.position}<br />{data.node.our_people_fields.company}</p>
                                            <Link className="viewbio" to={data.node.link}> {SiteTrans.our_people_view_bio[currentPage.locale.id]} &#62; </Link>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    </section>
                    : null}

                {management ?
                    <section className="contentbx peoplelists our-poeple-management-bg">
                        <div className="container">
                            {/* <h4>{ourPeopleTitleData.our_peoples_listing.ourPeoplesManagementTitle ? ourPeopleTitleData.our_peoples_listing.ourPeoplesManagementTitle : "Leadership team"}</h4> */}
                            <h4>{SiteTrans.leadership_team_text[currentPage.locale.id]}</h4> 
                            <div className="row">
                                {management.map(data => {
                                    return data.node.title === "Blank-Block" ? <div className="col-6 col-lg-3 Blank-Block"> </div> : <div className="col-6 col-lg-3">
                                        <div className="peoplebiobx">
                                            <div className="imgbx">
                                                {data.node.our_people_fields.thumbnailImage.sourceUrl ?
                                                    <img src={data.node.our_people_fields.thumbnailImage !== null ? data.node.our_people_fields.thumbnailImage.sourceUrl : ''} alt={data.node.our_people_fields.thumbnailImage.altText ? data.node.our_people_fields.thumbnailImage.altText : null} />
                                                    : null}
                                            </div>
                                            <h5>{data.node.title}</h5>
                                            <p>{data.node.our_people_fields.position}<br />{data.node.our_people_fields.company}</p>
                                            <Link className="viewbio" to={data.node.link}> {SiteTrans.our_people_view_bio[currentPage.locale.id]} &#62; </Link>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    </section>
                    : null}
                {advisors ?
                    <section className="contentbx peoplelists accordiansec special-advisors">
                        <div className="container">

                            {/* <h4>{ourPeopleTitleData.our_peoples_listing.ourPeoplesAdvisorTitle ? ourPeopleTitleData.our_peoples_listing.ourPeoplesAdvisorTitle : "Special advisors"}</h4> */}
                            <h4>{SiteTrans.special_advisors_text[currentPage.locale.id]}</h4> 
                            <div className="row">
                                {advisors.map(data => {
                                    return data.node.title === "Blank-Block" ? <div className="col-6 col-lg-3 Blank-Block"> </div> : <div className="col-6 col-lg-3">
                                        <div className="peoplebiobx">
                                            <div className="imgbx">
                                                {data.node.our_people_fields.thumbnailImage.sourceUrl ?
                                                    <img src={data.node.our_people_fields.thumbnailImage !== null ? data.node.our_people_fields.thumbnailImage.sourceUrl : ''} alt={data.node.our_people_fields.thumbnailImage.altText ? data.node.our_people_fields.thumbnailImage.altText : null} />
                                                    : null}
                                            </div>
                                            <h5>{data.node.title}</h5>
                                            <p>{data.node.our_people_fields.position}<br />{data.node.our_people_fields.company}</p>
                                            <Link className="viewbio" to={data.node.link}> {SiteTrans.our_people_view_bio[currentPage.locale.id]} &#62; </Link>
                                        </div>
                                    </div>
                                })
                                }
                            </div>
                        </div>
                    </section>
                    : null}

                {thejameelfamily ?
                    <section className="contentbx peoplelists blue-bg">
                        <div className="container">
                            {/* <h4>{ourPeopleTitleData.our_peoples_listing.ourPeoplesTheJameelFamilyTitle ? ourPeopleTitleData.our_peoples_listing.ourPeoplesTheJameelFamilyTitle : "The Jameel Family"}</h4> */}
                            <h4>{SiteTrans.the_jameel_family_text[currentPage.locale.id]}</h4> 
                            {thejameelfamily.map(data => {
                                return <div className="row">
                                    <div className="col-md-3 col-lg-3">
                                        <div className="peoplebiobx">
                                            <div className="imgbx">
                                                {data.node.our_people_fields.thumbnailImage.sourceUrl ?
                                                    <img src={data.node.our_people_fields.thumbnailImage !== null ? data.node.our_people_fields.thumbnailImage.sourceUrl : ''} alt={data.node.our_people_fields.thumbnailImage.altText ? data.node.our_people_fields.thumbnailImage.altText : null} />
                                                    : null}
                                            </div>
                                            <h5>{data.node.title}</h5>
                                            <p>{data.node.our_people_fields.position}<br />{data.node.our_people_fields.company}</p>
                                            <Link className="viewbio" to={data.node.link}> {SiteTrans.our_people_view_bio[currentPage.locale.id]} &#62; </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-lg-9">
                                        <div dangerouslySetInnerHTML={{ __html: data.node.our_people_fields.shortdescription }}></div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </section>
                    : null}
            </Layout>
        </React.Fragment> 
    )
}

export default PageTemplate

export const pageQuery = graphql `
    query ourPeopleLis($id: String!, $langCode: ID!) {
       wpPageOne: wpPage(id: { eq: $id }) {
            title
            content
            slug
            date(formatString: "MMMM D, Y")
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
      
       
        wpPageTwo: wpPage(slug: {eq: "contact-widget"},  locale: {id: {eq: $langCode}}) {
            content
        }
        allWpOurpeople(sort: {fields: our_people_fields___sortNumber, order: ASC}, filter: {locale: {id: {eq: $langCode}}}) {
            edges {
                node {
                    link
                    title
                    our_people_fields {
                        company
                        fieldGroupName
                        position
                        sortNumber
                        type
                        shortdescription
                        thumbnailImage {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
        }
    }
`
//   wpHeroImage: allWpPage(filter: {id: {eq: "cG9zdDo4NDU="}}) {
//             edges {
//                 node {
//                     featuredImage {
//                         node {
//                             altText
//                             sourceUrl
//                         }
//                     }
//                 }
//             }
//         }




//  wpOurPeoplesListing:   wpPage(slug: {eq: "our-people"},  locale: {id: {eq: $langCode}}) {
//             our_peoples_listing {
//                 ourPeoplesAdvisorTitle
//                 ourPeoplesExecutiveTitle
//                 ourPeoplesManagementTitle
//                 ourPeoplesTheJameelFamilyTitle
//                 fieldGroupName
//             }
//         }