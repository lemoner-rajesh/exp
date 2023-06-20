
import { Link } from 'gatsby'
import React, {useEffect} from "react"
import {useStaticQuery, graphql} from 'gatsby'


const Filter = (props) => {


// const data = useStaticQuery(graphql`
//    {
//         allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Primary menu"}}) {
//                     edges {
//                     node {
//                     name
//         items {
//                     title
//           object_slug
//         }
//       }
//     }
//   }
// }
//   `)

//   console.log('props.allWordpressWpApiMenusMenusItems', data)

return(
    <React.Fragment>   
        <div style={{height:200 ,flexDirection:'row'}} dangerouslySetInnerHTML={{ __html:
            `<div class="container row-wraper filteration-row scrollTopTarget" id="#scroll_news" style="flex-direction:column">
                <div class="row" >
                    <form  method="post" id="prospectiveReleaseForm" data-action="https://www.alj.com/en/media-center/press-release/">
                        <input type="hidden" id="_wpnonce" name="_wpnonce" value="8e2bbef16f"><input type="hidden" name="_wp_http_referer" value="/en/media-center/press-release/">                <div class="col-xs-12 col-md-5 date-wrapper">
                            <div class="col" class="input-group date" id="filterationDPicker1">
                                <input value="" name="from_date" type="text" class="form-control" id="news_from_date" placeholder="Date From dd/mm/yy">
                                    <span class="input-group-addon form-icon">
                                        <span class="glyphicon calendar-icon"></span>
                                    </span>
                    </div>
                                <div  class="col" class="input-group date" id="filterationDPicker2">
                                    <input value="" name="to_date" type="text" class="form-control rtl-input" id="news_to_date" placeholder="Date To dd/mm/yy">
                                        <span class="input-group-addon form-icon">
                                            <span class="glyphicon calendar-icon"></span>
                                        </span>
                    </div>
                                </div>

                                <div class="col" style="margin-top:10px" class="col-xs-12 col-md-3">
                                    <select name="business_sector" class="select2 select2-hidden-accessible" id="news_business_sector" tabindex="-1" aria-hidden="true">
                                        <option selected="" value="">Select Business Sector</option>
                                        <option data-value="health-overview" value="16660">Health</option>
                                        <option data-value="transportation" value="167">Transportation</option>
                                        <option data-value="engineering-manufacturing" value="176">Engineering and Manufacturing</option>
                                        <option data-value="financial-services" value="178">Financial Services</option>
                                        <option data-value="passenger-vehicles" value="169">Passenger Vehicles</option>
                                        <option data-value="solar-power-solutions" value="198">Solar Power Solutions</option>
                                        <option data-value="land-and-real-estate" value="180">Land and Real Estate</option>
                                        <option data-value="corporate-real-estate-development" value="3189">Corporate Real Estate Development</option>
                                        <option data-value="energy-and-environmental-services" value="193">Energy and Environmental Services</option>
                                        <option data-value="offsite-manufacturing" value="186">Off-Site Manufacturing</option>
                                        <option data-value="wind-power-solutions" value="200">Wind Power Solutions</option>
                                        <option data-value="commercial-vehicles-equipment" value="1057">Commercial Vehicles and Equipment</option>
                                        <option data-value="consumer-products" value="207">Consumer Products</option>
                                        <option data-value="water-environmental-solutions" value="202">Water and Environmental Solutions</option>
                                        <option data-value="residential-development" value="188">Residential Development</option>
                                        <option data-value="advertising-media" value="209">Advertising and Media</option>
                                        <option data-value="logistics" value="1064">Logistics</option>
                                        <option data-value="master-planned-communities" value="190">Master Planned Communities</option>
                                        <option data-value="expanded-vehicle-services" value="3296">Expanded Vehicle Services</option>
                                        <option data-value="community-jameel" value="473">Community Jameel</option>
                                        <option data-value="corporate" value="1900">Corporate</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 277.5px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-news_business_sector-container">
                                    <span style="margin-top:10px" class="select2-selection__rendered" id="select2-news_business_sector-container" title="Select Business Sector">Select Business Sector</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>

                                <div class="col" style="margin-top:10px" class="col-xs-12 col-md-3">
                                    <div class="input-group">
                                        <input value="" name="news_keyword" type="text" class="form-control search-input" placeholder="Enter keyword or phrase" id="news_keyword">
                                            <!--<a class="input-group-addon btn-addon btn btn-default" id="news_filter" data-post-type="news" >
                                                Go                        </a>-->
                        <button type="submit" class="input-group-addon btn-addon btn btn-default" id="news_filter_post_back" data-post-type="news">
                                                Go                        </button>
                    </div>
                                    </div>
            </form>
                                <div   class="col-xs-12 col-md-1 clear-row">
                                    <div class="input-group">
                                        <input type="button" class="btn btn-default btn-clear" value="Clear">
                </div>
                                    </div>
                                </div>
                            </div> ` }} />  
    
                     
        </React.Fragment>   

)
    }

export default Filter

