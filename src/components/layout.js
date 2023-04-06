import React, {useEffect, useState} from "react"
import { Link, useStaticQuery, graphql, Script } from "gatsby"
import parse from "html-react-parser"
// import Logo from "../common/images/logo.png"
// import loadScripts from 'load-scripts';
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ isHomePage, children }) => {


  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)


//   useEffect(() => handleComponentMounted(), []);
  
//   const handleComponentMounted = () => {
// loadScripts('/default.js').then(() => {
//   console.log(window.Foo);
// });
// }

const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <Script src="/main.js" onLoad={() => setLoaded(true)} />
      {loaded && <Script src="/default.js" />}
 
    
      <Header />
      <div className="container">
      <main>{children}</main>
      </div>

    <Footer />
        

    </div>
  )
}

export default Layout
