import React, { useEffect, useState} from "react"
// import PostHeader from '../PostHeader/index'
import Footer from '../Footer/index'
// import { withPrefix } from "gatsby"
// import Favicon from "../../common/images/favicon.ico";
// import CookieConsent from "react-cookie-consent";
import { globalHistory } from "@reach/router"

const  Layout =({ children, breadcrumbs,translations, lang })=> {

    const [pathname, setPathname] = useState('')
  
    useEffect(() => handleComponentMounted(), []);
   useEffect(() => handleComponentUpdated()); 
    const handleComponentUpdated = () => {
        //Function.LoadingAllSliderScript()
        let path = globalHistory.location.pathname.split('/')

        setPathname(path[1])
        console.log('path==>', pathname)
    }

  const handleComponentMounted = () => {

  }

   
    return (
        <>
          
  
 
          <section  className="main-slider-wrapper innnerslider">
                    <div className="main-slider">
                      <div className="item page-404">
                        <img src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png" className="slider-transparent img-fluid slider-transparent-img" alt="hero-transparent"/>
                        <div className="container">
                          <div className="row">
                          <div className="col-md-12">
                          <div className="text">
                            {/* <p className="heading wow fadeIn animated">We’re sorry, the page you are looking for cannot be found.</p> */}
                            <h1 className="wow fadeIn" data-wow-delay="0.4s">404 Error</h1>
                          </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </section>


                <section>
                <div className="container page-404-container">
                <div className="row">
                 <div className="col-md-12">
                    <div className="text">
                 <h4>Here are some links you may find useful instead:</h4>
                 <ul>
                    <li><a href="/en/news">Our latest news</a></li>
                    <li><a href="/en/about-us">About Us</a></li>
                    {/* <li><a href="/">Our home page</a></li> */}
                    <li><a href="/en/contact-us">Contact Us</a></li>
                    </ul>
                    <p>Alternatively, you can use the search bar above to continue your journey, or explore our sitemap.</p>
                    </div>
                 </div>
                </div>
                </div>
                </section>
            

            <Footer translations={translations} lang={lang}/>
       </>
    )
}



export default Layout;