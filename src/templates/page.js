import React from 'react'
import { graphql } from "gatsby";
import { BlockRendererProvider,  BlockRenderer, getStyles, getClasses} from '@webdeveducation/wp-block-tools'
import Layout from '../components/layout';
// import Menu from "../components/Menu"
const Page = (props) => {
  // console.log("props",props)

  const currentPage = props.data.wpPage;

    console.log("currentPage",currentPage)
  return (
    <Layout>
 


<div dangerouslySetInnerHTML={{__html:currentPage.content}} />

    </Layout>
  )
}

export default Page



export const homePageQueryPage = graphql`
  query homePageQueryPage($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content      
      id 
    }
    wpMediaItem {
      gatsbyImage(width: 1000)
    }
  }
`;

