import React, {useEffect, useState} from "react";
// import {useStaticQuery, graphql} from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import SiteTrans from "../LangConfig/siteTrans.json"
const PartnersbySolutions = (props) => {

console.log("frererrrere")
console.log(props)

    const allWpSolution = props.allWpSolution
    const allWpPartner = props.allWpPartner
    const lang = props.lang
    const [partners,
        setPartners] = useState(allWpPartner)

    useEffect(() => {}, [])

    const filterPosts = (value) => {
        let getpartners
        // let partners = allWpPartner
        getpartners = value !== "All" ? allWpPartner.filter(partner => partner.node.PartnersData.parentSolution.find(solution => solution.title === value)) : allWpPartner;
        setPartners(getpartners)

        console.log("getpartners",getpartners)
    }
    
    return (
        <section>
            <div className="container-fluid partner-listing-container section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {console.log('posts after', partners)}
                            <h4>{SiteTrans.select_partner_label[lang]}</h4>
                            <div className="partner-checkbox">
                                <input id="radio-all" class="radio-custom" name="radio-group" defaultChecked type="radio" value="all" onChange={e => { filterPosts("All") }} />
                                <label for="radio-all" class="radio-custom-label">{SiteTrans.all_txt[lang]}</label>
                            </div>
                            {allWpSolution.map(item => (
                                <div className="partner-checkbox">
                                    <input id={`radio-${item.node.title}`} class="radio-custom" name="radio-group" type="radio" onChange={e => { filterPosts(item.node.title) }} />
                                    <label for={`radio-${item.node.title}`} class="radio-custom-label">{item.node.title}</label>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {partners.map(data => (
                                    <div className="col-md-6 mb-4">
                                        <a href={data.node.localizedWpmlUrl}>
                                            <div className="partner-listing-box">
                                                <div className="row d-flex align-items-center no-gutters">
                                                    <div className="col-6">
                                                        <div className="partner-thumbnail-img">
                                                            {data.node.PartnersData.partnerThumbnail.sourceUrl ?
                                                            <img className="img-fluid" src={data.node.PartnersData.partnerThumbnail !== null ? data.node.PartnersData.partnerThumbnail.sourceUrl : ''} alt="img" />
                                                            : null }
                                                        </div>

                                        {/* <GatsbyImage  image={getImage(data.node.PartnersData.partnerThumbnail)} alt={"img"} />                                                                                     */}
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="partner-list-logo">
                                                        {data.node.PartnersData.partnerIcon.sourceUrl ?
                                                            <img className="img-fluid" src={data.node.PartnersData.verticalPartnerLogo !== null ? data.node.PartnersData.verticalPartnerLogo.localFile.url : ''} alt="img" />
                                                            : null}
                                                        </div>
{/* <GatsbyImage  image={getImage(data.node.PartnersData.partnerIcon)} alt={"img"} />    */}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersbySolutions
