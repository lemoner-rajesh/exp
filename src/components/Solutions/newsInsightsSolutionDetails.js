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

const NewsInsightsSolutionDetails = (props) => {
  const allWpPressreleaseNews = props.allWpPressreleaseNews;
  const allWpPerspectiveNews = props.allWpPerspectiveNews;
  return (
    <div>

      <section className="latest-news-insights">
          <div className="container-fluid">
              <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 p-md-0">
                            {allWpPressreleaseNews!==null && allWpPressreleaseNews!=='' ? 
                              <button className="news_btn">
                                {SiteTrans.news_heading[props.lang]}
                              </button>
                            :null}
                            {allWpPerspectiveNews!==null && allWpPerspectiveNews!=='' ? 
                            <button className="insights_btn tabs-inactive">
                              {SiteTrans.insights_heading[props.lang]}
                            </button>
                            :null}
                            </div>
                            </div>
                        </div>
                      <div className="news_block">
                        <div className="container-fluid latest-news-container responsive slider">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12">
                                    {console.log('allWpPressreleaseNews', allWpPressreleaseNews)}
                                    <div className="partners-slider latest-news-slider-1">
                                      {
                                        allWpPressreleaseNews!== null && allWpPressreleaseNews!== '' ? 
                                            allWpPressreleaseNews.map((data) => {
                                              return (
                                                <div>
                                                  <div className="text">
                                                      <div className="latest-news-inner">
                                                          <div className="row">
                                                            <div className="col-md-12">
                                                              <img src={data.featuredImage!==null ? data.featuredImage.node.sourceUrl : ''} className="img-fluid" alt="" title=""/>
                                                            </div>
                                                            <div className="col-md-12">
                                                              <div className="latest-news-title">
                                                                <h4>{data.press_release_acf.shortTitle}</h4>
                                                                {/* <p>{data.press_release_acf.summary}</p> */}


                                                               <p>{data.press_release_acf.summary.length > 220 ?
                                                   `${data.press_release_acf.summary.substring(0, 220)}...` : data.press_release_acf.summary
                                                    }</p>

                                                                <div className="latest-news-date">
                                                                  {data.date}  |   {data.press_release_acf.location}
                                                                </div>
                                                                <div className="latest-news-link">
                                                                  <a href={data.localizedWpmlUrl}>
                                                                    {SiteTrans.read_more_txt[props.lang]}
                                                                  </a>                                                                                      
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                  </div>
                                              </div>
                                              );
                                            })
                                          :null } 
                                      </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="container-fluid latest-news-insights-pagenation-container">
                              <div className="container">
                                <div className="latest-news-controller d-flex justify-content-center">
                                  <div className="latest-news-partner-prev-1"><img src="https://media.aljhealth.com/wp-content/uploads/2022/06/09071208/prev-arrow-white.png" alt=" down prev-arrow " /></div>
                                  <div className="latest-news-partner-next-1"><img src="https://media.aljhealth.com/wp-content/uploads/2022/06/09071207/next-arrow-white.png" alt=" down next-arrow" /></div>
                                    <div className="latest-new-all-link" dangerouslySetInnerHTML={{__html: SiteTrans.news_see_all_news[props.lang]}}>
                                    </div>                                                                        
                                </div>
                              </div>
                            </div>
                        </div>
                      
                        <div className="insights_block">
                          <div className="container-fluid latest-insights-container responsive slider">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-12">
                                  <div className="partners-slider latest-insights-slider-1">
                                    {
                                      allWpPerspectiveNews!==null && allWpPerspectiveNews!=='' ? 
                                        allWpPerspectiveNews.map((data) => {
                                          return (
                                            <div>
                                              <div className="text">
                                                  <div className="latest-news-inner">
                                                  <div className="row">
                                                  <div className="col-md-12">
                                                    <img src={data.featuredImage!==null ? data.featuredImage.node.sourceUrl : ''} className="img-fluid" alt="" title=""/>
                                                  </div>

                                                <div className="col-md-12">
                                                  <div className="latest-news-title">
                                                  <h4>{data.press_release_acf.shortTitle}</h4>
                                                  {/* <p>{data.press_release_acf.summary}</p> */}
                                                  <p>
                                                  {data.press_release_acf.summary.length > 220 ?
                                                   `${data.press_release_acf.summary.substring(0, 220)}...` : data.press_release_acf.summary
                                                    }
                                                  </p>
                                                  <div className="latest-news-date">
                                                    {data.date}   |   {data.press_release_acf.location}
                                                  </div>
                                                  <div className="latest-news-link">
                                                  <a href={data.localizedWpmlUrl}>
                                                    {SiteTrans.read_more_txt[props.lang]}
                                                  </a> 
                                                  </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                              </div>
                                          </div>
                                          );
                                        })
                                      : null }
                                  </div>
                              </div>
                              </div>
                              </div>
                              </div>
                              <div className="container-fluid latest-news-insights-pagenation-container">
                                <div className="container">
                                  <div className="latest-news-controller d-flex justify-content-center">
                                    <div className="latest-insights-partner-prev-1"><img src="https://media.aljhealth.com/wp-content/uploads/2022/06/09071208/prev-arrow-white.png" alt=" down prev-arrow " /></div>
                                    <div className="latest-insights-partner-next-1"><img src="https://media.aljhealth.com/wp-content/uploads/2022/06/09071207/next-arrow-white.png" alt=" down next-arrow" /></div>
                                      <div className="latest-new-all-link" dangerouslySetInnerHTML={{__html: SiteTrans.insights_see_all_news[props.lang]}} >
                                     
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </section>
  </div>
  )
}
export default NewsInsightsSolutionDetails


