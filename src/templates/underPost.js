// import React, { useEffect } from "react"
// import Layout from '../components/layouts/index'
// import MainMenu from '../components/Mainmenu'
// import CustomPost from '../components/customPostItems'
// import { navigate } from "gatsby"
// import styled from 'styled-components';
// const PageTemplate = (props) => {

//     const FeaturedImage = styled.img`
//    max-width: 980px;
  

  
// `

//     useEffect(() => handleComponentMounted(), []);

//     const handleComponentMounted = () => {
//         // alert('dd')
//     }
//     // const siteMetadata = this.props.data.site.siteMetadata
//     const currentPage = props.data.wordpressPage
//     console.log('currentPage', currentPage)

//     const clickHandler = (e) => {

//         // e.preventDefault();
//         let links = e.target.getAttribute("href");
//         // let SearchInput = e.target.getAttribute("id")
//         console.log('pressRelease', links)
//         // if (!links === null || !links == undefined){
//         //     navigate(links)
//         // }


//     }


//     return (
//         <React.Fragment>
//             {/* <CustomPost/>     */}
//             <Layout>
//                 <div dangerouslySetInnerHTML={{
//                     __html: `<section id="home" class="main-slider-wrapper">
//                             <div class="main-slider">
//                                 <div class="item" style="background-image: url(${currentPage.featured_media.source_url})">
//                                     <img src=${currentPage.featured_media.source_url} class="slider-transparent img-fluid slider-transparent-img" />
//                                     <div class="container">
//                                         <div class="text">
//                                             <h4 class="wow fadeIn" data-wow-delay="0.4s">${currentPage.title}</h4>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>` }} />

//                 {/* <FeaturedImage src={currentPage.featured_media.source_url} />
//                     {!currentPage.featured_media == null ? <div>
//                         <FeaturedImage src={currentPage.featured_media.source_url} />
//                     </div>:null} */}


//                 <div onClick={clickHandler} dangerouslySetInnerHTML={{ __html: currentPage.content }} />

//             </Layout>
//         </React.Fragment>




//     )

// }

// export default PageTemplate

// export const pageQuery = graphql`
//     query currentPageQuery($id: String!) {
//         wordpressPage(id: { eq: $id }) {
//             title
//             content
//             slug
//             id,
//             template
//                  featured_media{
//         source_url
//      }
            
//         }
//         site {
//             id
//             siteMetadata {
//                 title
//                 subtitle
//             }
//         }
//     }
// `


