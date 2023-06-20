import { Helmet } from "react-helmet"
import React, { useEffect, useState } from "react"
import Header from '../Header/index'
// import PostHeader from '../PostHeader/index'
import Footer from '../Footer/index'
// import { withPrefix } from "gatsby"
import Favicon from "../../common/images/favicon.ico";
import CookieConsent from "react-cookie-consent";
import { globalHistory } from "@reach/router";
// import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";

var load = require('load-script');
const Layout = ({ location, children, breadcrumbs, translations, lang, seoTitle, seosection }) => {
    // useEffect(async ()=>{
    //     await loadScript('/main.js', { inBody: true });
    //     await loadScript('/default.js', { inBody: true });
    //  }, [])
    const [pathname, setPathname] = useState('')
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    const handleComponentUpdated = () => {
        let path = globalHistory.location.pathname.split('/')
        var tempPath = path[2]
        // console.log('layout header pathname :',tempPath)
        if ((tempPath === 'insights' || tempPath === "news" || tempPath === "in-the-news") && path[3] !== '') {
            setPathname(path[2])
        }
        document.querySelectorAll('title[data-rh="true"]').forEach(element => {
            element.remove();
            // console.log( 'element.textContent', element.textContent);
            // if (element.textContent == "") element.remove() // remove title if its empty
        });
    }
    // https://maps.googleapis.com/maps/api/js?key=AIzaSyDycGYmqlx_zaN1kO0uRN13S6uLEFzk4Ik&callback=initMap
    const handleComponentMounted = () => {
        load('/default.js', function (err, script) {
            if (err) {
                console.log('error loading default script');
            } else {
                // console.log(script.src);// Prints 'foo'.js' 
            }
        })
        document.querySelectorAll("title").forEach(element => {
            if (element.textContent === "") element.remove() // remove title if its empty
        });
        if (typeof window !== 'undefined') {
            window.initMap = function () {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,
                    // The latitude and longitude to center the map (always required)
                    center: new window.google.maps.LatLng(43.7384, 7.4246), // New York
                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "invert_lightness": true }, { "saturation": 10 }, { "lightness": 30 }, { "gamma": 0.5 }, { "hue": "#435158" }] }]
                };
                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');
                //if(mapElement)   {
                // Create the Google Map using our element and options defined above
                var map = new window.google.maps.Map(mapElement, mapOptions);
                // Let's also add a marker while we're at itç
                var marker = new window.google.maps.Marker({
                    position: new window.google.maps.LatLng(43.7384, 7.4246),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        }

        // Sentry.init({
        //   dsn: "https://050d9b0859974084a0158e4b1fd089a0@o4504338663079936.ingest.sentry.io/4504338669371392",
        //   integrations: [new BrowserTracing()],

        //   // Set tracesSampleRate to 1.0 to capture 100%
        //   // of transactions for performance monitoring.
        //   // We recommend adjusting this value in production
        //   tracesSampleRate: 1.0,
        // });
    }

    return (
        <>
            {(pathname) ? <Header cls="whitebgnav" translations={translations} lang={lang} /> : <Header translations={translations} lang={lang} />}
            <main>{children}</main>
            {
                lang === "ar"
                    ?
                    <CookieConsent location="bottom" buttonText="إغلاق" cookieName="myAwesomeCookieName2" style={{ background: "#45c5ba", }}
                        buttonStyle={{ top: 10, background: "#0f1d2c", color: "#fff", fontWeight: '400', fontSize: "13px", textTransform: "uppercase", borderRadius: 4, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
                        expires={150} >
                        <div className="col-sm-12" style={{ fontWeight: 'lighter' }}>
                            <p>إذا رغبت في الاستمرار بتصفح الموقع، سيتم وضع ملفات تعريف الارتباط المؤقتة على جهاز الكمبيوترالخاص بك لتعزيز تجربتك أثناء استخدام الموقع. إذا كنت لا ترغب في ذلك يرجى الخروج من الموقع الآن أو النقر على "إغلاق" للمتابعة.</p>
                        </div>
                    </CookieConsent>
                    :
                    <CookieConsent location="bottom" buttonText="Close" cookieName="myAwesomeCookieName2" style={{ background: "#45c5ba", }}
                        buttonStyle={{ top: 10, background: "#0f1d2c", color: "#fff", fontWeight: '400', fontSize: "13px", textTransform: "uppercase", borderRadius: 4, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
                        expires={150} >
                        <div className="col-sm-12" style={{ fontWeight: 'lighter' }}>
                            <p>Should you choose to proceed in accessing this website, non-permanent cookies will be placed on your
                                computer to enhance your experience whilst using the site. If you do not wish to have such non-permanent
                                cookies placed on your computer please exit the site now. Alternatively, please click CLOSE to proceed.</p>
                        </div>
                    </CookieConsent>
            }
            <Footer translations={translations} lang={lang} />
            <Helmet>
                <meta charset="UTF-8" />
                {/* <title>{seoTitle}</title> */}
                <title>
                    {seosection && seosection.seotitle
                        ? seosection.seotitle
                        : "Jameel Health"}
                </title>

                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <meta
                    name="title"
                    content={
                        seosection && seosection.seotitle
                            ? seosection.seotitle
                            : "Jameel Health"
                    }
                />
                <meta
                    name="description"
                    content={
                        seosection && seosection.seodescription
                            ? seosection.seodescription
                            : "Accelerating access adding value We are committed to adding real, tangible value, not only to all our business partner relationships but also to the communities in which we operate. As a solutions partner, we strongly believe in success through service – working together with stakeholders; taking a structured, systemic, focus to delivering on our promises. With this approach, we are accelerating access to modern medical care for more people in more places and for those that need it most."
                    }
                />
                <meta name="keywords" content="" />
                <link rel="profile" href="https://gmpg.org/xfn/11" />

                <meta
                    property="og:title"
                    content={
                        seosection && seosection.openGraphtitle
                            ? seosection.openGraphtitle
                            : "Jameel Health"
                    }
                />
                <meta
                    property="og:description"
                    content={
                        seosection && seosection.openGraphdescription
                            ? seosection.openGraphdescription
                            : "Accelerating access adding value We are committed to adding real, tangible value, not only to all our business partner relationships but also to the communities in which we operate. As a solutions partner, we strongly believe in success through service – working together with stakeholders; taking a structured, systemic, focus to delivering on our promises. With this approach, we are accelerating access to modern medical care for more people in more places and for those that need it most."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        seosection && seosection.openGraphImage
                            ? seosection.openGraphImage
                            : "https://media.aljhealth.com/wp-content/uploads/2021/04/01062650/metaimage.jpg"
                    }
                />
                <meta
                    property="og:url"
                    content={
                        seosection && seosection.openGraphURL ? seosection.openGraphURL : ""
                    }
                />
                <link rel="shortcut icon" href={Favicon} />
                <script
                    async
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(c,l,a,r,i,t,y){

                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};

                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;

                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);

                        })(window, document, "clarity", "script", "4ykp5i1u2i");
                        `,
                    }}
                />

                {
                    lang === "ar" ? <body className="arabic" /> : <body className="english" />
                }
            </Helmet>
            <script src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`} async defer></script>
        </>
    )
}
export default Layout;