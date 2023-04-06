import React from 'react'
import { graphql } from "gatsby";
import { BlockRendererProvider,  BlockRenderer, getStyles, getClasses} from '@webdeveducation/wp-block-tools'
import Layout from '../components/layout';

// import Menu from "../components/Menu"
const Page = (props) => {
  console.log("props2",props)


  const currentPage = props.data.wpPressrelease;

    console.log("currentPage",currentPage)
  return (
    <Layout>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='container'>
        <div className='row justify-content-between'>      
        <div className='col-md-8'>
        {/* <div dangerouslySetInnerHTML={{__html:currentPage.content}} /> */}

        {/* <BlockRendererProvider allBlocks={currentPage.blocks}/>  */}
        {/* <BlockRendererProvider allBlocks={props.pageContext.blocks}/> */}

        <BlockRendererProvider 
       allBlocks={currentPage.blocks}
       key={currentPage.id}
       renderComponent={(block) => {
        // console.log("render component",block)
        switch(block.name){
          case "core/image":{
            return (<div key={block.id} style={getStyles(block)} className={getClasses(block)}>
              {/* <BlockRenderer blocks={block.innerBlocks} /> */}
                
            
                {/* <img src={block.attributes.url} width={block.attributes.width}  height={block.attributes.height}/> */}
                {/* dynamicContent */}
                {/* <BlockRenderer blocks={block.originalContent} /> */}
                <div  dangerouslySetInnerHTML={{__html:block.originalContent}} />
              {console.log("innerblocks", block)}
            </div>)
          }
        }
       }}
       
       />  

        </div>
        <div className='col-md-3'>
        <div class="rtbx for-inq"><p>For press inquiries <a href="mailto:inquiries@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:press@jameelhealth.com"> click here.</a></p></div>
        </div>
        </div>
      </div>

    

    </Layout>
  )
}

export default Page



export const homePageQueryPage = graphql`
  query homePageQueryPage($id: String!) {
    wpPressrelease(id: { eq: $id }) {
      title
      content      
      id 
      blocks
    }
    wpMediaItem {
      gatsbyImage(width: 1000)
    }
  }
`;

