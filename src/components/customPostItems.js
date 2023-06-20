// import React, { useEffect, useState } from "react"
// import { graphql, StaticQuery, Link } from 'gatsby';
// import styled from 'styled-components';
// import { navigate } from "gatsby"
// import gql from 'graphql-tag'
// import { Mutation, Query } from 'react-apollo';
// import FBImage from '../common/images/fb.png';
// import LinkedinImg from '../common/images/in.png';
// import Carousel from 'react-bootstrap/Carousel';
// import Moment from 'moment';
// import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
// const CustomPostItemsWrapper = styled.div`

//   display: flex;
//   justify-content: center;
// `

// const CustomPostItem = styled.div`
//   width: 500px;
//   border: 1px solid #efefef;
//   padding: 16px;
//   margin: 16px;
//   background-color:#ffffff;
//       align-self: center;
//     margin-left: 200px;

// `

// const CustomPostImage = styled.img`
//   max-width: 100%;   
// `

// const apolloHost = gql`
//     {
//   allWordpressWpCustompost {
//     edges {
//        node{
//          id
//          title
//          slug
//         excerpt
//         content
//         featured_media{
//         source_url
//      }
//       }
//     }
//   }
// }
// `

// const CustomPostItems = () => {
//   const [shareUrl, setShareUrl] = useState('https://www.alj.com/en/media-center/overview/')



// const _onclickNavigate = (slug)=>{
//    // navigate(`/${slug}`)

// }
//   useEffect(() => handleComponentMounted(), []);

//   const handleComponentMounted = () => {
//     if (typeof window !== 'undefined') {
//       let url = window.location.href
//       setShareUrl(url)
     

   
//     }

//   }


//     return (
//         <StaticQuery query={graphql`
//       {
//   allWordpressWpCustompost {
//     edges {
//        node{
//          id
//          title
//          slug
//         excerpt
//         content
//         date
//         featured_media{
//         source_url
//      }
//       }
//     }
//   }
// }
//       `} render={props => (
//           <CustomPostItemsWrapper >
//           <Carousel style={{ width: '80%', backgroundColor:'#616163' ,justifyContent:"center" ,alignItems:'center'}} className="full-width-md d-none d-md-block">
//           {props.allWordpressWpCustompost.edges ? props.allWordpressWpCustompost.edges.map(portfolioItem => (
        
//             <Carousel.Item>
//                   <CustomPostItem onClick={()=> _onclickNavigate(portfolioItem.node.slug)} key={portfolioItem.node.id}>
//                             <h2>{portfolioItem.node.title}</h2>
//                             <CustomPostImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
//                             <div style={{marginTop:10}} dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }} />
//                             <Link to={`/${portfolioItem.node.slug}`}>
//                                 Read more
//                             </Link>
             
//             <div style={{ height: 40,width:100 ,flexDirection:'row',justifyContent:'space-between'}}>  
//                <LinkedinShareButton style={{margin:10}}
//                   title={portfolioItem.node.title} 
//                   url={'https://www.alj.com/en/media-center/overview/'}
//                 ><img src={LinkedinImg}/>
//                 </LinkedinShareButton>
//                <FacebookShareButton
//                   quote={portfolioItem.node.title} 
//                   url={'https://www.alj.com/en/media-center/overview/'}
//                 ><img src={FBImage} />
//                 </FacebookShareButton>
//                 </div>
//                 <h4>Publish date : {Moment(portfolioItem.node.date).format('YYYY-MM-DD')}</h4>
//                         </CustomPostItem>
//             </Carousel.Item>
//                     )) : null}
//                </Carousel>

//           <Query query={apolloHost}>
//             {({data, loading ,error}) =>{
//               if(loading) return <span>loading..</span>
//               if (error) return <p>loading..</p>
//               console.log(data)
//               return <img src={data.edges[0].node.featured_media.source_url} alt="Thumbnail"/>
//             }}
//           </Query>
//                 </CustomPostItemsWrapper>)} />
//     )
// }

// export default CustomPostItems;