// import { Link } from "gatsby";
import React, { useState } from "react";

import { useStaticQuery, graphql } from "gatsby";
import FooterMenuLocation1 from "./footerMenuLocation1";
import OurSolutionsFooterNav from "./footerMenulocation2";
import FooterMenulocation3 from "./footerMenulocation3";
import FooterMenulocation4 from "./footerMenulocation4";
import FooterMenulocation5 from "./footerMenulocation5";
import FooterMenulocation6 from "./footerMenulocation6";
import GooglePlayImg from "../../common/images/google-play.png";
import AppStoreImg from "../../common/images/app-store.png";
import LogoWhite from "../../common/images/logo-white.png";
import LogoWhiteAR from "../../common/images/logo-white-ar.png";
// import ScrollUpfrom from "../../common/images/scroll-up.png";
// import LangConfig from "../LangConfig/LangConfig.json";
import { Link } from "gatsby";
import SiteTrans from "../LangConfig/siteTrans.json";
// import { data } from "jquery";
const Footer = (props) => {
    const [formState, setFormState] = useState({
        fname: "",
        lname: "",
        email: "",
        ageConsent: false,
        dataConsent: false,
        status: false,
        statusMsg: "",
        error: false,
        errorMsg: "",
    });
    const [errorState, setErrorState] = useState({
        fname: "",
        lname: "",
        email: "",
        ageConsent: false,
        dataConsent: false,
        status: false,
        statusMsg: "",
        error: false,
        errorMsg: "",
    });

    const footerSubmission = () => {
        let err = false;
        // let errMsg = "";
        let emailErr,
            fnameErr,
            lnameErr,
            ageConsentErr,
            dataConsentErr;
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (formState.fname === "") {
            err = true;
            fnameErr = true;
        }
        if (formState.lname === "") {
            err = true;
            lnameErr = true;
        }
        if (!re.test(formState.email)) {
            err = true;
            emailErr = true;
        }
        if (formState.ageConsent === false) {
            err = true;
            ageConsentErr = "Please confirm the age consent";
        }
        if (formState.dataConsent === false) {
            err = true;
            dataConsentErr = "Please confirm the data consent";
        }

        if (err) {
            setErrorState({
                ...errorState,
                error: true,
                fname: fnameErr,
                lname: lnameErr,
                email: emailErr,
                ageConsent: ageConsentErr,
                dataConsent: ageConsentErr,
            });
        } else {
            var axios = require("axios");
            var mainJson = {
                formEndpoint:
                    "https://solutioncms.aljhealth.com/wp-json/contact-form-7/v1/contact-forms/7228/feedback",
                project: "Jameel Health",
                formName: "Newsletter Subscription",
                slackUrl: "",
                formData: {
                    email: formState.email,
                    firstname: formState.fname,
                    lastname: formState.lname,
                    ageConsent: formState.ageConsent,
                    dataConsent: formState.dataConsent,
                },
            };

            var data = JSON.stringify(mainJson);
            // console.log(data);
            var config = {
                method: "post",
                url: "https://qb2zboq3ih.execute-api.eu-west-2.amazonaws.com/prod/sqs",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    // recaptchaInstance.reset();
                    setFormState({
                        ...formState,
                        fname: "",
                        lname: "",
                        email: "",
                        ageConsent: false,
                        dataConsent: false,
                        status: true,
                        statusMsg: "Thank you for subscribing to our newsletter",
                        error: false,
                        errorMsg: "",
                    });
                    setErrorState({
                        fname: false,
                        lname: false,
                        email: false,
                        ageConsent: false,
                        dataConsent: false,
                        status: false,
                        statusMsg: "",
                        error: false,
                        errorMsg: "",
                    });
                })
                .catch(function (error) {
                    // console.log(error);
                    // recaptchaInstance.reset();
                    setFormState({
                        ...formState,

                        status: false,
                        statusMsg: "",
                        error: true,
                        errorMsg:
                            "There was an error saving your request. Please try again later.",
                    });
                    setErrorState({
                        fname: false,
                        lname: false,
                        email: false,
                        ageConsent: false,
                        dataConsent: false,
                        status: false,
                        statusMsg: "",
                        error: false,
                        errorMsg: "",
                    });
                });
        }
    };

    const menuqry = useStaticQuery(graphql`
    {
      menuEn: wpMenu(name: { eq: "footer" }) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            databaseId
          }
        }
      }

      menuAr: wpMenu(name: { eq: "Footer AR" }) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            databaseId
          }
        }
      }
      menuTr: wpMenu(name: { eq: "Footer TR" }) {
        menuItems {
          nodes {
            label
            parentId
            url
            id
            databaseId
          }
        }
      }
    }
  `);

    const menulist =
        props.lang === "en_US"
            ? menuqry.menuEn
            : props.lang === "ar"
                ? menuqry.menuAr
                : menuqry.menuEn;

    const fnameErr1 = errorState.fname === true ? "validations-error" : "noerror";
    const lnameErr1 = errorState.lname === true ? "validations-error" : "noerror";
    const emailErr1 = errorState.email === true ? "validations-error" : "noerror";

    return (
        <section className="black-bg grey-bg footer-section">
            <div className="container">

                <div className="row">
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_1[props.lang]}
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <FooterMenuLocation1 lang={props.lang} />
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_2[props.lang]}
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <OurSolutionsFooterNav lang={props.lang} />
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_3[props.lang]}
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <FooterMenulocation3 lang={props.lang} />
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_4[props.lang]}
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <FooterMenulocation4 lang={props.lang} />
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_5[props.lang]}
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <FooterMenulocation5 lang={props.lang} />
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-md">
                        <div className="footer-nav-title">
                            <Link to="/contact-us">{SiteTrans.footer_heading_6[props.lang]}</Link>
                        </div>
                        <div className="text">
                            <ul className="sc">
                                <FooterMenulocation6 lang={props.lang} />
                                {/* <li><a href="https://www.alj.com/" target="_blank" rel="noreferrer">alj.com</a></li>
                                <li><a href="https://www.communityjameel.org/" target="_blank" rel="noreferrer">communityjameel.org</a></li> */}
                                <li>{SiteTrans.footer_emergency_email[props.lang]} <a href="mailto:safety@jameelhealth.com">safety@jameelhealth.com</a> or call <a href="tel:+97144480905">+971 4 448 0905</a></li>
                                {/* <li><a href="mailto:safety@jameelhealth.com">{SiteTrans.footer_emergency_email[props.lang]}</a></li>
                  <li><a href="tel:+97144480905">{SiteTrans.footer_emergency_number[props.lang]}</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="footer-nav-title">
                            {SiteTrans.footer_heading_7[props.lang]}  <br />
                            <span>{SiteTrans.footer_heading_7_add[props.lang]}</span>

                        </div>
                        <div className="text follow-link">
                            <ul className="d-flex">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/abdul-latif-jameel-health/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="https://media.aljhealth.com/wp-content/uploads/2022/06/02125847/in-color.png"
                                            alt="Linkedin"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.facebook.com/Abdul-Latif-Jameel-Health-102832304828768"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="https://media.aljhealth.com/wp-content/uploads/2022/06/02125845/fb-color.png"
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.instagram.com/abdul_latif_jameel_health/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="https://media.aljhealth.com/wp-content/uploads/2022/06/02125849/insta-color.png"
                                            alt="instagram"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UCV532ta8BXEs7ie91LhCNCA"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src="https://media.aljhealth.com/wp-content/uploads/2022/06/02125841/yt-color.png"
                                            alt="Youtube"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="donwload-apps">
                            <p>{SiteTrans.footer_download_app_txt[props.lang]}</p>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.abdullatifjameel.news"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={GooglePlayImg}
                                    className="img-fluid"
                                    alt="Google Play Store Logo"
                                />
                            </a>

                            <a
                                href="https://apps.apple.com/us/app/alj-insights/id1455193439"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={AppStoreImg}
                                    className="img-fluid"
                                    alt="Apple Store Logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="newsletter-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="newsletter">
                                <h6>{SiteTrans.footer_newsletter_heading[props.lang]}</h6>
                                <div className="row no-gutters">
                                    <div className="col-12 col-md">
                                        <input
                                            type="text"
                                            className={`form-control first-name ${fnameErr1}`}
                                            placeholder={
                                                SiteTrans.footer_form_firstname[props.lang]
                                            }
                                            name="firstName"
                                            value={formState.fname}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    fname: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-md">
                                        <input
                                            type="text"
                                            className={`form-control last-name ${lnameErr1}`}
                                            placeholder={SiteTrans.footer_form_lastname[props.lang]}
                                            name="lastName"
                                            value={formState.lname}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    lname: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-md">
                                        <input
                                            type="text"
                                            className={`form-control email-address ${emailErr1}`}
                                            placeholder={SiteTrans.footer_form_email[props.lang]}
                                            name="email"
                                            value={formState.email}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    email: e.target.value,
                                                })
                                            }
                                        />

                                        {errorState.email ? (
                                            <span>{errorState.email}</span>
                                        ) : null}
                                    </div>
                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        onClick={footerSubmission}
                                    >
                                        {SiteTrans.footer_form_submitbtn[props.lang]}{" "}
                                    </button>
                                </div>

                                <div className="newsltrcheck">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="ageConsent"
                                                checked={formState.ageConsent}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        ageConsent: !formState.ageConsent,
                                                    })
                                                }
                                            />
                                            {SiteTrans.footer_confirm_message[props.lang]}

                                            {errorState.ageConsent ? (
                                                <span className="checkbox-error">
                                                    {errorState.ageConsent}
                                                </span>
                                            ) : null}
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="dataConsent"
                                                checked={formState.dataConsent}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        dataConsent: !formState.dataConsent,
                                                    })
                                                }
                                            />
                                            {SiteTrans.footer_consent_message[props.lang]}

                                            {errorState.dataConsent ? (
                                                <span className="checkbox-error">
                                                    {errorState.dataConsent}
                                                </span>
                                            ) : null}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <strong>
                                    {formState.status ? <span className="thankyoumessage-newsletter mb-4"> {formState.statusMsg}</span> : null}
                                </strong>
                            </div>
                        </div>

                        <div className="col-md text-right d-flex align-items-center justify-content-lg-end justify-content-sm-center">
                            <div className="footerlogo">
                                {props.lang === "en_US" ? (
                                    <img src={LogoWhite} className="img-fluid" alt="img" />
                                ) : props.lang === "ar" ? (
                                    <img src={LogoWhiteAR} className="img-fluid" alt="img" />
                                ) : (
                                    <img src={LogoWhite} className="img-fluid" alt="img" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="text">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: SiteTrans.footer_bottom_rights_reserved[props.lang],
                            }}
                        ></div>
                    </div>
                    <div className="">
                        <ul className="copyrights-menu">
                            { menulist && menulist.menuItems ?
                            menulist.menuItems.nodes.map((item) => (
                                <li>
                                    <Link to={`${item.url}`} key={item.label}>
                                        {item.label}
                                    </Link>
                                </li>
                            )):
                            null}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
