// import React from 'react'
// import { graphql } from "gatsby";
// import { BlockRendererProvider,  BlockRenderer, getStyles, getClasses} from '@webdeveducation/wp-block-tools'
// // import Menu from "../components/Menu"
// const Page = (props) => {
//   // console.log("props",props)

//   const currentPage = props.data.wpPage;

//     console.log("currentPage",currentPage)
//   return (
//     <>
//       {/* <Menu /> */}
//       {/* <BlockRendererProvider allBlocks={props.pageContext.blocks}/> */}

//       {/* {
//         currentPage.blocks.map( data =>
//           <div dangerouslySetInnerHTML={{__html:data.dynamicContent}} />
//       )
//       } */}





// <div dangerouslySetInnerHTML={{__html:currentPage.content}} />
//        {/* <BlockRendererProvider 
//        allBlocks={currentPage.blocks}
//        key={currentPage.id}
//        renderComponent={(block) => {
//         // console.log("render component",block)
//         switch(block.name){
//           case "core/media-text":{
//             return (<div key={block.id} style={getStyles(block)} className={getClasses(block)}>
//               <BlockRenderer blocks={block.innerBlocks} />
//               {console.log("innerblocks", block)}
//             </div>)
//           }
//         }
//        }}
       
//        />  */}
//     </>
//   )
// }

// export default Page



// export const homePageQueryPage = graphql`
//   query homePageQueryPage($id: String!) {
//     wpPage(id: { eq: $id }) {
//       title
//       content      
//       id 
//     }
//     wpMediaItem {
//       gatsbyImage(width: 1000)
//     }
//   }
// `;

