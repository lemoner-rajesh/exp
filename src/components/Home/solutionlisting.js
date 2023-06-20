import React from "react"
// import { useStaticQuery, graphql } from 'gatsby'
// import LangConfig from "../LangConfig/LangConfig.json";
import SiteTrans from "../LangConfig/siteTrans.json";



const SolutionsListing = (props) => {
  
const solutionslistingdata = props.allWpSolution;
console.log('solutionslistingdata', solutionslistingdata);

return (
    <section id="our-solutions" className="our-solutions-section section our-solution-block-style">
    <div className="our-solutions-icons">
        <div className="row">
            {solutionslistingdata.map(item =>   (
                <>
                    {props.solution_id!==item.node.id ? 
                    <div className="col-6 col-md-6 col-lg-4">
                        <div className="icons-container">
                            <div className="img-wrapper">
                             {item.node.our_solution_custom_fields.icon && item.node.our_solution_custom_fields.icon.sourceUrl ?
                            <img src={item.node.our_solution_custom_fields.icon!==null ? item.node.our_solution_custom_fields.icon.sourceUrl:''} alt="img" />
                            : null } 
                            </div>
                            <h6>{item.node.title}</h6>
                            <span></span>
                            <p>
                                {item.node.our_solution_custom_fields.shortDescription}
                            </p>
                            <a href={item.node.localizedWpmlUrl}>{SiteTrans.more_lable_txt[props.lang]}</a>
                        </div>
                    </div>                         
                    :null }
                </>                          
            ))}
        </div>
    </div>
    </section>
    )
}

export default SolutionsListing


