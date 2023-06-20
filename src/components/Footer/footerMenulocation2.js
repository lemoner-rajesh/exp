
import { Link } from "gatsby";
import React from "react"

import { useStaticQuery, graphql } from 'gatsby'
import LangConfig from "../LangConfig/LangConfig.json";
// import SiteTrans from "../LangConfig/siteTrans.json";

const FooterMenuLocation2 = (props) => {

const menuqry = useStaticQuery(graphql`
{
    allSolutionEN: allWpSolution(filter: {locale: {id: {eq: "en_US"}}}, sort: {menuOrder: ASC}) {
      edges {
        node {
          title
          slug
          uri
          id
          locale {
            id
            locale
          }
          localizedWpmlUrl
        }
      }
    }
    allSolutionAR: allWpSolution(filter: {locale: {id: {eq: "ar"}}}, sort: {menuOrder: ASC}) {
      edges {
        node {
          title
          slug
          uri
          id
          locale {
            id
            locale
          }
          localizedWpmlUrl
        }
      }
    }
    allSolutionTR: allWpSolution(filter: {locale: {id: {eq: "tr"}}}, sort: {menuOrder: ASC}) {
      edges {
        node {
          title
          slug
          uri
          id
          locale {
            id
            locale
          }
          localizedWpmlUrl
        }
      }
    }
    menuEn:  wpMenu(name: {eq: "Footer Menu 2 EN"}) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            databaseId
          }
        }
    }

    menuAr: wpMenu(name: {eq: "Footer Menu 2 AR"}) {
      menuItems {
        nodes {
          label
          parentId
          url
          id
          databaseId
        }
      }
    }

      menuTr:  wpMenu(name: {eq: "Footer Menu 2 TR"}) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            databaseId
          }
        }
    }
}
  `)

const menulist = props.lang==="en_US" ? menuqry.menuEn
      : props.lang==="ar" ? menuqry.menuAr
      : menuqry.menuEn


const allsolution = props.lang==="ar" ? menuqry.allSolutionAR
      : props.lang==="tr" ? menuqry.allSolutionTR
      : menuqry.allSolutionEN

      // const allsolution = menuqry.allSolution;

      console.log('allsolution',allsolution)
// console.log('menulist', menulist);

    return (
      // menulist!== null ? 
      //   menulist.menuItems.nodes.map(item => (
      //     item.parentId===null?                    
      //         <li>
      //             {                           
      //             <Link to={`/${LangConfig[props.lang]["slug"]}/${item.url.replace('/home','').replace('/','')}`} key={item.label} title={item.label}> {item.label} </Link>
      //             }                       
      //         </li>                    
      //         :null
      //   ))
      // :null

       allsolution!== null ? 
        allsolution.edges.map(item => (                  
              <li>
                  {                           
                  <Link to={`/${LangConfig[props.lang]["slug"]}/${item.node.uri.replace('/home','').replace('/','')}`} key={item.node.title} title={item.node.title}> {item.node.title} </Link>
                  }                       
              </li>    
        ))
      :null


    )
    
}
export default FooterMenuLocation2