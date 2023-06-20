// import React, { useEffect, useState } from "react"
// import Layout from '../components/layouts/index'

// // import MainMenu from '../components/Mainmenu'
// // import CustomPost from '../components/customPostItems'
// // import {navigate, withPrefix} from "gatsby"
// // import styled from 'styled-components';
// // import SEO from "../components/seo"

// import Function from "../lib/functions";
// import $ from 'jquery';
// import { GatsbySeo } from 'gatsby-plugin-next-seo';
// import { decode } from 'html-entities';
// import { graphql } from "gatsby"
// import SolutionsListingAbout from '../components/Home/solutionsListingAbout'
// import SiteTrans from "../components/LangConfig/siteTrans.json"

// const AboutUsPage = (props) => {

//     console.log('props', props);

//     const [shareUrl, setShareUrl] = useState('')
//     useEffect(() => handleComponentMounted(), []);
//     useEffect(() => handleComponentUpdated());
//     useEffect(() => onPreRouteUpdate(), []);


//     useEffect(() => {

//         //   $('#vmap').vectorMap({
//         //     map: 'world_en',
//         //     pinMode: 'content'
//         // });
//     }, [])

//     const onPreRouteUpdate = () => {
//         Function.LoadingAllSliderScript()
//     }
//     const handleComponentMounted = () => {
//         setTimeout(() => {
//             const getUrl = window.location.href
//             console.log('getUrl', getUrl)
//             setShareUrl(getUrl)
//             if (window.location.href.indexOf('press-release') !== -1 || window.location.href.indexOf('perspective') !== -1) {
//                 $('h4.wow').removeClass('wow');
//             }
//         }, 3000);
//     }

//     const handleComponentUpdated = () => {
//         $('h4.wow').removeClass('wow');
//         // var mapElement = document.getElementById('map');
//         // console.log('map present');
//     }

//     // const siteMetadata = props.data.site.siteMetadata
//     const currentPage = props.data.wpPage
//     // const pageSeo = props.data.wpPage.seo
//     const allWpLocation = props.data.allWpLocation.edges
//     const allWpSolution = props.data.allWpSolution.edges
//     const allWpPartner = props.data.allWpPartner.edges
    

//     const contactpagelink = currentPage.locale.id === 'en_US' ? 'en' : currentPage.locale.id === 'ar' ? 'ar' : 'tr'

//     const clickHandler = (e) => { }

//     return (
//         <React.Fragment>

//             <Layout
//                 translations={currentPage.translated}
//                 lang={currentPage.locale.id}
//                 location={props.location}
//                 seoTitle={currentPage.seo.opengraphTitle
//                     ? currentPage.seo.opengraphTitle
//                     : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
//                 seosection={{
//                     seotitle: currentPage.seo.opengraphTitle
//                         ? currentPage.seo.opengraphTitle
//                         : decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
//                     seodescription: currentPage.seo.opengraphDescription
//                         ? currentPage.seo.opengraphDescription
//                         : "",
//                     openGraphURL: shareUrl,
//                     openGraphtitle: decode(currentPage.title).replace(
//                         /(<([^>]+)>)/gi,
//                         ""
//                     ),
//                     openGraphdescription: "",
//                     openGraphImage: "",
//                 }}
//             >
//                 {/* <GatsbySeo
//                     description={currentPage.seo.opengraphDescription
//                         ? currentPage.seo.opengraphDescription
//                         : null}
//                     openGraph={{
//                         url: shareUrl,
//                         title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")
//                     }} /> */}




//                 {/* <section className="main-slider-wrapper innnerslider">
//                     <div className="main-slider">
//                         <div
//                             className="item"
//                             style={{
//                                 backgroundImage: `url(${currentPage.featuredImage
//                                     ? currentPage.featuredImage.node.sourceUrl
//                                     : null})`
//                             }}>
//                             <img
//                                 src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png"
//                                 className="slider-transparent img-fluid slider-transparent-img"
//                                 alt="hero-transparent" />
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <div className="text">
//                                             <p className="heading wow fadeIn animated">{currentPage.AdditionalFields.topheading}</p>
//                                             <h1
//                                                 className="wow fadeIn"
//                                                 data-wow-delay="0.4s"
//                                                 dangerouslySetInnerHTML={{
//                                                     __html: currentPage.AdditionalFields.heading
//                                                 }} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section> */}

//                 <div className="about-us-main-block">
//                     <div
//                         onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
//                         dangerouslySetInnerHTML={{
//                             __html: currentPage.content
//                         }} />
//                 </div>

