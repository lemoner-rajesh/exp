// import { Link } from 'gatsby'
// import {AnchorLink} from "gatsby-plugin-anchor-links"
import React from "react"
// import {useStaticQuery, graphql} from 'gatsby'
// import Aljlogo from "../../common/images/logo-blank.png";
// import Menuclose from "../../common/images/menu-close.png";
// import $ from 'jquery';
// import LangConfig from "../LangConfig/LangConfig.json";
// import {lang} from 'moment';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
const SolutionsPartnersList = (props) => {

    // const Querydata = useStaticQuery(graphql` {   allWpPartner:allWpPartner {
    // edges {       node {         id         title         content
    // localizedWpmlUrl         featuredImage{           node{             sourceUrl
    //           }         }         PartnersData {           partnerThumbnail {
    //         sourceUrl           }           partnerIcon {             sourceUrl
    //         }         }       }     }   } }   `)

    const PartnersBySolutionList = props.PartnersBySolutionList;
    // console.log('PartnersBySolutionList', PartnersBySolutionList);
    // console.log('PartnersBySolutionList', PartnersBySolutionList); const
    // allWpPartner = Querydata.allWpPartner.edges;

    return (
        <div className="partners-slider partner-slider-1">
            {
                PartnersBySolutionList !== null & PartnersBySolutionList !== '' ?
                    PartnersBySolutionList.map((data) => {
                        return (
                            <div>
                                <div className="text wow fadeInUp">
                                    <a href={data.localizedWpmlUrl}>
                                        <div className={`other-partner-inner ${data.PartnersData.logoBackgroundStyle === 'grey' ? 'other-partner-innerbg' : 'white'}`}>
                                            <div className="row d-flex align-items-center no-gutters">
                                                <div className="col-6">
                                                    {data.PartnersData.partnerThumbnail.sourceUrl ?
                                                        <img className="img-fluid" alt="" title="" src={data.PartnersData.partnerThumbnail !== null ? data.PartnersData.partnerThumbnail.sourceUrl : ''} />
                                                        : null}


{/* <GatsbyImage  image={getImage(data.PartnersData.partnerThumbnail)} alt={"img"} />                                                                                     */}

                                                </div>
                                                <div className="col-6">
                                                    {data.PartnersData.partnerIcon.sourceUrl ?
                                                        <img className="img-fluid other-partner-logo" alt="" title="" src={data.PartnersData.partnerIcon !== null ? data.PartnersData.partnerIcon.sourceUrl : ''} />
                                                        : null}
{/* 
<GatsbyImage  image={getImage(data.PartnersData.partnerIcon)} alt={"img"} />    */}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    : null}
        </div>
    )
}

export default SolutionsPartnersList
