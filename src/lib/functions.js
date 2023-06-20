//import { useRouter } from 'next/router'
//import {hostUrl } from './apiHelper'
//var hostUrl = "https://dev-alh-health.pantheonsite.io/"
const commonFunctions = {
  


  LoadingAllSliderScript : () => {
  
      const script = document.createElement("script");
    script.src = `/test.js`;
    script.async = true;
    document.body.appendChild(script);
   
 }

}

export default commonFunctions