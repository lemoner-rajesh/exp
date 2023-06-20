import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/404Layout/index'

const NotFoundPage = (props) => {
  console.log('404 props',props.location.pathname);
  // const lang = props.location.pathname.indexOf('/ar/')!==-1?"ar":"en_US";
  const lang = props.location.pathname.indexOf('/ar/')!==-1 ? "ar"
  : props.location.pathname.indexOf('/en/')!==-1 ? "en_US"
  : "tr_TR"
  // const langSlug = props.location.pathname.indexOf('/ar/')!==-1?"ar":"en";
  const langSlug = props.location.pathname.indexOf('/ar/')!==-1 ? "ar"
  : props.location.pathname.indexOf('/en/')!==-1 ? "en_US"
  : "tr_TR"
  
  const trtranslations = [];
  return(
  <Layout lang={lang} translations={trtranslations}  location={props.location}>
  <section className="contentbx sitemapbx pt150">
    <div className="container">
      <div className="not-found-title">
        <h1>404 Error <span>We’re sorry, the page you are looking for cannot be found.</span></h1>
      </div>
      <h4>Here are some links you may find useful instead:</h4>
      <ul>
        {/* <li>Our&nbsp;latest&nbsp;<Link to="/press-release/abdul-latif-jameel-energy-supports-development-of-second-utility-scale-battery-storage-project-in-uk">News</Link></li> */}
        <li>Our&nbsp; <Link to={`/${langSlug}/`} >Home Page</Link></li>
      </ul>
 
	</div>
  </section>
  </Layout>
)
}

export default NotFoundPage