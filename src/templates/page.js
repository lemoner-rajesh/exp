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
    <Layout
    lang={currentPage.locale.id}
    >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className=''>
        <div className='row justify-content-between'>      
        <div className='col-md-8'>
        {/* <div dangerouslySetInnerHTML={{__html:currentPage.content}} /> */}

        {/* <BlockRendererProvider allBlocks={currentPage.blocks}/>  */}
        {/* <BlockRendererProvider allBlocks={props.pageContext.blocks}/> */}

        <BlockRendererProvider 
       allBlocks={currentPage.blocks}
       key={currentPage.id}
       renderComponent={(block) => {
        switch(block.name){
          case "core/image":{
            return (<div key={block.id} style={getStyles(block)} className={getClasses(block)}>    
                <div  style={{maxWidth:block.attributes.width}}  dangerouslySetInnerHTML={{__html:block.originalContent}} />
              {console.log("innerblocks", block)}
              <img src={block.attributes.url} />
            </div>)
          }
        }
       }}
       
       />  


        </div>
        <div className='col-md-3'>

          {currentPage.locale.id === "ar"?
          <div class="rtbx for-inq"><p>للاستفسارات الصحفية، انقر هنا، أو اتصل على 0906 448 4 971+ (توقيت الإمارات يسبق توقيت غرينتش بمقدر أربع ساعات). للاستفسارات العامة انقر هنا.</p></div>
          :<div class="rtbx for-inq"><p>For press inquiries <a href="mailto:inquiries@jameelhealth.com">click here</a>, or call +971 4 448 0906 (GMT +4 hours UAE). For public inquiries <a href="mailto:press@jameelhealth.com"> click here.</a></p></div>
        }
        
        

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
      locale {
        id
      }

    }
    wpMediaItem {
      gatsbyImage(width: 1000)
    }
  }
`;

