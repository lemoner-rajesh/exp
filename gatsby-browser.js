import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/context/ApolloContext';


import "./src/common/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";
import "./src/common/css/animate.css";
import "./src/common/css/owl.carousel.css";
import "./src/common/css/slick.css";
import "./src/common/css/jquery-ui.css";
import "./src/common/css/jqvmap.min.css";
import "./src/common/css/maplic.css";
import "./src/common/css/default.css";
import "./src/common/css/news-slider.css";
import "./src/common/css/media.css";
import "./src/common/css/default-ar.scss";


// export const onPreRouteUpdate = ({ location, prevLocation }) => {
//     // console.log("location name",location.pathname);
//     if(location.pathname.indexOf('/ar') !== -1){
//         require("./src/common/css/default-ar.scss");
//     }
//   }
  

// export  const onInitialClientRender = () => {
//     window.addEventListener('popstate', () =>
//       window.location.href = window.location.href
//     )
//   }
  

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
);

