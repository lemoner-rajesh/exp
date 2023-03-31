import React from 'react'
import { graphql } from "gatsby";
import { BlockRendererProvider,  BlockRenderer, getStyles, getClasses} from '@webdeveducation/wp-block-tools'
import Layout from '../components/layout';
import Img1 from "../common/images/fonz1.png"
import Img2 from "../common/images/fonz2.png"
import Img3 from "../common/images/fonz3.png"
// import Menu from "../components/Menu"
const Page = (props) => {
  // console.log("props",props)

  const currentPage = props.data.wpPage;

    console.log("currentPage",currentPage)
  return (
    <Layout>
 


<div className='sliderWrapper'>
 <div className="slider">
  <div><img src={Img1} /></div>
  <div><img src={Img2} /></div>
  <div><img src={Img3} /></div>
  <div><img src={Img1} /></div>
  <div><img src={Img2} /></div>
  <div><img src={Img3} /></div>
  <div><img src={Img1} /></div>
  <div><img src={Img2} /></div>
  <div><img src={Img3} /></div>
</div>
</div>
			

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

