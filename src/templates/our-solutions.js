import React, {  useEffect,useState} from "react"
import Layout from '../components/layouts/index'
import MainMenu from '../components/Mainmenu'
import CustomPost from '../components/customPostItems'
import { navigate, withPrefix } from "gatsby"
import styled from 'styled-components';
import SEO from "../components/seo"
import Function from "../lib/functions";
import $ from 'jquery';
// import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { decode } from 'html-entities';
import { graphql } from "gatsby"


const OurSolutions = (props) => {

    const [shareUrl, setShareUrl] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    useEffect(() => onPreRouteUpdate(),[]);
  
    const onPreRouteUpdate = () => {
      Function.LoadingAllSliderScript()
    }
    const handleComponentMounted = () => {
      setTimeout(() => {
        const getUrl = window.location.href           
        console.log('getUrl', getUrl)
        setShareUrl(getUrl)
        if(window.location.href.indexOf('press-release')!=-1 || window.location.href.indexOf('perspective')!=-1)
        {
          $('h4.wow').removeClass('wow');                    
        }
      }, 3000);   
    }

    const handleComponentUpdated = ()=>{        
        $('h4.wow').removeClass('wow');      
        var mapElement = document.getElementById('map');
        console.log('map present');
    }
    
    const siteMetadata = props.data.site.siteMetadata
    const currentPage = props.data.wpPage
    const pageSeo = props.data.wpPage.seo

    const clickHandler = (e) => {
    
    }


        return (
            <React.Fragment>     
                              
               <Layout translations={currentPage.translated} lang={currentPage.locale.id} location={props.location} 
              //  seoTitle={currentPage.seo.opengraphTitle ? currentPage.seo.opengraphTitle : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
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
                        
                    }}
                /> */}

                <section  class="main-slider-wrapper innnerslider">
                    <div class="main-slider">
                      <div class="item" style={{backgroundImage: `url(${currentPage.featuredImage?currentPage.featuredImage.node.sourceUrl:null})`}}>
                        <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" class="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent"/>
                        <div class="container">
                          <div class="text">
                            <h1 class="wow fadeIn" data-wow-delay="0.4s">{currentPage.title}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>
                  <div onClick={clickHandler} dangerouslySetInnerHTML={{
                    __html: currentPage.content   }} />             
               </Layout>
            </React.Fragment>
        )
}

export default OurSolutions

export const OurSolutionsQuery = graphql`
    query OurSolutionsQuery($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            content
            slug
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
    
    }
`

