
import { Link } from "gatsby";
import React from "react"

import { useStaticQuery, graphql } from 'gatsby'
import LangConfig from "../LangConfig/LangConfig.json";
// import SiteTrans from "../LangConfig/siteTrans.json";

const FooterMenuLocation3 = (props) => {

const menuqry = useStaticQuery(graphql`
{
    menuEn:  wpMenu(name: {eq: "Footer Menu 3 EN"}) {
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

    menuAr: wpMenu(name: {eq: "Footer Menu 3 AR"}) {
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

      menuTr:  wpMenu(name: {eq: "Footer Menu 3 TR"}) {
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

// console.log('menulist', menulist);

    return (
      menulist!== null ? 
        menulist.menuItems.nodes.map(item => (
          item.parentId===null?                    
              <li>
                  {                           
                  <Link to={`/${LangConfig[props.lang]["slug"]}/${item.url.replace('/home','').replace('/','')}`} key={item.label} title={item.label}> {item.label} </Link>
                  }                       
              </li>                    
              :null
        ))
      :null
    )
    
}

export default FooterMenuLocation3
