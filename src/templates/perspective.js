// import {Helmet} from "react-helmet";
import React, {useEffect, useState} from "react";
import Layout from '../components/layouts/index';
// import MainMenu from '../components/Mainmenu';
// import CustomPost from '../components/customPostItems';
import {graphql, Link} from "gatsby";
// import styled from 'styled-components';
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from 'jquery';
import SharePrint from '../common/images/share-print.png';
import ShareMail from '../common/images/share-mail.png';
import ShareTwitter from '../common/images/share-twitter.png';
import ShareWhatsapp from '../common/images/share-whatsapp.png';
import ShareLinkedin from '../common/images/share-linkedin.png';
import ShareFb from '../common/images/share-fb.png';
import ShareCopy from '../common/images/share-copy.png';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    // PinterestShareButton
} from "react-share";
import {CopyToClipboard} from 'react-copy-to-clipboard';
// import {GatsbySeo} from 'gatsby-plugin-next-seo';
import {decode} from 'html-entities';


const Perspective = (props) => { 
    const [shareUrl,
        setShareUrl] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    const handleComponentMounted = () => {
        if (typeof window !== 'undefined') {
            const getUrl = window.location.href 
            console.log('getUrl', getUrl)
            setShareUrl(getUrl)
            setTimeout(() => {
                $('.pagescrollbar').show();
                $('h1.wow').removeClass('wow');
            }, 3000);
        }
    }
    const handleComponentUpdated = () => {
        $('.pagescrollbar').show();
        $('h4.wow').removeClass('wow');
        Function.LoadingAllSliderScript()
    }

    const currentPage = props.data.wpPerspective
    const location = currentPage.press_release_acf.location
    const relatedNews = props.data.allWpPerspective.edges;
    // let seoImg = currentPage.featuredImage && currentPage.featuredImage.node ? currentPage.featuredImage.node.localFile.name + "-150x150" + currentPage.featuredImage.node.localFile.ext : null;
    // let seoImgUrl = seoImg ? currentPage.featuredImage.node.sourceUrl.replace(currentPage.featuredImage.node.localFile.base, seoImg) : '';
    const clickHandler = (e) => {}
    const _copyUrl = () => {
        document.getElementById("linkcopiedStories").classList.add("on");
        setTimeout(function () {
            document.getElementById("linkcopiedStories").classList.remove("on");
        }, 3000);
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
                        description: currentPage.press_release_acf.summary,
                        images: [
                            {
                                url: seoImgUrl,
                            }
                        ],
                        site_name: 'Jameel Health',
                    }}
                /> */}
                <section className="contentbx pt150 newsinner">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-8">
                                <h1 className="wow fadeIn animated" dangerouslySetInnerHTML={{ __html: currentPage.title }} />
                                <div className="row">
                                    <div className="col-md datebx"> <img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img" /> <span className="en-text">{currentPage.date}</span>  | {location} </div>
                                    <div className="col-md-auto share-options">
                                        <a target="_blank" rel="noreferrer" href="#/" className="printbtn"><img src={SharePrint} alt="img" /></a>
                                        <EmailShareButton openShareDialogOnClick={true} onClick={e => e.preventDefault()} subject={currentPage.title} url={'https://aljhealth.com/'}>
                                            <img style={{ margin: 10 }} src={ShareMail} alt="img" />
                                        </EmailShareButton>

                                        <CopyToClipboard className="copybtn" text={shareUrl}>
                                            <img onClick={() => _copyUrl()} onKeyDown={() => _copyUrl()} role="presentation" style={{ margin: 10 }} src={ShareCopy} alt="img" />
                                        </CopyToClipboard>

                                        <WhatsappShareButton title={currentPage.title} url={shareUrl}>
                                            <img style={{ margin: 10 }} src={ShareWhatsapp} alt="img" />
                                        </WhatsappShareButton>
                                        <LinkedinShareButton title={currentPage.title} url={shareUrl}>
                                            <img style={{ margin: 10 }} src={ShareLinkedin} alt="img" />
                                        </LinkedinShareButton>
                                        <FacebookShareButton quote={currentPage.title} url={shareUrl}>
                                            <img style={{ margin: 10 }} src={ShareFb} alt="img" />
                                        </FacebookShareButton>
                                        <TwitterShareButton title={currentPage.title} url={shareUrl}>
                                            <img style={{ margin: 10 }} src={ShareTwitter} alt="img" />
                                        </TwitterShareButton>
                                        <div id="linkcopiedStories">Link Copied!</div>
                                    </div>
                                </div>
                                <div className="cover-img">
                                    {currentPage.featuredImage && currentPage.featuredImage.node && currentPage.featuredImage.node.sourceUrl ?
                                        <img className="img-fluid" src={currentPage.featuredImage !== null ? currentPage.featuredImage.node.sourceUrl : ''} alt={currentPage.featuredImage ? currentPage.featuredImage.node.altText : ''} />
                                        : null}
                                    {/* <img src={currentPage.featuredImage ? currentPage.featuredImage.node.sourceUrl : ''}
                                        alt={currentPage.featuredImage ? currentPage.featuredImage.node.altText : ''} /> */}
                                    {currentPage.featuredImage && currentPage.featuredImage.node && currentPage.featuredImage.node.caption ? <span dangerouslySetInnerHTML={{ __html: currentPage.featuredImage.node.caption }} /> : null}
                                </div>
                                <div className="newscontent"
                                    onClick={clickHandler} onKeyDown={clickHandler} role="presentation" dangerouslySetInnerHTML={{
                                        __html: currentPage.content
                                    }}>
                                </div>

                                <div className="relarticle">
                                    {
                                        currentPage.locale.id === "en_US" ?
                                        <h4>Related Articles</h4>
                                        : currentPage.locale.id === "ar" ?
                                        <h4>مقالات ذات صلة</h4>
                                        : <h4>Related Articles</h4>
                                    }

                                    <div className="related-slider">
                                        {relatedNews.map((item, i) =>
                                            <div className="item" key={1}>
                                                <a href={item.node.localizedWpmlUrl} className="imgbx">
                                                    {item.node.featuredImage.node.sourceUrl ?
                                                        <img className="img-fluid" src={item.node.featuredImage !== null ? item.node.featuredImage.node.sourceUrl : ''} alt={item.node.featuredImage ? item.node.featuredImage.node.altText : ''} />
                                                        : null}
                                                    {/* <img src={item.node.featuredImage ? item.node.featuredImage.node.sourceUrl : ''} alt={item.node.featuredImage ? item.node.featuredImage.node.altText : ''} /> */}
                                                </a>
                                                <h4>{item.node.press_release_acf.shortTitle}</h4>
                                                <p>{item.node.press_release_acf.summary}</p>
                                                {
                                                    currentPage.locale.id === "en_US" ?
                                                    <Link to={item.node.localizedWpmlUrl} className="readmore">Read more &gt;</Link>
                                                    : currentPage.locale.id === "ar" ?
                                                    <Link to={item.node.localizedWpmlUrl} className="readmore">إقرأ المزيد &gt;</Link>
                                                    :
                                                    <Link to={item.node.localizedWpmlUrl} className="readmore">Read more &gt;</Link>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="rtbx for-inq">
                                    {
                                        currentPage.locale.id === "en_US" ?
                                            <p>For press inquiries <Link to="mailto:inquiries@jameelhealth.com">click here</Link>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <Link to="mailto:press@jameelhealth.com"> click here.</Link></p>
                                            : currentPage.locale.id === "ar" ?
                                            <p>للاتصالات الإعلامية، والاستفسارات الصحفية، يرجى التواصل معنا على <Link to="mailto:media@alj.ae">media@alj.ae</Link>، أو الاتصال بنا على رقم 0906 448 4 971+  (توقيت الإمارات العربية المتحدة يسبق توقيت غرينتش بمقدار 4 ساعات)</p>
                                            : <p>For press inquiries <Link to="mailto:inquiries@jameelhealth.com">click here</Link>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <Link to="mailto:press@jameelhealth.com"> click here.</Link></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default Perspective

export const pageQuery = graphql `
    query currentPageQueryallWpPerspective2($id: String!, $lang: ID!) {
        wpPerspective(id: { eq: $id }) {
            title
            content
            slug
            date(formatString: "MMMM D, Y")
            id
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
            seo {
                opengraphTitle
                opengraphDescription
            }
            press_release_acf {
                location
                summary
            } 
        }
 
        ContactEn: wpPage(databaseId: {eq: 975}) {
            content
        }
        ContactAr: wpPage(databaseId: {eq: 1793}) {
            content
        }

        allWpPerspective(filter: {locale: {id: {eq: $lang}},id: {ne: $id}}, limit: 6, sort: {fields: date, order: DESC}) {
            edges {
                node {
                    id
                    title
                    localizedWpmlUrl
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                    press_release_acf {
                        summary
                        shortTitle
                    }
                }
            }
        }
    }
`