//                 <div className="map-wrapper">
//                     <div className="map-container">
//                         <div id="mapplic" className="mapplic-dark"></div>
//                     </div>
//                 </div>

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             {/* <div className="mapbx">
//                                 <div id="vmap"></div>
//                             </div> */}



//                         </div>
//                     </div>
//                 </div>

//                 <section className="our-presence-section section">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="text">
//                                     <h4 className="fadeInUp" data-wow-delay="0.1s">
//                                         {SiteTrans.locations_heading_lable[currentPage.locale.id]}
//                                     </h4>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">




//                                     {allWpLocation ?
//                                         allWpLocation.map((data, key) => (
//                                              <div className="col-6 col-lg-4">
//                                                 <div className="locatons-list" key={key}>
//                                                     <p className="title">{data.node.title}</p>
//                                                     <div className="link-wrapper">
//                                                         {SiteTrans.locations_email_lable[currentPage.locale.id]}:{" "}
//                                                         <a href={`mailto:${data.node.address_locations.email}`}>{data.node.address_locations.email}{" "}
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     : null
//                                     }








//                             {/* {allWpLocation && allWpLocation.filter(item => item.node.address_locations.region === "Africa") ?
//                                 <div className="col-12 col-md-4">
//                                     {
//                                         allWpLocation.filter(item => item.node.address_locations.region === "Africa").map((data, key) => (
//                                             <div className="locatons-list" key={key}>
//                                                 <p className="title">{data.node.title}</p>
//                                                 <div className="link-wrapper">
//                                                     {SiteTrans.locations_email_lable[currentPage.locale.id]}:{" "}
//                                                     <a href={`mailto:${data.node.address_locations.email}`}>{data.node.address_locations.email}{" "}
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                                 : null}

//                             {allWpLocation && allWpLocation.filter(item => item.node.address_locations.region === "Middle East") ?
//                                 <div className="col-12 col-md-4">
//                                     {
//                                         allWpLocation.filter(item => item.node.address_locations.region === "Middle East").map((data, key) => (
//                                             <div className="locatons-list" key={key}>
//                                                 <p className="title">{data.node.title}</p>
//                                                 <div className="link-wrapper">
//                                                     {SiteTrans.locations_email_lable[currentPage.locale.id]}:{" "}
//                                                     <a href={`mailto:${data.node.address_locations.email}`}>{data.node.address_locations.email}{" "}
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                                 : null}

//                             {allWpLocation && allWpLocation.filter(item => item.node.address_locations.region === "Asia Pacific") ?
//                                 <div className="col-12 col-md-4">
//                                     {
//                                         allWpLocation.filter(item => item.node.address_locations.region === "Asia Pacific").map((data, key) => (
//                                             <div className="locatons-list" key={key}>
//                                                 <p className="title">{data.node.title}</p>
//                                                 <div className="link-wrapper">
//                                                     {SiteTrans.locations_email_lable[currentPage.locale.id]}:{" "}
//                                                     <a href={`mailto:${data.node.address_locations.email}`}>{data.node.address_locations.email}{" "}
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                                 : null} */}




//                             {/* {allWpLocation.map(item => (
//                                 <div className="col-md-4 mb-md-5">
//                                     <h6>{item.node.title}</h6>
//                                     <p>
//                                         <strong>
//                                             <div
//                                                 dangerouslySetInnerHTML={{
//                                                     __html: item.node.address_locations.address
//                                                 }} /> {SiteTrans.locations_phone_lable[currentPage.locale.id]}:{" "}
//                                             <a className="phone-number" href={`tel:${item.node.address_locations.phone}`}>{item.node.address_locations.phone}{" "}
//                                             </a><br /> {SiteTrans.locations_email_lable[currentPage.locale.id]}:{" "}
//                                             <a href={`mailto:${item.node.address_locations.email}`}>{item.node.address_locations.email}{" "}
//                                             </a><br /> {SiteTrans.locations_url_lable[currentPage.locale.id]}:{" "}
//                                             <a href={item.node.address_locations.url}>{item.node.address_locations.url}{" "}
//                                             </a>
//                                         </strong>
//                                     </p>
//                                 </div>
//                             ))} */}
//                         </div>
//                         <div className="about-section-btn mb-4">
//                             <a href={`/${contactpagelink}/contact-us`}>
//                                 <span
//                                     dangerouslySetInnerHTML={{
//                                         __html: SiteTrans.locations_contact_us_button[currentPage.locale.id]
//                                     }}></span>
//                             </a>
//                         </div>
//                     </div>
//                 </section>


//                 <section className="our-market-partners section">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="text">
//                                     <h4 className="fadeInUp" data-wow-delay="0.2s">
//                                         {currentPage.commercialinmarketpartners.inMarketPartnersTitle}
//                                     </h4>
//                                     <p>{currentPage.commercialinmarketpartners.inMarketPartnersTitleContent}</p>
//                                 </div>
//                             </div>
//                         </div>


