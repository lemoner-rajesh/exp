import React, {useEffect, useState} from "react";
import Layout from "../components/layouts/index";
// import MainMenu from "../components/Mainmenu";
// import CustomPost from "../components/customPostItems";
// import {navigate, withPrefix} from "gatsby";
// import styled from "styled-components";
// import SEO from "../components/seo";
import Function from "../lib/functions";
import $ from "jquery";
// import {GatsbySeo} from "gatsby-plugin-next-seo";
import {decode} from "html-entities";
import {graphql} from "gatsby";
import SiteTrans from "../components/LangConfig/siteTrans.json";
import CountryListTrans from '../components/countryListTrans';
var Recaptcha = require('react-recaptcha');

const ContactUs = (props) => {
    const [shareUrl,
        setShareUrl] = useState("");
    useEffect(() => handleComponentMounted(), []);
    useEffect(() => handleComponentUpdated());
    useEffect(() => onPreRouteUpdate(), []);

    const onPreRouteUpdate = () => {
        Function.LoadingAllSliderScript();
    };

    const handleComponentMounted = () => {
        setTimeout(() => {
            const getUrl = window.location.href;
            setShareUrl(getUrl);
            if (window.location.href.indexOf("press-release") !== -1 || window.location.href.indexOf("perspective") !== -1) {
                $("h4.wow").removeClass("wow");
            }
        }, 3000);
    };

    const handleComponentUpdated = () => {
        $("h4.wow").removeClass("wow");
        // var mapElement = document.getElementById("map");
    };

    const [formState,
        setFormState] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        country: "",
        typeofinquiry: "",
        inquiryid:"",
        message: "",
        captcha: false,
        countryid: "",
        ageConsent: false,
        dataConsent: false,
        status: false,
        statusMsg: "",
        error: false,
        errorMsg: ""
    });
    const [captcha,
        setCaptcha] = useState(false);
    const [errorState,
        setErrorState] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        country: "",
        typeofinquiry: "",
        inquiryid:"",
        message: "",
        countryid: "",
        captcha: "",
        ageConsent: "",
        dataConsent: "",
        error: false,
        errorMsg: ""
    });

    const currentPage = props.data.wpPage;
    // const pageSeo = props.data.wpPage.seo;
    const allWpLocation = props.data.allWpLocation.edges;
    const allWpInquiryemail = props.data.allWpInquiryemail.edges;


    let recaptchaInstance;
    // specifying your onload callback function
    var callback = function () {
        console.log('Done!!!!');
    };

    // specifying verify callback function
    // var verifyCallback = function (response) {
    //     console.log(response);
    // };
    const [btnSubmitAction,
        setBtnSubmitAction] = useState(false);
    const addSubmission = () => {
        setBtnSubmitAction(true);

        let err = false;
        // let errMsg = "";
        let emailErr,
            fnameErr,
            lnameErr,
            phoneErr,
            inqErr,
            countryidErr,
            messageErr,
            ageConsentErr,
            dataConsentErr,
            captchaErr = "";
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(formState.email)) {
            err = true;
            emailErr = "Email is invalid";
        }
        if (formState.firstname === "") {
            err = true;
            fnameErr = SiteTrans.contact_fname_err[currentPage.locale.id];
        }
        if (formState.lastname === "") {
            err = true;
            lnameErr = SiteTrans.contact_fname_err[currentPage.locale.id];
        }
        if (formState.typeofinquiry === "") {
            err = true;
            inqErr = SiteTrans.contact_inquiry_type_err[currentPage.locale.id];
        }
        if (formState.phone === "") {
            err = true;
            phoneErr = SiteTrans.contact_phone_err[currentPage.locale.id];
        }
        if (formState.countryid === "") {
            err = true;
            countryidErr = SiteTrans.becomepartner_country_err[currentPage.locale.id];
        }
        if (formState.message === "") {
            err = true;
            messageErr = SiteTrans.contact_message_err[currentPage.locale.id];
        }
        if (formState.ageConsent === false) {
            err = true;
            ageConsentErr = SiteTrans.contact_confirm_message_err[currentPage.locale.id];
        }
        if (formState.dataConsent === false) {
            err = true;
            dataConsentErr = SiteTrans.contact_consent_message_err[currentPage.locale.id];
        }
        if (captcha === false) {
            err = true;
            captchaErr = "Captcha is required";
        }

        if (err) {
            setErrorState({
                ...errorState,
                error: true,
                email: emailErr,
                firstname: fnameErr,
                lastname: lnameErr,
                phone: phoneErr,
                typeofinquiry: inqErr,
                message: messageErr,
                captcha: captchaErr,
                countryid: countryidErr,
                ageConsent: ageConsentErr,
                dataConsent: dataConsentErr
            });
        } else {
            var axios = require("axios");


            var FormData = require('form-data');
            var data = new FormData();
            data.append('flag', true);
            data.append('email', formState.email);
            data.append('firstname', formState.firstname);
            data.append('lastname', formState.lastname);
            data.append('phone', formState.phone);
            data.append('typeofinquiry', formState.typeofinquiry);
            data.append('inquiryid', formState.inquiryid);
            data.append('country', formState.country);
            data.append('message', formState.message);
            data.append('countryid', formState.countryid);
            data.append('ageConsent', formState.ageConsent);
            data.append('dataConsent', formState.dataConsent);
        
            var config = {
                method: 'post',
                url: 'https://jameelhealthcms.aljhealth.com/wp-content/themes/aljtheme/addContact.php',
                headers: {},
                data: data
            };

            // var mainJson = {
            //     formEndpoint: "https://aljadmin:aljadmin@jameelhealthcms.aljhealth.com/wp-json/contact-form-7/v1/contact-forms/26/feedback",
            //     project: "Jameel Health",
            //     formName: "Contact Us Form",
            //     slackUrl: "",
            //     formData: {
            //         email: formState.email,
            //         firstname: formState.firstname,
            //         lastname: formState.lastname,
            //         phone: formState.phone,
            //         typeofinquiry: formState.typeofinquiry,
            //         inquiryid:formState.inquiryid,
            //         country: formState.country,
            //         message: formState.message,
            //         countryid: formState.countryid,
            //         ageConsent: formState.ageConsent,
            //         dataConsent: formState.dataConsent
            //     }
            // };

            // var data = JSON.stringify(mainJson);
            // console.log(data);
            // var config = {
            //     method: "post",
            //     url: "https://qb2zboq3ih.execute-api.eu-west-2.amazonaws.com/prod/sqs",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     data: data
            // };

            axios(config).then(function (response) {
                console.log(JSON.stringify(response.data));
                recaptchaInstance.reset();
                setFormState({
                    ...formState,
                    email: "",
                    firstname: "",
                    lastname: "",
                    phone: "",
                    typeofinquiry: "",
                    inquiryid:"",
                    message: "",
                    country: "",
                    countryid: "",
                    ageConsent: false,
                    dataConsent: false,
                    captcha: false,
                    status: true,
                    statusMsg: "Thank you for contacting us! We will be in touch with you shortly.",
                    error: false,
                    errorMsg: ""
                });
                setCaptcha(false);
                setErrorState({
                    email: "",
                    firstname: "",
                    lastname: "",
                    phone: "",
                    typeofinquiry: "",
                    country: "",
                    countryid: "",
                    message: "",
                    captcha: "",
                    ageConsent: "",
                    dataConsent: "",
                    error: false,
                    errorMsg: ""
                });
            })
                .catch(function (error) {
                    console.log(error);
                    recaptchaInstance.reset();
                    setFormState({
                        ...formState,

                        status: false,
                        statusMsg: "",
                        error: true,
                        errorMsg: "There was an error saving your request. Please try again later."
                    });
                    setErrorState({
                        email: "",
                        firstname: "",
                        lastname: "",
                        phone: "",
                        typeofinquiry: "",
                        country: "",
                        message: "",
                        countryid: "",
                        ageConsent: "",
                        dataConsent: "",
                        captcha: "",
                        error: false,
                        errorMsg: ""
                    });
                    setCaptcha(false);
                });
        }
    };

    const checkValidationAfterSubmit = (e) => {
        if (btnSubmitAction === true) {
            let err = false;
            // let errMsg = "";
            let emailErr,
                fnameErr,
                lnameErr,
                phoneErr,
                inqErr,
                countryidErr,
                messageErr,
                ageConsentErr,
                dataConsentErr,
                captchaErr = "";
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(formState.email)) {
                err = true;
                emailErr = "Email is invalid";
            }
            if (formState.firstname === "") {
                err = true;
                fnameErr = SiteTrans.contact_fname_err[currentPage.locale.id];
            }
            if (formState.lastname === "") {
                err = true;
                lnameErr = SiteTrans.contact_fname_err[currentPage.locale.id];
            }
            if (formState.typeofinquiry === "") {
                err = true;
                inqErr = SiteTrans.contact_inquiry_type_err[currentPage.locale.id];
            }
            if (formState.phone === "") {
                err = true;
                phoneErr = SiteTrans.contact_phone_err[currentPage.locale.id];
            }
            if (formState.countryid === "") {
                err = true;
                countryidErr = SiteTrans.becomepartner_country_err[currentPage.locale.id];
            }
            if (formState.message === "") {
                err = true;
                messageErr = SiteTrans.contact_message_err[currentPage.locale.id];
            }
            if (formState.ageConsent === false) {
                err = true;
                ageConsentErr = SiteTrans.contact_confirm_message_err[currentPage.locale.id];
            }
            if (formState.dataConsent === false) {
                err = true;
                dataConsentErr = SiteTrans.contact_consent_message_err[currentPage.locale.id];
            }
            if (captcha === false) {
                err = true;
                captchaErr = "Captcha is required";
            }

           
            if (err) {
                setErrorState({
                    ...errorState,
                    error: true,
                    email: emailErr,
                    firstname: fnameErr,
                    lastname: lnameErr,
                    phone: phoneErr,
                    typeofinquiry: inqErr,
                    message: messageErr,
                    captcha: captchaErr,
                    countryid: countryidErr,
                    ageConsent: ageConsentErr,
                    dataConsent: dataConsentErr
                });
            }
        }
    }

    // const clickHandler = (e) => {};

    return (
        <React.Fragment>
            <Layout
                translations={currentPage.translated}
                lang={currentPage.locale.id}
                location={props.location}
                // seoTitle={currentPage.seo.opengraphTitle
                //     ? currentPage.seo.opengraphTitle
                //     : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
                seosection={{
          seotitle: currentPage.seo.opengraphTitle
            ? currentPage.seo.opengraphTitle
            : decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
          seodescription: currentPage.seo.opengraphDescription
            ? currentPage.seo.opengraphDescription
            : "",
          openGraphURL: shareUrl,
          openGraphtitle: decode(currentPage.title).replace(
            /(<([^>]+)>)/gi,
            ""
          ),
          openGraphdescription: "",
          openGraphImage: "",
        }}    
                >
                {/* <GatsbySeo
                    description={currentPage.seo.opengraphDescription
                        ? currentPage.seo.opengraphDescription
                        : null}
                    openGraph={{
                        url: shareUrl,
                        title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")
                    }} /> <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
                {/* <section className="main-slider-wrapper innnerslider">
                    <div className="main-slider">
                        <div
                            className="item"
                            style={{
                                backgroundImage: `url(${currentPage.featuredImage
                                    ? currentPage.featuredImage.node.sourceUrl
                                    : null})`
                            }}>
                            <img
                                src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png"
                                className="slider-transparent img-fluid slider-transparent-img"
                                alt="hero-transparent" />
                            <div className="container">
                                <div className="text">
                                    <p className="heading wow fadeIn animated">
                                        {currentPage.AdditionalFields.topheading}
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <h1 className="wow fadeIn" data-wow-delay="0.4s">
                                            {currentPage.AdditionalFields.heading}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="contact-us-main-block">
                    <div
                    dangerouslySetInnerHTML={{
                        __html: currentPage.content
                    }} />
                    </div>
                <section>
                    <div className="container-fluid contact-us-container contact-us-block-space">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-md-12">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: currentPage.AdditionalFields.formTopText
                                        }}></div>
                                </div>
                            </div> */}
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="contact-us-form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstname"
                                                value={formState.firstname}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        firstname: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_fname[currentPage.locale.id]} /> {errorState.firstname
                                                    ? (
                                                        <span>{errorState.firstname}</span>
                                                    )
                                                    : null}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastname"
                                                value={formState.lastname}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        lastname: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_lname[currentPage.locale.id]} /> {errorState.lastname
                                                    ? (
                                                        <span>{errorState.lastname}</span>
                                                    )
                                                    : null}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                value={formState.phone}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        phone: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_phone[currentPage.locale.id]} /> {errorState.phone
                                                    ? (
                                                        <span>{errorState.phone}</span>
                                                    )
                                                    : null}
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                value={formState.email}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder="Email" /> {errorState.email
                                                    ? (
                                                        <span>{errorState.email}</span>
                                                    )
                                                    : null}
                                        </div>
                                        <div className="form-group">
                                            <select
                                                id="countryid"
                                                name="country"
                                                className="form-control"
                                                value={formState.countryid}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        countryid: e.target.value,
                                                        country: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}>
                                                <option>
                                                    {SiteTrans.contact_country[currentPage.locale.id]}
                                                </option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BQ">
                                                    Bonaire, Sint Eustatius and Saba
                                                </option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">
                                                    British Indian Ocean Territory
                                                </option>
                                                <option value="BN">Brunei Darussalam</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo</option>
                                                <option value="CD">
                                                    Congo, Democratic Republic of the Congo
                                                </option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Cote D'Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Curacao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands (Malvinas)</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">
                                                    Heard Island and Mcdonald Islands
                                                </option>
                                                <option value="VA">
                                                    Holy See (Vatican City State)
                                                </option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran, Islamic Republic of</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">
                                                    Korea, Democratic People's Republic of
                                                </option>
                                                <option value="KR">Korea, Republic of</option>
                                                <option value="XK">Kosovo</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">
                                                    Lao People's Democratic Republic
                                                </option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libyan Arab Jamahiriya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">
                                                    Macedonia, the Former Yugoslav Republic of
                                                </option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">
                                                    Micronesia, Federated States of
                                                </option>
                                                <option value="MD">Moldova, Republic of</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="AN">Netherlands Antilles</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PS">
                                                    Palestinian Territory, Occupied
                                                </option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Reunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russian Federation</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="BL">Saint Barthelemy</option>
                                                <option value="SH">Saint Helena</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="MF">Saint Martin</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome and Principe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="CS">Serbia and Montenegro</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">
                                                    South Georgia and the South Sandwich Islands
                                                </option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syrian Arab Republic</option>
                                                <option value="TW">Taiwan, Province of China</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania, United Republic of</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">
                                                    United States Minor Outlying Islands
                                                </option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Viet Nam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.s.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                            {errorState.countryid
                                                ? (
                                                    <span>{errorState.countryid}</span>
                                                )
                                                : null}
                                        </div>
                                        <div className="form-group">
                                            <select
                                                id="typeofinquiry"
                                                name="Select Inquiry Type"
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        typeofinquiry: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                className="form-control">
                                                <option value="">
                                                    {SiteTrans.contact_inquiry_type[currentPage.locale.id]
                                                    }
                                                </option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                            </select>

                                            {errorState.typeofinquiry
                                                ? (
                                                    <span>{errorState.typeofinquiry}</span>
                                                )
                                                : null}
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                row="3"
                                                className="form-control"
                                                value={formState.message}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        message: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_message[currentPage.locale.id]} /> {errorState.message
                                                    ? (
                                                        <span>{errorState.message}</span>
                                                    )
                                                    : null}
                                        </div>
                                        <div className="form-group">
                                            <Recaptcha
                                                ref={e => recaptchaInstance = e}
                                                render="explicit"
                                                sitekey="6Ld9CuogAAAAAGCHkeQ0UEP-uBCZN1_8tpgbmcPs"
                                                verifyCallback={(response) => {
                                                    setCaptcha(true)
                                                }}
                                                onloadCallback={callback} /> {errorState.captcha
                                                    ? <span>{errorState.captcha}</span>
                                                    : null}
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="ageConsent"
                                                    checked={formState.ageConsent}
                                                    onChange={(e) => {
                                                        setFormState({
                                                            ...formState,
                                                            ageConsent: !formState.ageConsent
                                                        });
                                                        checkValidationAfterSubmit(e)
                                                    }} /> {SiteTrans.contact_confirm_message[currentPage.locale.id]
                                                }

                                                {errorState.ageConsent
                                                    ? (
                                                        <span>{errorState.ageConsent}</span>
                                                    )
                                                    : null}
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="dataConsent"
                                                    checked={formState.dataConsent}
                                                    onChange={(e) => {
                                                        setFormState({
                                                            ...formState,
                                                            dataConsent: !formState.dataConsent
                                                        });
                                                        checkValidationAfterSubmit(e)
                                                    }} /> {SiteTrans.contact_consent_message[currentPage.locale.id]
                                                }

                                                {errorState.dataConsent
                                                    ? (
                                                        <span>{errorState.dataConsent}</span>
                                                    )
                                                    : null}
                                            </label>
                                        </div>

                                        <button type="button" className="readmore" onClick={addSubmission}>
                                            {SiteTrans.contact_submit_lable[currentPage.locale.id]}
                                        </button>

                                        {formState.error
                                            ? <div className="message-error">
                                                {formState.errorMsg}
                                            </div>
                                            : null}

                                        {formState.status
                                            ? <div className="thankyoumessage mt-4">
                                                <strong>
                                                    {formState.statusMsg}
                                                </strong>
                                            </div>
                                            : null}
                                    </div>
                                </div> */}
                                <div className="col-md-12">
    <div className="contact-us-form">
        <div class="row">
            <div class="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstname"
                                                value={formState.firstname}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        firstname: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_fname[currentPage.locale.id]} /> {errorState.firstname
                                                    ? (
                                                        <span>{errorState.firstname}</span>
                                                    )
                                                    : null}
                                        </div>
            </div>
            <div class="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastname"
                                                value={formState.lastname}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        lastname: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_lname[currentPage.locale.id]} /> {errorState.lastname
                                                    ? (
                                                        <span>{errorState.lastname}</span>
                                                    )
                                                    : null}
                                        </div>
            </div>
            <div class="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                value={formState.phone}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        phone: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_phone[currentPage.locale.id]} /> {errorState.phone
                                                    ? (
                                                        <span>{errorState.phone}</span>
                                                    )
                                                    : null}
                                        </div>
            </div>
            <div class="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                value={formState.email}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_email[currentPage.locale.id]} /> {errorState.email
                                                    ? (
                                                        <span>{errorState.email}</span>
                                                    )
                                                    : null}
                                        </div>
            </div>
            <div class="col-md-6">
                                        <div className="form-group">
                                            <select
                                                id="countryid"
                                                name="country"
                                                className="form-control"
                                                value={formState.countryid}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        countryid: e.target.value,
                                                        country: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}>
                                                <option>
                                                    {SiteTrans.contact_country[currentPage.locale.id]}
                                                </option>
                                                <CountryListTrans lang={currentPage.locale.id}/> 
                                                {/* <option value="AF">Afghanistan</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BQ">
                                                    Bonaire, Sint Eustatius and Saba
                                                </option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">
                                                    British Indian Ocean Territory
                                                </option>
                                                <option value="BN">Brunei Darussalam</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CX">Christmas Island</option>
                                                <option value="CC">Cocos (Keeling) Islands</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo</option>
                                                <option value="CD">
                                                    Congo, Democratic Republic of the Congo
                                                </option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Cote D'Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CW">Curacao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands (Malvinas)</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HM">
                                                    Heard Island and Mcdonald Islands
                                                </option>
                                                <option value="VA">
                                                    Holy See (Vatican City State)
                                                </option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran, Islamic Republic of</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">
                                                    Korea, Democratic People's Republic of
                                                </option>
                                                <option value="KR">Korea, Republic of</option>
                                                <option value="XK">Kosovo</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">
                                                    Lao People's Democratic Republic
                                                </option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libyan Arab Jamahiriya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao</option>
                                                <option value="MK">
                                                    Macedonia, the Former Yugoslav Republic of
                                                </option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">
                                                    Micronesia, Federated States of
                                                </option>
                                                <option value="MD">Moldova, Republic of</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="AN">Netherlands Antilles</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="NF">Norfolk Island</option>
                                                <option value="MP">Northern Mariana Islands</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PS">
                                                    Palestinian Territory, Occupied
                                                </option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Reunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russian Federation</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="BL">Saint Barthelemy</option>
                                                <option value="SH">Saint Helena</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="MF">Saint Martin</option>
                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                <option value="VC">
                                                    Saint Vincent and the Grenadines
                                                </option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">Sao Tome and Principe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="CS">Serbia and Montenegro</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">
                                                    South Georgia and the South Sandwich Islands
                                                </option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                <option value="SZ">Swaziland</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="SY">Syrian Arab Republic</option>
                                                <option value="TW">Taiwan, Province of China</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania, United Republic of</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad and Tobago</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks and Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UM">
                                                    United States Minor Outlying Islands
                                                </option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Viet Nam</option>
                                                <option value="VG">Virgin Islands, British</option>
                                                <option value="VI">Virgin Islands, U.s.</option>
                                                <option value="WF">Wallis and Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option> */}
                                            </select>
                                            {errorState.countryid
                                                ? (
                                                    <span>{errorState.countryid}</span>
                                                )
                                                : null}
                                        </div>
            </div>
            <div class="col-md-6">
                <div className="form-group">
                                            <select id="typeofinquiry" name="Select Inquiry Type"
                                                onChange={(e) => {
                                                    var inqID = e.target[e.target.selectedIndex].getAttribute('data-inqid');
                                                    setFormState({
                                                        ...formState,
                                                        typeofinquiry: e.target.value,
                                                        inquiryid:inqID,
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                className="form-control">
                                                <option value="">
                                                    {SiteTrans.contact_inquiry_type[currentPage.locale.id]
                                                    }
                                                </option>
                                                {allWpInquiryemail ?
                                                allWpInquiryemail.map((data, key) => (
                                                    <option key={key} value={data.node.title} data-inqid={data.node.databaseId}>{data.node.title}</option>
                                                ))
                                                :null}
                                            </select>


 {/* <select name="countryid" className="form-control" onChange={(e) =>{
                            var countryName = e.target[e.target.selectedIndex].getAttribute('data-country');
                                setFormState({
                                    ...formState,
                                    countryid: e.target.value,
                                    country: countryName,
                                })}
                            } value={formState.countryid}>
                            <option value="" data-country="">Select Country</option>
                            {countries && countries.edges?
                            countries.edges.map((data, key) => (
                                <option key={key} value={data.node.title} data-country={data.node.databaseId}>{data.node.title}</option>
                            ))
                            :null}
                            
                            
                        </select> */}



                                            {errorState.typeofinquiry
                                                ? (
                                                    <span>{errorState.typeofinquiry}</span>
                                                )
                                                : null}
                </div>
            </div>
                    <div class="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                row="3"
                                                className="form-control"
                                                value={formState.message}
                                                onChange={(e) => {
                                                    setFormState({
                                                        ...formState,
                                                        message: e.target.value
                                                    });
                                                    checkValidationAfterSubmit(e)
                                                }}
                                                placeholder={SiteTrans.contact_message[currentPage.locale.id]} /> {errorState.message
                                                    ? (
                                                        <span>{errorState.message}</span>
                                                    )
                                                    : null}
                                        </div>
                    </div>
        </div>
                                        <div className="form-group">
                                            <Recaptcha
                                                ref={e => recaptchaInstance = e}
                                                render="explicit"
                                                sitekey="6Ld9CuogAAAAAGCHkeQ0UEP-uBCZN1_8tpgbmcPs"
                                                verifyCallback={(response) => {
                                                    setCaptcha(true)
                                                }}
                                                onloadCallback={callback} /> {errorState.captcha
                                                    ? <span>{errorState.captcha}</span>
                                                    : null}
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="ageConsent"
                                                    checked={formState.ageConsent}
                                                    onChange={(e) => {
                                                        setFormState({
                                                            ...formState,
                                                            ageConsent: !formState.ageConsent
                                                        });
                                                        checkValidationAfterSubmit(e)
                                                    }} /> {SiteTrans.contact_confirm_message[currentPage.locale.id]
                                                }

                                                {errorState.ageConsent
                                                    ? (
                                                        <span>{errorState.ageConsent}</span>
                                                    )
                                                    : null}
                                            </label>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="dataConsent"
                                                    checked={formState.dataConsent}
                                                    onChange={(e) => {
                                                        setFormState({
                                                            ...formState,
                                                            dataConsent: !formState.dataConsent
                                                        });
                                                        checkValidationAfterSubmit(e)
                                                    }} /> {SiteTrans.contact_consent_message[currentPage.locale.id]
                                                }

                                                {errorState.dataConsent
                                                    ? (
                                                        <span>{errorState.dataConsent}</span>
                                                    )
                                                    : null}
                                            </label>
                                        </div>

                                        <button type="button" className="readmore" onClick={addSubmission}>
                                            {SiteTrans.contact_submit_lable[currentPage.locale.id]}
                                        </button>

                                        {formState.error
                                            ? <div className="message-error">
                                                {formState.errorMsg}
                                            </div>
                                            : null}

                                        {formState.status
                                            ? <div className="thankyoumessage mt-4">
                                                <strong>
                                                    {formState.statusMsg}
                                                </strong>
                                            </div>
                                            : null}
    </div>
                                </div>
                                {/* <div className="col-md-6 mt-4 pl-sm-5">
                                    <div className="contact-address">
                                        <h4>{currentPage.AdditionalFields.emergencyTitle}</h4>
                                        <p>
                                            <a href={`tel:${currentPage.AdditionalFields.emergenyTelephone}`}>{currentPage.AdditionalFields.emergenyTelephone}</a>
                                            <br />
                                            <a href={`mailto:${currentPage.AdditionalFields.emergencyEmail}`}>{currentPage.AdditionalFields.emergencyEmail}</a>
                                        </p>

                                        <h4>{currentPage.AdditionalFields.generalInquiryTitle}</h4>
                                        <p>
                                            <a href={`mailto:${currentPage.AdditionalFields.generalInquiryEmail}`}>
                                                {currentPage.AdditionalFields.generalInquiryEmail}
                                            </a>
                                        </p>
                                        <h4>{currentPage.AdditionalFields.mediaInquiryTitle}</h4>
                                        <p>
                                            <a href={`tel:${currentPage.AdditionalFields.mediaInquiryTelephone}`}>{currentPage.AdditionalFields.mediaInquiryTelephone}</a>
                                            <br />
                                            <a href={`mailto:${currentPage.AdditionalFields.mediaInquiryEmail}`}>{currentPage.AdditionalFields.mediaInquiryEmail}</a>
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="our-presence-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text">
                                    <h4 className="fadeInUp" data-wow-delay="0.1s">
                                        {SiteTrans.locations_heading_lable[currentPage.locale.id]}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {allWpLocation.map((item) => (
                                <div className="col-md-4 mb-md-5">
                                    <h6>{item.node.title}</h6>
                                    <p>
                                        <strong>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: item.node.address_locations.address
                                                }}></div>
                                            {SiteTrans.locations_phone_lable[currentPage.locale.id]}:{" "}
                                            <a className="phone-number" href={`tel:${item.node.address_locations.phone}`}>
                                                {item.node.address_locations.phone}{" "}
                                            </a>
                                            <br /> {SiteTrans.locations_email_lable[currentPage.locale.id]
                                            }:{" "}
                                            <a href={`mailto:${item.node.address_locations.email}`}>
                                                {item.node.address_locations.email}{" "}
                                            </a>
                                            <br /> {SiteTrans.locations_url_lable[currentPage.locale.id]}:
                                            <a href={item.node.address_locations.url}>{item.node.address_locations.url}
                                            </a>
                                        </strong>
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section> */}
               
            </Layout>
        </React.Fragment>
    );
};

export default ContactUs;
export const ContactUsPageQuery = graphql `
    query ContactUsPageQuery($id: String!, $langCode: ID!) {
        wpPage(id: { eq: $id }) {
            title
            content
            slug
            id
            featuredImage {
                node {
                sourceUrl
                }
            }
           
            seo {
                opengraphTitle
                opengraphDescription
            }
            template {
                templateName
            }
            locale {
                id
                locale
            }
            translated {
                id
                localizedWpmlUrl
                locale {
                id
                locale
                }
                slug
                title
            }
        }
        allWpLocation(filter: { locale: { id: { eq: $langCode } } }) {
            edges {
                node {
                address_locations {
                    address
                    email
                    phone
                    url
                }
                title
                }
            }
        }
        allWpInquiryemail(filter: { locale: { id: { eq: $langCode } } }) {
            edges {
                node {
                    title
                    databaseId
                }
            }
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`;




//  AdditionalFields {
//                 heading
//                 topheading
//                 formTopText
//                 emergencyTitle
//                 emergenyTelephone
//                 emergencyEmail
//                 generalInquiryTitle
//                 generalInquiryEmail
//                 mediaInquiryEmail
//                 mediaInquiryTitle
//                 mediaInquiryTelephone
//             }