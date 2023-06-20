import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
import {graphql, Link} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';
import shareWhatsappImage from "../common/images/share-whatsapp.png";
import shareLinkedinImage from "../common/images/share-linkedin.png";
import shareFBImage from "../common/images/share-fb.png";
import shareTwitterImage from "../common/images/share-twitter.png";
import shareMailImage from "../common/images/share-mail.png";
import shareImage from "../common/images/share.png";
import { transDate } from '../services/generic';
const PageTemplate = (props) => {
    let allnews = props.data.allWpPerspective.edges;
    // let featuredNews = allnews.filter((item, index) => item.node.press_release_acf.featured === true && index <= 3);
    // let featuredNewsM4 = allnews.filter((item, index) => item.node.press_release_acf.featured === true && index >= 4);
    let featuredNews = allnews.filter((item) => item.node.press_release_acf.featured === true).slice(0,4);
    let featuredNewsM4 = allnews.filter((item, index) => item.node.press_release_acf.featured === true).slice(4);
    let nonfeaturedNewsAll = allnews.filter((item) => item.node.press_release_acf.featured !== true);
    // let nonfeaturedNews = [
    //     ...featuredNewsM4,
    //     ...nonfeaturedNewsAll
    // ]
const translateDate = (enmonth,lang) => {
        var trans =  transDate(enmonth,lang);
        return trans;
}
    let nonfeaturedNews  = allnews.filter(function(array_el){
   return featuredNews.filter(function(anotherOne_el){
      return anotherOne_el.node.id == array_el.node.id;
   }).length == 0
    });


    const [shareUrl,
        setShareUrl] = useState('')
    const [pageNo,
        setPageNo] = useState(1);
    const [pageSize,
        setPageSize] = useState(6);
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
    const currentPage = props.data.wpPageOne
    const clickHandler = (e) => {}
    function shareWhatsapp(shareUrl, title) {
        var mainURL = window.location.origin + shareUrl; //window.location.origin + shareUrl;
        window.open(`https://wa.me/?text=` + encodeURIComponent(mainURL));
    }
    function shareFB(shareUrl, title) {
        var mainURL = window.location.origin + shareUrl; //window.location.origin + shareUrl;
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(mainURL) + "&t=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
    function shareTwitter(shareUrl, title) {
        var mainURL = window.location.origin + shareUrl; //window.location.origin + shareUrl;
        window.open("https://twitter.com/share?url=" + encodeURIComponent(mainURL) + "&text=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
    function shareLinkedin(shareUrl, title) {
        var mainURL = window.location.origin + shareUrl; //window.location.origin + shareUrl;
        window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(mainURL) + "&title=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
    function shareEmail(shareUrl, title) {
        var mainURL = window.location.origin + shareUrl; //window.location.origin + shareUrl;
        window.open("mailto:?subject=" + title + "&body= Check out this article " + encodeURIComponent(mainURL), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
    }
    function setPage() {
        let pageNumber = pageNo + 1;
        setPageNo(pageNumber);
    }

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
                <div onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                    __html: currentPage.content
                }} />
                
                <div id="featuredNewsContainerGatsby">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-9 newslistingleft">
                                <div className="featuredwrapper">
                                    {
                                        currentPage.locale.id === "en_US" ?
                                            <h2>Featured</h2>
                                            : currentPage.locale.id === "ar" ?
                                                <h2>مميز</h2>
                                                :
                                                <h2>Featured</h2>
                                    }
                                    <div className="row">
                                        {featuredNews.map((item, i) =>{
                                            var date = item.node.date;
                                                        var arr1 = date.split(' ');
                                                        var arr2 = arr1[1].split(',');
                                                        var arr3 = arr1[2];
                                                        var month = arr1[0];
                                                        
                                                        var newsandinsightsdate = translateDate(month,currentPage.locale.id)+' '+arr2[0]+', '+arr3;
                                            return(<div className="col-sm-6">
                                                <div className="newsperbx">
                                                    <div className="imgbx">
                                                        <Link to={item.node.localizedWpmlUrl} className="imgbx">
                                                            {item.node.featuredImage.node.sourceUrl ?
                                                                <img src={item.node.featuredImage !== null ? item.node.featuredImage.node.sourceUrl : ''} alt={item.node.featuredImage ? item.node.featuredImage.node.altText : ''} />
                                                                : null}
                                                        </Link>
                                                    </div>
                                                    <div className="textbx">
                                                        <div className="timings">
                                                            <p><img className="servicon" src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img" />
                                                                <span className="date-numbers">{newsandinsightsdate}</span>  | {item.node.press_release_acf.location}
                                                            </p>
                                                        </div>
                                                        {item.node.press_release_acf ?
                                                        <Link to={item.node.localizedWpmlUrl}><h4>{item.node.press_release_acf.shortTitle}</h4></Link>
                                                        :null}
                                                        <p>{item.node.press_release_acf.summary}</p>
                                                        <div className="row bottomrow">
                                                            <div className="col-5">
                                                                {
                                                                    currentPage.locale.id === "en_US" ?
                                                                        <Link className="readmore" to={item.node.localizedWpmlUrl}>Read More</Link>
                                                                        : currentPage.locale.id === "en_US" ?
                                                                            <Link className="readmore" to={item.node.localizedWpmlUrl}> إقرأ المزيد</Link>
                                                                            :
                                                                            <Link className="readmore" to={item.node.localizedWpmlUrl}>Read More</Link>
                                                                }
                                                            </div>
                                                            <div className="col-7">
                                                                <ul className="socialbx">
                                                                    <li>
                                                                        <Link to="#/" className="sicons" onClick={() => { shareEmail(item.node.localizedWpmlUrl, item.node.title) }}>
                                                                            <img src={shareMailImage} alt="img" />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#/" className="sicons shareclick"><img src={shareImage} alt="img" /></Link>
                                                                        <div className="aljshare">
                                                                            <div className="sharebox">
                                                                                <div className="shareinner">
                                                                                    <Link to="#/" className="icon" onClick={() => { shareWhatsapp(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareWhatsappImage} alt="img" /></Link>
                                                                                    <Link to="#/" className="icon" onClick={() => { shareLinkedin(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareLinkedinImage} alt="img" /></Link>
                                                                                    <Link to="#/" className="icon" onClick={() => { shareFB(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareFBImage} alt="img" /></Link>
                                                                                    <Link to="#/" className="icon" onClick={() => { shareTwitter(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareTwitterImage} alt="img" /> </Link>
                                                                                    {/* <a href="#/" className="icon" onClick={()=>{shareWhatsapp(item.node.localizedWpmlUrl, item.node.title)}}> <img src="/static/0726ab62796c8467b20533a62fdcce89/share-whatsapp.png" alt="img"/></a>
                                                                                    <a href="#/" className="icon" onClick={()=>{shareLinkedin(item.node.localizedWpmlUrl, item.node.title)}}> <img src="/static/5f0ad9461b5d3b47ba3b77ad6b6a0662/share-linkedin.png" alt="img"/></a>
                                                                                    <a href="#/" className="icon" onClick={()=>{shareFB(item.node.localizedWpmlUrl, item.node.title)}}> <img src="/static/1ff762866488ebe40601481fd62e5891/share-fb.png" alt="img" /></a>
                                                                                    <a href="#/" className="icon" onClick={()=>{shareTwitter(item.node.localizedWpmlUrl, item.node.title)}}> <img src="/static/138bfb96ac3e4b5677373965845a519b/share-twitter.png" alt="img" /> </a> */}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>);
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 newsright position-sticky">
                                <div className="d-none d-md-block">
                                    {
                                        currentPage.locale.id === "en_US" ?
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">For press inquiries <a href="mailto:press@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:inquiries@jameelhealth.com"> click here.</a></div>
                                                </div>
                                            </section> :
                                            currentPage.locale.id === "ar" ?
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">
                                                        <p>للاستفسارات الصحفية، انقر هنا، أو اتصل على 0906 448 4 971+ (توقيت الإمارات يسبق توقيت غرينتش بمقدر أربع ساعات). للاستفسارات العامة انقر هنا.</p>
                                                    </div>
                                                </div>
                                            </section> :
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">For press inquiries <a href="mailto:press@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:inquiries@jameelhealth.com"> click here.</a></div>
                                                </div>
                                            </section>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-9 newslistingleft">
                                <div>
                                    <div className="row">
                                        {nonfeaturedNews.filter((itm, index) => index < (pageNo * pageSize)).map((item, i) =>{
                                            var date = item.node.date;
                                                        var arr1 = date.split(' ');
                                                        var arr2 = arr1[1].split(',');
                                                        var arr3 = arr1[2];
                                                        var month = arr1[0];
                                                        
                                                        var newsandinsightsdate = translateDate(month,currentPage.locale.id)+' '+arr2[0]+', '+arr3;
                                            return(<div className='col-sm-6 newsBox'>
                                                <div className="newsperbx">
                                                    <div className="imgbx">
                                                        <a href={item.node.localizedWpmlUrl} className="imgbx">
                                                            
                                                            {item.node.featuredImage && item.node.featuredImage.node.sourceUrl ?
                                                                <img alt={item.node.featuredImage ? item.node.featuredImage.node.altText : ''} src={item.node.featuredImage !== null ? item.node.featuredImage.node.sourceUrl : ''} />
                                                                : null}
                                                            
                                                        </a>
                                                    </div>
                                                    <div className="textbx">
                                                        <div className="timings">
                                                            {
                                                                item.node.date && item.node.press_release_acf ?
                                                                <p><img className="servicon" src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img" />
                                                                    <span className="date-numbers">{newsandinsightsdate}</span>  | {item.node.press_release_acf.location}
                                                                </p>
                                                                :null
                                                            }
                                                        </div>
                                                        {item.node.press_release_acf?
                                                            <Link to={item.node.localizedWpmlUrl}><h4>{item.node.press_release_acf.shortTitle}</h4></Link>
                                                            : null
                                                        }
                                                        <p>{item.node.press_release_acf.summary}</p>
                                                        <div className="row bottomrow">
                                                            <div className="col-5">
                                                                {currentPage.locale.id === "en_US" ?
                                                                    <Link className="readmore" to={item.node.localizedWpmlUrl}>Read More</Link>
                                                                    : currentPage.locale.id === "ar" ?
                                                                    <Link className="readmore" to={item.node.localizedWpmlUrl}> إقرأ المزيد</Link>
                                                                    : <Link className="readmore" to={item.node.localizedWpmlUrl}>Read More</Link>
                                                                }
                                                            </div>
                                                            <div className="col-7">
                                                                <ul className="socialbx">
                                                                    <li>
                                                                        <Link to="#/" className="sicons" onClick={() => { shareEmail(item.node.localizedWpmlUrl, item.node.title) }}>
                                                                            <img src={shareMailImage} alt="img" />
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="#/" className="sicons shareclick"><img src={shareImage} alt="img" /></Link>
                                                                        <div className="aljshare">
                                                                            <div className="sharebox">
                                                                                <div className="shareinner">
                                                                                    <Link go="#/" className="icon" onClick={() => { shareWhatsapp(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareWhatsappImage} alt="img" /></Link>
                                                                                    <Link go="#/" className="icon" onClick={() => { shareLinkedin(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareLinkedinImage} alt="img" /></Link>
                                                                                    <Link go="#/" className="icon" onClick={() => { shareFB(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareFBImage} alt="img" /></Link>
                                                                                    <Link go="#/" className="icon" onClick={() => { shareTwitter(item.node.localizedWpmlUrl, item.node.title) }}> <img src={shareTwitterImage} alt="img" /> </Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>);
                                            })}

                                    </div>
                                    <div className="loaderbx" id="loader" style={{ display: "none" }}>
                                        <div className="loader loadmore"></div>
                                    </div>
                                    {nonfeaturedNews.length > (pageNo * pageSize) ?
                                        <div className="loadmorewrap" id="showMoreContainer">
                                            <button className="ajaxloadmorebutton" onClick={() => { setPage() }}>{currentPage.locale.id === "en_US" ? "Show More" : "إظهار المزيد"}</button>
                                        </div>
                                        : null}
                                </div>
                            </div>
                            <div className="col-lg-3 newsright position-sticky">
                                <div className="d-block d-md-none">
                                    {
                                        currentPage.locale.id === "en_US" ?
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">For press inquiries <a href="mailto:press@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:inquiries@jameelhealth.com"> click here.</a></div>
                                                </div>
                                            </section> :
                                            currentPage.locale.id === "ar" ?
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">
                                                        <p>للاستفسارات الصحفية، انقر هنا، أو اتصل على 0906 448 4 971+ (توقيت الإمارات يسبق توقيت غرينتش بمقدر أربع ساعات). للاستفسارات العامة انقر هنا.</p>
                                                    </div>
                                                </div>
                                            </section> :
                                            <section id="text-2" className="widget widget_text">
                                                <div className="textwidget">
                                                    <div className="rtbx for-inq">For press inquiries <a href="mailto:press@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:inquiries@jameelhealth.com"> click here.</a></div>
                                                </div>
                                            </section>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default PageTemplate

export const pageQuery = graphql `
    query insightsListing($id: String!, $langCode: ID!) {
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
        allWpPerspective(filter: {locale: {id: {eq: $langCode}}}, sort: {fields: date, order: DESC}) {
            edges {
                node {
                    title
                    id
                    localizedWpmlUrl
                    slug
                    date(formatString: "MMMM D, Y")
                    featuredImage {
                        node {
                            sourceUrl
                        }
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
                    press_release_acf {
                        summary
                        shortTitle
                        featured
                        location
                    }
                }
            }
        }

    }
`