//                         <div class="row">

//                             {
//                                 currentPage.commercialinmarketpartners.subDistributionPartners ?
//                                     currentPage.commercialinmarketpartners.subDistributionPartners.map((data, key) => (
//                                             <div class="col-6 col-lg-3">
//                                                             <div class="partners-list-box">
//                                                             {
//                                                                 data.image?
//                                                                     <div class="partner-thumbnail-img">
//                                                                         <img class="img-fluid" src={data.image.localFile.url} alt="img" />
//                                                                     </div>
//                                                                     :
//                                                                     null
//                                                             }

                                                                
                                                            
//                                                             <div class="location"><span>Location: </span> {data.location}</div>
//                                                             <div class="email"><span>Email: </span> <a target="_blank" href={`mailto:${data.email}}`}>{data.email}</a></div>
//                                                             <div class="website">
//                                                                 <span>Website: </span><a target="_blank" href={data.website}>{data.website}</a>
//                                                             </div>
//                                                         </div>
//                                                         </div>
//                                         )
//                                     )
//                                 :
//                                 null
//                             }

 

//                         {/* {
//                            allWpPartner.map((data, key) => (
//                             <div class="col-6 col-lg-3">
//                                 <div class="partners-list-box">
//                                 {
//                                     data.node.PartnersData.partnerIcon?
//                                         <div class="partner-thumbnail-img">
//                                             <img class="img-fluid" src={data.node.PartnersData.partnerIcon.sourceUrl} alt="img" />
//                                         </div>
//                                         :
//                                         null
//                                 }

									
								 
// 								<div class="location"><span>Location: </span> {data.node.PartnersData.commercialLocation}</div>
// 								<div class="email"><span>Email: </span> <a href={`mailto:${data.node.PartnersData.commercialEmail}}`}>{data.node.PartnersData.commercialEmail}</a></div>
// 								<div class="website">{data.node.PartnersData.commercialWebsite}</div>
// 							</div>
//                             </div>
                                           
//                                         ))
//                                     } */}

							 
// 				        </div>


//                     </div>
//                 </section>




//                 {/***********************Solution Listing Section**********************/}
//                 <section className="what-we-do-solutions section about-solutions-container">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="mt-5">
//                                     <h4>{SiteTrans.solutions_section_heading[currentPage.locale.id]}</h4>
//                                 </div>
//                                 <SolutionsListingAbout
//                                     lang={currentPage.locale.id}
//                                     solution_id={currentPage.id}
//                                     allWpSolution={allWpSolution} />
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 {/***********************End Solution Listing Section**********************/}

//             </Layout>
//         </React.Fragment>
//     )
// }

// export default AboutUsPage

// export const AboutPageQuery = graphql`
//     query AboutPageQuery($id: String!, $langCode: ID!) {
//         wpPage(id: { eq: $id }) {
//             title
//             content
//             slug
//             id,
//             featuredImage {
//                 node {
//                   sourceUrl
//                 }
//               }
                   
//               seo {
//                 opengraphTitle
//                 opengraphDescription
//                   }
//             template {
//               templateName
//             }
//             locale {
//         id
//         locale
//       }
      
//     translated {
//       id
//       localizedWpmlUrl
//       locale {
//         id
//         locale
//       }
//       slug
//       title
//     }     

//     commercialinmarketpartners {
//       inMarketPartnersTitle
//       inMarketPartnersTitleContent
//       subDistributionPartners {
//         email
//         location
//         website
//         image {
//           title
//           localFile {
//             url
//           }
//         }
//       }
//     }

//   }
//   site {
//       id
//       siteMetadata {
//           title
//           subtitle
//       }
//   }
//   allWpLocation(filter: {locale: {id: {eq: $langCode} } }, sort: {menuOrder: ASC}) {
//     edges {
//       node {
//         address_locations {
//           region
//           address
//           email
//           phone
//           url                    
//         }
//         title
//       }
//     }
//   }
//   allWpSolution (sort: {menuOrder: ASC} filter: {locale: {id: {eq: $langCode} } }) {
//     edges {
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

//     allWpPartner(filter: {locale: {id: {eq: "en_US"}}}) {
//         edges {
//           node {
//             id
//             title
//             PartnersData {
//                 logoBackgroundStyle
                
//                 partnerIcon {
//                     sourceUrl
//                 }
//                 commercialEmail
//                 commercialLocation
//                 commercialWebsite
//             }
//           }
//         }
//     }
// }
// `



// //  AdditionalFields {
// //                 heading
// //                 topheading
// //               } 