// import { Link } from 'gatsby'
// import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'
// import Aljlogo from "../../common/images/logo-blank.png";
// import Menuclose from "../../common/images/menu-close.png";
// import $ from 'jquery';
// import LangConfig from "../LangConfig/LangConfig.json";
// import { lang } from 'moment';
import SiteTrans from "../LangConfig/siteTrans.json";

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { transDate } from '../../services/generic';

const NewsInsightsHome = (props) => {

  // const allWpPressreleaseNews = props.allWpPressreleaseNews;
  let allWpPressreleaseNews = props.allWpPressreleaseNews.filter((item) => item.node.press_release_acf.featured === true).slice(0,4);
  // const allWpPerspectiveNews = props.allWpPerspectiveNews;
  let allWpPerspectiveNews = props.allWpPerspectiveNews.filter((item) => item.node.press_release_acf.featured === true).slice(0,4);

  // console.log("allWpPressreleaseNews =>", allWpPressreleaseNews);
  // console.log("allWpPerspectiveNews =>", allWpPerspectiveNews);




const translateDate = (enmonth,lang) => {
        var trans =  transDate(enmonth,lang);
        return trans;
}



  return (
    <section className="insight-news-section" id="in">
      <div className="title">
        <div className="container">
          <div className="row">
            <div className="col-md-12">              
              <h3>
                {SiteTrans.news_insigts_section_heading[props.lang]}
              </h3>
            </div>
          </div>
        </div>
      </div>      
      <div className="insight-news home-insight-news">
        <div className="container">
          <div className="row  m-lg-0">
            <div className="alpha big flexslider col-lg-8 col-md-12 flex-slider-order-2">
              <ul className="slides slider-news-1-a">

                {allWpPressreleaseNews.map((data, index) => {
                  return (
                        <BackgroundImage
                                       Tag="li"
                                    {...convertToBgImage(getImage(data.node.featuredImage.node.gatsbyImage))}>
                 
                        <img
                          src="https://media.aljhealth.com/wp-content/uploads/2021/03/22061444/news-transparent.png"
                          alt="INSIGHT NEWS"
                          className="img-fluid"
                        />
               
                    </BackgroundImage>
                  );
                })}
              </ul>
            </div>
            <div className="descriptions col-lg-4 col-md-12 pr-0 pl-0 flex-slider-order-1">
              <article>
                <div className="text home-news-two">
                  <h6>{SiteTrans.news_heading[props.lang]}</h6>
                  
                  <div className="slider-news-2-a">
                    {allWpPressreleaseNews.map((data, index) => {
                      var date = data.node.date;
                      var arr1 = date.split(' ');
                      var arr2 = arr1[1].split(',');
                      var arr3 = arr1[2];
                      var month = arr1[0];
                      
                      var newsandinsightsdate = translateDate(month,props.lang)+' '+arr2[0]+', '+arr3;
                      
                      return (
                        <div className="animated-text">
                          <h5>
                            {data.node.press_release_acf.shortTitle}
                          </h5>
                          <p>{data.node.press_release_acf.summary}</p>
                          <div className="date">
                            <span className="date-numbers">
                              {/* {data.node.date} */}

                              {newsandinsightsdate}
                            </span>
                            &nbsp; | &nbsp;
                            <span>
                              {data.node.press_release_acf.location}
                            </span>
                          </div>
                          <a href={data.node.localizedWpmlUrl}>
                            {SiteTrans.read_more_txt[props.lang]}
                          </a>                          
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="links" dangerouslySetInnerHTML={{__html: SiteTrans.news_see_all_news[props.lang]}} />                
              </article>
            </div>
          </div>

          <div className="row home-news-slider-2-wrapper m-lg-0">
            <div className="alpha big flexslider col-lg-8 col-md-12">
              <ul className="slides slider-news-1-b">
                {allWpPerspectiveNews.map((data, index) => {
                  
                  return (
                    data.node.press_release_acf.featured === true && index < 4 ? 
                    // <li
                    //   style={{
                    //     backgroundImage: `url(${data.node.featuredImage.node.sourceUrl})`,
                    //   }}
                    // >
                  
                    
                        <BackgroundImage
                                       Tag="li"
                                    {...convertToBgImage(getImage(data.node.featuredImage.node.gatsbyImage))}>

                                   
               
                        <img
                          src="https://media.aljhealth.com/wp-content/uploads/2021/03/22061444/news-transparent.png"
                          alt="INSIGHT NEWS"
                          className="img-fluid"
                        />
                  
                    </BackgroundImage>
                    :null
                  );
                })}
              </ul>
            </div>
            <div className="descriptions col-lg-4 col-md-12 pr-0 pl-0">
              <article>
                <div className="text home-news-one">
                  <h6>{SiteTrans.insights_heading[props.lang]}</h6>
                  
                  <div className="slider-news-2-b">
                    {allWpPerspectiveNews.map((data, index) => {
                      var date = data.node.date;
                      var arr1 = date.split(' ');
                      var arr2 = arr1[1].split(',');
                      var arr3 = arr1[2];
                      var month = arr1[0];
                      
                      var newsandinsightsdate = translateDate(month,props.lang)+' '+arr2[0]+', '+arr3;
                      return (
                        data.node.press_release_acf.featured === true && index < 4 ? 
                        <div className="animated-text">
                          <h5>
                            {data.node.press_release_acf.shortTitle}
                          </h5>
                          <p>{data.node.press_release_acf.summary}</p>
                          <div className="date">
                            <span className="date-numbers">
                              {/* {data.node.date} */}
                              {newsandinsightsdate}
                            </span>
                            &nbsp; | &nbsp;
                            <span>
                              {data.node.press_release_acf.location}
                            </span>
                          </div>
                          <a href={data.node.localizedWpmlUrl}>
                            {SiteTrans.read_more_txt[props.lang]}
                          </a>                          
                        </div>
                        :null
                      );
                    })}
                  </div>
                </div>
                <div className="links" dangerouslySetInnerHTML={{__html: SiteTrans.insights_see_all_news[props.lang]}} />                                
              </article>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}
export default NewsInsightsHome



