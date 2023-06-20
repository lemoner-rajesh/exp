
import React, {  useEffect,useState} from "react"
import Layout from '../components/layouts/index'
// import MainMenu from '../components/Mainmenu'
// import CustomPost from '../components/customPostItems'
// import { navigate, withPrefix } from "gatsby"
// import styled from 'styled-components';
// import SEO from "../components/seo"
import Function from "../lib/functions";
import $ from 'jquery';
// import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { decode } from 'html-entities';
import { graphql } from "gatsby"
//import './expose-wow'

const OurPeople = (props) => {

const [shareUrl, setShareUrl] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    const handleComponentMounted = () => {
        // console.log('our-people handleComponentMounted');
        $('header').removeClass("whitebgnav");
        if (typeof window !== 'undefined') {
            const getUrl = window.location.href
            // console.log('getUrl', getUrl)
            setShareUrl(getUrl)
           // Function.LoadingVideovisible()
       setTimeout(() => {
       $('header').removeClass("whitebgnav");
        $('h4.wow').removeClass('wow');
        //    Function.LoadingAllSliderScript();

       }, 3000);
     
    }
    

    }

    const handleComponentUpdated = () => {
        // console.log('our-people handleComponentUpdated');
        
        $('header').removeClass("whitebgnav");
        $('h4.wow').removeClass('wow');
        // var mapOptions = {
        //           // How zoomed in you want the map to start at (always required)
        //           zoom: 11,

        //           // The latitude and longitude to center the map (always required)
        //           center: new window.google.maps.LatLng(43.7384, 7.4246), // New York

        //           // How you would like to style the map. 
        //           // This is where you would paste any style found on Snazzy Maps.
        //           styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "invert_lightness": true }, { "saturation": 10 }, { "lightness": 30 }, { "gamma": 0.5 }, { "hue": "#435158" }] }]
        //       };

        //       // Get the HTML DOM element that will contain your map 
        //       // We are using a div with id="map" seen below in the <body>
        //       var mapElement = document.getElementById('map');
              
        //            console.log('map present');
                   
        //       // Create the Google Map using our element and options defined above
        //       var map = new window.google.maps.Map(mapElement, mapOptions);

        //       // Let's also add a marker while we're at itç
        //       var marker = new window.google.maps.Marker({
        //           position: new window.google.maps.LatLng(43.7384, 7.4246),
        //           map: map,
        //           title: 'Snazzy!'
        //       });
        Function.LoadingAllSliderScript()
    }
    
        // console.log(props.data);
        // const siteMetadata = props.data.site.siteMetadata;
     const currentPage = props.data.wpOurpeople;
     
     let seoImg = currentPage.featuredImage? currentPage.featuredImage.node.localFile.name + "-150x150" + currentPage.featuredImage.node.localFile.ext:"";
    let seoImgUrl = currentPage.featuredImage? currentPage.featuredImage.node.sourceUrl.replace(currentPage.featuredImage.node.localFile.base, seoImg):"";
  //  console.log('currentPage', siteMetadata.title)

    const clickHandler = (e) => {
        //e.preventDefault();
    //    let links = e.target.getAttribute("href");
        // let SearchInput = e.target.getAttribute("id")
       // console.log('pressRelease', links)
        // if (!links === null || !links == undefined){
        //     navigate(links)
        // }
            
       
    }


        return (
            <React.Fragment>                   
               <Layout translations={currentPage.translated} lang={currentPage.locale.id}  location={props.location} 
            //    seoTitle={currentPage.seo.opengraphTitle ? currentPage.seo.opengraphTitle : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")} 
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
                    description={currentPage.seo.opengraphDescription ? currentPage.seo.opengraphDescription: null}
                    openGraph={{
                        url: shareUrl,
                        title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
                        description: currentPage.content,
                        images: [
                            {
                                url: seoImgUrl,
                            }

                        ],
                        site_name: 'Jameel Health',
                    }}
                /> */}


                  <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                        __html: currentPage.content   }} />                       
                       
               </Layout>
               
            </React.Fragment>
                
            
                
                
           
        )
    
}

export default OurPeople

export const pageQuery = graphql`
    query currentPageQuery3($id: String!) {
        wpOurpeople(id: { eq: $id }) {
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
    
            
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
        ContactEn: wpPage(databaseId: {eq: 975}) {
            content
          }

          ContactAr: wpPage(databaseId: {eq: 1793}) {
            content
          }
    }
`

