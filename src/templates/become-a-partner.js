// import React, {useEffect, useState} from "react"
// import Layout from '../components/layouts/index'
// // import MainMenu from '../components/Mainmenu'
// // import CustomPost from '../components/customPostItems'
// // import {navigate, withPrefix} from "gatsby"
// // import styled from 'styled-components';
// // import SEO from "../components/seo"
// import Function from "../lib/functions";
// import $ from 'jquery';
// // import {GatsbySeo} from 'gatsby-plugin-next-seo';
// import {decode} from 'html-entities';
// import {graphql} from "gatsby"
// import SiteTrans from "../components/LangConfig/siteTrans.json"
// import CountryListTrans from '../components/countryListTrans';
// var Recaptcha = require('react-recaptcha');

// const BecomePartner = (props) => {

//     // console.log('props', props);
    
//     const allWpInquiryemail = props.data.allWpInquiryemail.edges;
    
//     const [sectorShowHide,
//         SetSectorShowHide] = useState('d-none');
//     const [catShowHide,
//         SetCatShowHide] = useState('d-none');

//     const [formState,
//         setFormState] = useState({
//         salutation: '',
//         firstname: '',
//         lastname: '',
//         role_or_position: '',
//         company: '',
//         company_website: '',
//         phone: '',
//         email: '',
//         country: '',
//         countryid: '',
//         sector_of_interest: '',
//         sector_of_interest_other: '',
//         category: '',
//         category_other: '',
//         typeofinquiry: "",
//         inquiryid:"",
//         inquiry: '',
//         captcha: false,
//         ageConsent: false,
//         dataConsent: false,
//         subscribeConsent: false,
//         status: false,
//         statusMsg: '',
//         error: false,
//         errorMsg: ''
//     });

//     const [captcha,
//         setCaptcha] = useState(false)
//     const [errorState,
//         setErrorState] = useState({
//         salutation: '',
//         firstname: '',
//         lastname: '',
//         role_or_position: '',
//         company: '',
//         company_website: '',
//         phone: '',
//         email: '',
//         country: '',
//         countryid: '',
//         sector_of_interest: '',
//         sector_of_interest_other: '',
//         category: '',
//         category_other: '',
//         typeofinquiry: "",
//         inquiryid:"",
//         inquiry: '',
//         captcha: false,
//         ageConsent: false,
//         dataConsent: false,
//         subscribeConsent: false,
//         status: false,
//         statusMsg: '',
//         error: false,
//         errorMsg: ''
//     });
    
//     useEffect(() => {
//         formState.sector_of_interest === 'Other'
//             ? SetSectorShowHide('d-block')
//             : SetSectorShowHide('d-none')
//         formState.category === 'Other'
//             ? SetCatShowHide('d-block')
//             : SetCatShowHide('d-none')
//     }, [formState]);

//     let recaptchaInstance;
//     // specifying your onload callback function
//     var callback = function () {
//         console.log('Done!!!!');
//     };

//     // specifying verify callback function
//     // var verifyCallback = function (response) {
//     //     console.log(response);
//     // };

//     const [btnSubmitAction, setBtnSubmitAction] = useState(false);
//     const addSubmission = () => {
//         setBtnSubmitAction(true);
//         let err = false;
//         // let errMsg = '';
//         let emailErr,
//             salutationErr,
//             fnameErr,
//             lnameErr,
//             phoneErr,
//             role_or_positionErr,
//             countryidErr,
//             companyErr,
//             company_websiteErr,
//             sector_of_interestErr,
//             categoryErr,
//             inqErr,
//             inquiryErr,
//             ageConsentErr,
//             dataConsentErr,
//             subscribeConsentErr,
//             captchaErr = "";
//         let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         if (!re.test(formState.email)) {
//             err = true;
//             emailErr = SiteTrans.becomepartner_email_err[currentPage.locale.id];
//         }
//         if (formState.salutation === '') {
//             err = true;
//             salutationErr = SiteTrans.becomepartner_salutation_err[currentPage.locale.id];
//         }
//         if (formState.firstname === '') {
//             err = true;
//             fnameErr = SiteTrans.becomepartner_fname_err[currentPage.locale.id];
//         }
//         if (formState.lastname === '') {
//             err = true;
//             lnameErr = SiteTrans.becomepartner_lname_err[currentPage.locale.id];
//         }
//         if (formState.role_or_position === '') {
//             err = true;
//             role_or_positionErr = SiteTrans.becomepartner_role_err[currentPage.locale.id];
//         }
//         if (formState.company === '') {
//             err = true;
//             companyErr = SiteTrans.becomepartner_company_err[currentPage.locale.id];
//         }
//         if (formState.company_website === '') {
//             err = true;
//             company_websiteErr = SiteTrans.becomepartner_company_err[currentPage.locale.id];
//         }
//         if (formState.phone === '') {
//             err = true;
//             phoneErr = SiteTrans.becomepartner_phone_err[currentPage.locale.id];
//         }
//         if (formState.countryid === '') {
//             err = true;
//             countryidErr = SiteTrans.becomepartner_country_err[currentPage.locale.id];
//         }
//         if (formState.sector_of_interest === '') {
//             err = true;
//             sector_of_interestErr = SiteTrans.becomepartner_sector_interest_err[currentPage.locale.id];
//         }
//         if (formState.category === '') {
//             err = true;
//             categoryErr = SiteTrans.becomepartner_category_err[currentPage.locale.id];
//         }
//         if (formState.typeofinquiry === "") {
//             err = true;
//             inqErr = SiteTrans.contact_inquiry_type_err[currentPage.locale.id];
//         }
//         if (formState.inquiry === '') {
//             err = true;
//             inquiryErr = SiteTrans.becomepartner_inquiry_err[currentPage.locale.id];
//         }

//         if (formState.ageConsent === false) {
//             err = true;
//             ageConsentErr = SiteTrans.becomepartner_age_confirm_err[currentPage.locale.id];
//         }

//         if (formState.dataConsent === false) {
//             err = true;
//             dataConsentErr = SiteTrans.becomepartner_consent_err[currentPage.locale.id];
//         }

//         // if (formState.subscribeConsent === false) {     err = true;
//         // subscribeConsentErr = "Please confirm"; }
//         if (captcha === false) {
//             err = true;
//             captchaErr = "Captcha is required";
//         }
//         if (err) {
//             setErrorState({
//                 ...errorState,
//                 error: true,
//                 salutation: salutationErr,
//                 firstname: fnameErr,
//                 lastname: lnameErr,
//                 role_or_position: role_or_positionErr,
//                 company: companyErr,
//                 company_website: company_websiteErr,
//                 phone: phoneErr,
//                 email: emailErr,
//                 countryid: countryidErr,
//                 sector_of_interest: sector_of_interestErr,
//                 category: categoryErr,
//                 typeofinquiry: inqErr,
//                 inquiry: inquiryErr,
//                 ageConsent: ageConsentErr,
//                 dataConsent: dataConsentErr,
//                 subscribeConsent: subscribeConsentErr,
//                 captcha: captchaErr
//             })
//         } else {
//             var axios = require('axios');




//             var FormData = require('form-data');
//             var data = new FormData();
//             data.append('flag', true);
//             data.append('salutation', formState.salutation);
//             data.append('firstname', formState.firstname);
//             data.append('lastname', formState.lastname);
//             data.append('role_or_position', formState.role_or_position);
//             data.append('company', formState.company);
//             data.append('company_website', formState.company_website);
//             data.append('phone', formState.phone);
//             data.append('email', formState.email);
//             data.append('country', formState.country);
//             data.append('countryid', formState.countryid);
//             data.append('sector_of_interest', formState.sector_of_interest);
//             data.append('sector_of_interest_other', formState.sector_of_interest_other);
//             data.append('category', formState.category);
//             data.append('category_other', formState.category_other);
//             data.append('typeofinquiry', formState.typeofinquiry);
//             data.append('inquiryid', formState.inquiryid);
//             data.append('inquiry', formState.inquiry);
//             data.append('ageConsent', formState.ageConsent);
//             data.append('dataConsent', formState.dataConsent);
//             data.append('subscribeConsent', formState.subscribeConsent);
        
//             var config = {
//                 method: 'post',
//                 url: 'https://jameelhealthcms.aljhealth.com/wp-content/themes/aljtheme/addBecomePartner.php',
//                 headers: {},
//                 data: data
//             };









//             // var mainJson = {
//             //     formEndpoint: 'https://solutioncms.aljhealth.com/wp-json/contact-form-7/v1/contact-forms/7229/f' +
//             //             'eedback',
//             //     project: 'Jameel Health',
//             //     formName: 'Contact Us FormBecome a Partner',
//             //     slackUrl: '',
//             //     formData: {
//             //         salutation: formState.salutation,
//             //         firstname: formState.firstname,
//             //         lastname: formState.lastname,
//             //         role_or_position: formState.role_or_position,
//             //         company: formState.company,
//             //         company_website: formState.company_website,
//             //         phone: formState.phone,
//             //         email: formState.email,
//             //         country: formState.country,
//             //         countryid: formState.countryid,
//             //         sector_of_interest: formState.sector_of_interest,
//             //         sector_of_interest_other: formState.sector_of_interest_other,
//             //         category: formState.category,
//             //         category_other: formState.category_other,
//             //         inquiry: formState.inquiry,
//             //         ageConsent: formState.ageConsent,
//             //         dataConsent: formState.dataConsent,
//             //         subscribeConsent: formState.subscribeConsent
//             //     }
//             // }

//             // var data = JSON.stringify(mainJson);
//             // console.log(data);
//             // var config = {
//             //     method: 'post',
//             //     url: 'https://qb2zboq3ih.execute-api.eu-west-2.amazonaws.com/prod/sqs',
//             //     headers: {
//             //         'Content-Type': 'application/json'
//             //     },
//             //     data: data
//             // };

//             axios(config).then(function (response) {
//                 // console.log(JSON.stringify(response.data));
//                 recaptchaInstance.reset();
//                 setFormState({
//                     ...formState,
//                     salutation: '',
//                     firstname: '',
//                     lastname: '',
//                     role_or_position: '',
//                     company: '',
//                     company_website: '',
//                     phone: '',
//                     email: '',
//                     country: '',
//                     countryid: '',
//                     sector_of_interest: '',
//                     category: '',
//                     typeofinquiry: "",
//                     inquiry: '',
//                     captcha: false,
//                     ageConsent: false,
//                     dataConsent: false,
//                     subscribeConsent: false,
//                     status: true,
//                     statusMsg: "Thank you for contacting us! We will be in touch with you shortly.",
//                     error: false,
//                     errorMsg: ''
//                 })
//                 setCaptcha(false)
//                 setErrorState({
//                     salutation: '',
//                     firstname: '',
//                     lastname: '',
//                     role_or_position: '',
//                     company: '',
//                     company_website: '',
//                     phone: '',
//                     email: '',
//                     country: '',
//                     countryid: '',
//                     sector_of_interest: '',
//                     category: '',
//                     typeofinquiry: "",
//                     inquiry: '',
//                     captcha: false,
//                     ageConsent: false,
//                     dataConsent: false,
//                     subscribeConsent: false,
//                     status: false,
//                     statusMsg: '',
//                     error: false,
//                     errorMsg: ''
//                 })
//             })
//             .catch(function (error) {
//                 // console.log(error);
//                 recaptchaInstance.reset();
//                 setFormState({
//                     ...formState,

//                     status: false,
//                     statusMsg: "",
//                     error: true,
//                     errorMsg: 'There was an error saving your request. Please try again later.'
//                 })
//                 setErrorState({
//                     salutation: '',
//                     firstname: '',
//                     lastname: '',
//                     role_or_position: '',
//                     company: '',
//                     company_website: '',
//                     phone: '',
//                     email: '',
//                     country: '',
//                     countryid: '',
//                     sector_of_interest: '',
//                     category: '',
//                     typeofinquiry: "",
//                     inquiry: '',
//                     captcha: false,
//                     ageConsent: false,
//                     dataConsent: false,
//                     subscribeConsent: false,
//                     status: false,
//                     statusMsg: '',
//                     error: false,
//                     errorMsg: ''
//                 })
//                 setCaptcha(false)
//             });
//         }

//     }

//     const checkValidationAfterSubmit = (e) => {
//         if (btnSubmitAction === true) {
//             let err = false;
//             // let errMsg = '';
//             let emailErr,
//                 salutationErr,
//                 fnameErr,
//                 lnameErr,
//                 phoneErr,
//                 role_or_positionErr,
//                 countryidErr,
//                 companyErr,
//                 company_websiteErr,
//                 sector_of_interestErr,
//                 categoryErr,
//                 inqErr,
//                 inquiryErr,
//                 ageConsentErr,
//                 dataConsentErr,
//                 subscribeConsentErr,
//                 captchaErr = "";
//             let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
//             if (formState.salutation === '') {
//                 err = true;
//                 salutationErr = SiteTrans.becomepartner_salutation_err[currentPage.locale.id];
//             }
//             if (formState.firstname === '') {
//                 err = true;
//                 fnameErr = SiteTrans.becomepartner_fname_err[currentPage.locale.id];
//             }
//             if (formState.lastname === '') {
//                 err = true;
//                 lnameErr = SiteTrans.becomepartner_lname_err[currentPage.locale.id];
//             }
//             if (formState.role_or_position === '') {
//                 err = true;
//                 role_or_positionErr = SiteTrans.becomepartner_role_err[currentPage.locale.id];
//             }
//             if (formState.company === '') {
//                 err = true;
//                 companyErr = SiteTrans.becomepartner_company_err[currentPage.locale.id];
//             }
//             if (formState.company_website === '') {
//                 err = true;
//                 company_websiteErr = SiteTrans.becomepartner_company_err[currentPage.locale.id];
//             }
//             if (!re.test(formState.email)) {
//                 err = true;
//                 emailErr = SiteTrans.becomepartner_email_err[currentPage.locale.id];
//             }
//             if (formState.phone === '') {
//                 err = true;
//                 phoneErr = SiteTrans.becomepartner_phone_err[currentPage.locale.id];
//             }
//             if (formState.countryid === '') {
//                 err = true;
//                 countryidErr = SiteTrans.becomepartner_country_err[currentPage.locale.id];
//             }
//             if (formState.sector_of_interest === '') {
//                 err = true;
//                 sector_of_interestErr = SiteTrans.becomepartner_sector_interest_err[currentPage.locale.id];
//             }
//             if (formState.category === '') {
//                 err = true;
//                 categoryErr = SiteTrans.becomepartner_category_err[currentPage.locale.id];
//             }
//             if (formState.typeofinquiry === "") {
//                 err = true;
//                 inqErr = SiteTrans.contact_inquiry_type_err[currentPage.locale.id];
//             }
//             if (formState.inquiry === '') {
//                 err = true;
//                 inquiryErr = SiteTrans.becomepartner_inquiry_err[currentPage.locale.id];
//             }

//             if (formState.ageConsent === false) {
//                 err = true;
//                 ageConsentErr = SiteTrans.becomepartner_age_confirm_err[currentPage.locale.id];
//             }

//             if (formState.dataConsent === false) {
//                 err = true;
//                 dataConsentErr = SiteTrans.becomepartner_consent_err[currentPage.locale.id];
//             }

//             if (captcha === false) {
//                 err = true;
//                 captchaErr = "Captcha is required";
//             }
//             if (err) {
//                 setErrorState({
//                     ...errorState,
//                     error: true,
//                     salutation: salutationErr,
//                     firstname: fnameErr,
//                     lastname: lnameErr,
//                     role_or_position: role_or_positionErr,
//                     company: companyErr,
//                     company_website: company_websiteErr,
//                     phone: phoneErr,
//                     email: emailErr,
//                     countryid: countryidErr,
//                     sector_of_interest: sector_of_interestErr,
//                     category: categoryErr,
//                     typeofinquiry: inqErr,
//                     inquiry: inquiryErr,
//                     ageConsent: ageConsentErr,
//                     dataConsent: dataConsentErr,
//                     subscribeConsent: subscribeConsentErr,
//                     captcha: captchaErr
//                 })
//             }
//         }
//     }

//     const [shareUrl,
//         setShareUrl] = useState('')
//     useEffect(() => handleComponentMounted(), []);
//     useEffect(() => handleComponentUpdated());
//     useEffect(() => onPreRouteUpdate(), []);

//     const onPreRouteUpdate = () => {
//         Function.LoadingAllSliderScript()
//     }
//     const handleComponentMounted = () => {
//         setTimeout(() => {
//             const getUrl = window.location.href
//             // console.log('getUrl', getUrl)
//             setShareUrl(getUrl)
//             if (window.location.href.indexOf('press-release') !== -1 || window.location.href.indexOf('perspective') !== -1) {
//                 $('h4.wow').removeClass('wow');
//             }
//         }, 3000);
//     }

//     const handleComponentUpdated = () => {
//         $('h4.wow').removeClass('wow');
//         // var mapElement = document.getElementById('map');
//         // console.log('map present');
//     }

//     // const siteMetadata = props.data.site.siteMetadata
//     const currentPage = props.data.wpPage
//     const allWpSolution = props.data.allWpSolution.edges


//     console.log("allWpSolution");
//     console.log(allWpSolution);

//     // const pageSeo = props.data.wpPage.seo

//     const clickHandler = (e) => {}

//     return (
//         <React.Fragment>

//             <Layout
//                 translations={currentPage.translated}
//                 lang={currentPage.locale.id}
//                 location={props.location}
//                 // seoTitle={currentPage.seo.opengraphTitle
//                 // ? currentPage.seo.opengraphTitle
//                 // : decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")}
                
//                 seosection={{
//           seotitle: currentPage.seo.opengraphTitle
//             ? currentPage.seo.opengraphTitle
//             : decode(currentPage.title).replace(/(<([^>]+)>)/gi, ""),
//           seodescription: currentPage.seo.opengraphDescription
//             ? currentPage.seo.opengraphDescription
//             : "",
//           openGraphURL: shareUrl,
//           openGraphtitle: decode(currentPage.title).replace(
//             /(<([^>]+)>)/gi,
//             ""
//           ),
//           openGraphdescription: "",
//           openGraphImage: "",
//         }}
//                 >
//                 {/* <GatsbySeo
//                     description={currentPage.seo.opengraphDescription
//                     ? currentPage.seo.opengraphDescription
//                     : null}
//                     openGraph={{
//                     url: shareUrl,
//                     title: decode(currentPage.title).replace(/(<([^>]+)>)/gi, "")
//                 }}/> */}

//                 {/* <section class="main-slider-wrapper innnerslider">
//                     <div class="main-slider">
//                         <div
//                             class="item"
//                             style={{
//                             backgroundImage: `url(${currentPage.featuredImage
//                                 ? currentPage.featuredImage.node.sourceUrl
//                                 : null})`
//                         }}>
//                             <img
//                                 src="https://media.aljhealth.com/wp-content/uploads/2020/12/28082150/hero-transparent.png"
//                                 class="slider-transparent img-fluid slider-transparent-img"
//                                 alt="hero-transparent"/>
//                             <div class="container">

//                                 <div class="text">
//                                     <p class="heading wow fadeIn animated">{currentPage.AdditionalFields.topheading}</p>
//                                     <div className="d-flex align-items-center">
//                                         <h1 class="wow fadeIn" data-wow-delay="0.4s">{currentPage.AdditionalFields.heading}</h1>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </section> */}
//                 <div className="become-a-partner-block">
//                     <div
//                         onClick={clickHandler} onKeyDown={clickHandler} role="presentation"
//                         dangerouslySetInnerHTML={{
//                         __html: currentPage.content
//                     }}/>
//                 </div>
//                 <section>
//                     <div className="container-fluid contact-us-container second-block-container">
//                         <div className="container">
//                             {/* <div className="row">
//                                 <div className="col-md-12">
//                                     <div
//                                         dangerouslySetInnerHTML={{
//                                         __html: currentPage.AdditionalFields.becomeText
//                                     }}/>
//                                 </div>
//                             </div> */}
//                             <div className="row">
//                                 <div className="col-md-12">
//                                     <div className="contact-us-form">

//                                         <div className="row">
//                                             <div className="col-md-4">

//                                                 <div className="form-group">
//                                                     <select
//                                                         id="salutation"
//                                                         name="salutation"
//                                                         className="form-control"
//                                                         value={formState.salutation}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             salutation: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}>
//                                                         <option>{SiteTrans.becomepartner_salutation[currentPage.locale.id]}</option>
//                                                         <option>Mr</option>
//                                                         <option>Mrs</option>
//                                                         <option>Miss</option>
//                                                         <option>Ms</option>
//                                                         <option>Dr</option>
//                                                         <option>Professor</option>
//                                                         <option>Other</option>
//                                                     </select>

//                                                     {errorState.salutation
//                                                         ? <span>{errorState.salutation}</span>
//                                                         : null}
//                                                 </div>

//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="firstname"
//                                                         id="firstname"
//                                                         placeholder={SiteTrans.becomepartner_fname[currentPage.locale.id]}
//                                                         value={formState.firstname}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             firstname: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.firstname
//                                                         ? <span>{errorState.firstname}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="lastname"
//                                                         id="lastname"
//                                                         placeholder={SiteTrans.becomepartner_lname[currentPage.locale.id]}
//                                                         value={formState.lastname}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             lastname: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.lastname
//                                                         ? <span>{errorState.lastname}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="role_or_position"
//                                                         id="role_or_position"
//                                                         placeholder={SiteTrans.becomepartner_role[currentPage.locale.id]}
//                                                         value={formState.role_or_position}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             role_or_position: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.role_or_position
//                                                         ? <span>{errorState.role_or_position}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="company"
//                                                         id="company"
//                                                         placeholder={SiteTrans.becomepartner_company[currentPage.locale.id]}
//                                                         value={formState.company}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             company: e.target.value
//                                                         });
//                                                             checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.company
//                                                         ? <span>{errorState.company}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="company_website"
//                                                         id="company_website"
//                                                         placeholder={SiteTrans.becomepartner_company_website[currentPage.locale.id]}
//                                                         value={formState.company_website}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             company_website: e.target.value
//                                                         });
//                                                             checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.company_website
//                                                         ? <span>{errorState.company_website}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="email"
//                                                         id="email"
//                                                         placeholder={SiteTrans.becomepartner_email[currentPage.locale.id]}
//                                                         value={formState.email}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             email: e.target.value
//                                                         });
//                                                             checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.email
//                                                         ? <span>{errorState.email}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="phone"
//                                                         id="phone"
//                                                         placeholder={SiteTrans.becomepartner_phone[currentPage.locale.id]}
//                                                         value={formState.phone}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             phone: e.target.value
//                                                         });
//                                                             checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}/> {errorState.phone
//                                                         ? <span>{errorState.phone}</span>
//                                                         : null}

//                                                 </div>
//                                             </div>

//                                             <div className="col-md-4">
                                                      
//                                                 <div className="form-group">
//                                                     <select
//                                                         id="countryid"
//                                                         name="countryid"
//                                                         className="form-control"
//                                                         value={formState.countryid}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             countryid: e.target.value,
//                                                             country: e.target.value
//                                                         });
//                                                             checkValidationAfterSubmit(e);
//                                                         // addSubmission(e)
//                                                     }}>
//                                                         <option value="">{SiteTrans.becomepartner_country[currentPage.locale.id]}</option>
//                                                         <CountryListTrans lang={currentPage.locale.id}/>
//                                                         {/* <option value="AF">Afghanistan</option>
//                                                         <option value="AX">Aland Islands</option>
//                                                         <option value="AL">Albania</option>
//                                                         <option value="DZ">Algeria</option>
//                                                         <option value="AS">American Samoa</option>
//                                                         <option value="AD">Andorra</option>
//                                                         <option value="AO">Angola</option>
//                                                         <option value="AI">Anguilla</option>
//                                                         <option value="AQ">Antarctica</option>
//                                                         <option value="AG">Antigua and Barbuda</option>
//                                                         <option value="AR">Argentina</option>
//                                                         <option value="AM">Armenia</option>
//                                                         <option value="AW">Aruba</option>
//                                                         <option value="AU">Australia</option>
//                                                         <option value="AT">Austria</option>
//                                                         <option value="AZ">Azerbaijan</option>
//                                                         <option value="BS">Bahamas</option>
//                                                         <option value="BH">Bahrain</option>
//                                                         <option value="BD">Bangladesh</option>
//                                                         <option value="BB">Barbados</option>
//                                                         <option value="BY">Belarus</option>
//                                                         <option value="BE">Belgium</option>
//                                                         <option value="BZ">Belize</option>
//                                                         <option value="BJ">Benin</option>
//                                                         <option value="BM">Bermuda</option>
//                                                         <option value="BT">Bhutan</option>
//                                                         <option value="BO">Bolivia</option>
//                                                         <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
//                                                         <option value="BA">Bosnia and Herzegovina</option>
//                                                         <option value="BW">Botswana</option>
//                                                         <option value="BV">Bouvet Island</option>
//                                                         <option value="BR">Brazil</option>
//                                                         <option value="IO">British Indian Ocean Territory</option>
//                                                         <option value="BN">Brunei Darussalam</option>
//                                                         <option value="BG">Bulgaria</option>
//                                                         <option value="BF">Burkina Faso</option>
//                                                         <option value="BI">Burundi</option>
//                                                         <option value="KH">Cambodia</option>
//                                                         <option value="CM">Cameroon</option>
//                                                         <option value="CA">Canada</option>
//                                                         <option value="CV">Cape Verde</option>
//                                                         <option value="KY">Cayman Islands</option>
//                                                         <option value="CF">Central African Republic</option>
//                                                         <option value="TD">Chad</option>
//                                                         <option value="CL">Chile</option>
//                                                         <option value="CN">China</option>
//                                                         <option value="CX">Christmas Island</option>
//                                                         <option value="CC">Cocos (Keeling) Islands</option>
//                                                         <option value="CO">Colombia</option>
//                                                         <option value="KM">Comoros</option>
//                                                         <option value="CG">Congo</option>
//                                                         <option value="CD">Congo, Democratic Republic of the Congo</option>
//                                                         <option value="CK">Cook Islands</option>
//                                                         <option value="CR">Costa Rica</option>
//                                                         <option value="CI">Cote D'Ivoire</option>
//                                                         <option value="HR">Croatia</option>
//                                                         <option value="CU">Cuba</option>
//                                                         <option value="CW">Curacao</option>
//                                                         <option value="CY">Cyprus</option>
//                                                         <option value="CZ">Czech Republic</option>
//                                                         <option value="DK">Denmark</option>
//                                                         <option value="DJ">Djibouti</option>
//                                                         <option value="DM">Dominica</option>
//                                                         <option value="DO">Dominican Republic</option>
//                                                         <option value="EC">Ecuador</option>
//                                                         <option value="EG">Egypt</option>
//                                                         <option value="SV">El Salvador</option>
//                                                         <option value="GQ">Equatorial Guinea</option>
//                                                         <option value="ER">Eritrea</option>
//                                                         <option value="EE">Estonia</option>
//                                                         <option value="ET">Ethiopia</option>
//                                                         <option value="FK">Falkland Islands (Malvinas)</option>
//                                                         <option value="FO">Faroe Islands</option>
//                                                         <option value="FJ">Fiji</option>
//                                                         <option value="FI">Finland</option>
//                                                         <option value="FR">France</option>
//                                                         <option value="GF">French Guiana</option>
//                                                         <option value="PF">French Polynesia</option>
//                                                         <option value="TF">French Southern Territories</option>
//                                                         <option value="GA">Gabon</option>
//                                                         <option value="GM">Gambia</option>
//                                                         <option value="GE">Georgia</option>
//                                                         <option value="DE">Germany</option>
//                                                         <option value="GH">Ghana</option>
//                                                         <option value="GI">Gibraltar</option>
//                                                         <option value="GR">Greece</option>
//                                                         <option value="GL">Greenland</option>
//                                                         <option value="GD">Grenada</option>
//                                                         <option value="GP">Guadeloupe</option>
//                                                         <option value="GU">Guam</option>
//                                                         <option value="GT">Guatemala</option>
//                                                         <option value="GG">Guernsey</option>
//                                                         <option value="GN">Guinea</option>
//                                                         <option value="GW">Guinea-Bissau</option>
//                                                         <option value="GY">Guyana</option>
//                                                         <option value="HT">Haiti</option>
//                                                         <option value="HM">Heard Island and Mcdonald Islands</option>
//                                                         <option value="VA">Holy See (Vatican City State)</option>
//                                                         <option value="HN">Honduras</option>
//                                                         <option value="HK">Hong Kong</option>
//                                                         <option value="HU">Hungary</option>
//                                                         <option value="IS">Iceland</option>
//                                                         <option value="IN">India</option>
//                                                         <option value="ID">Indonesia</option>
//                                                         <option value="IR">Iran, Islamic Republic of</option>
//                                                         <option value="IQ">Iraq</option>
//                                                         <option value="IE">Ireland</option>
//                                                         <option value="IM">Isle of Man</option>
//                                                         <option value="IL">Israel</option>
//                                                         <option value="IT">Italy</option>
//                                                         <option value="JM">Jamaica</option>
//                                                         <option value="JP">Japan</option>
//                                                         <option value="JE">Jersey</option>
//                                                         <option value="JO">Jordan</option>
//                                                         <option value="KZ">Kazakhstan</option>
//                                                         <option value="KE">Kenya</option>
//                                                         <option value="KI">Kiribati</option>
//                                                         <option value="KP">Korea, Democratic People's Republic of</option>
//                                                         <option value="KR">Korea, Republic of</option>
//                                                         <option value="XK">Kosovo</option>
//                                                         <option value="KW">Kuwait</option>
//                                                         <option value="KG">Kyrgyzstan</option>
//                                                         <option value="LA">Lao People's Democratic Republic</option>
//                                                         <option value="LV">Latvia</option>
//                                                         <option value="LB">Lebanon</option>
//                                                         <option value="LS">Lesotho</option>
//                                                         <option value="LR">Liberia</option>
//                                                         <option value="LY">Libyan Arab Jamahiriya</option>
//                                                         <option value="LI">Liechtenstein</option>
//                                                         <option value="LT">Lithuania</option>
//                                                         <option value="LU">Luxembourg</option>
//                                                         <option value="MO">Macao</option>
//                                                         <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
//                                                         <option value="MG">Madagascar</option>
//                                                         <option value="MW">Malawi</option>
//                                                         <option value="MY">Malaysia</option>
//                                                         <option value="MV">Maldives</option>
//                                                         <option value="ML">Mali</option>
//                                                         <option value="MT">Malta</option>
//                                                         <option value="MH">Marshall Islands</option>
//                                                         <option value="MQ">Martinique</option>
//                                                         <option value="MR">Mauritania</option>
//                                                         <option value="MU">Mauritius</option>
//                                                         <option value="YT">Mayotte</option>
//                                                         <option value="MX">Mexico</option>
//                                                         <option value="FM">Micronesia, Federated States of</option>
//                                                         <option value="MD">Moldova, Republic of</option>
//                                                         <option value="MC">Monaco</option>
//                                                         <option value="MN">Mongolia</option>
//                                                         <option value="ME">Montenegro</option>
//                                                         <option value="MS">Montserrat</option>
//                                                         <option value="MA">Morocco</option>
//                                                         <option value="MZ">Mozambique</option>
//                                                         <option value="MM">Myanmar</option>
//                                                         <option value="NA">Namibia</option>
//                                                         <option value="NR">Nauru</option>
//                                                         <option value="NP">Nepal</option>
//                                                         <option value="NL">Netherlands</option>
//                                                         <option value="AN">Netherlands Antilles</option>
//                                                         <option value="NC">New Caledonia</option>
//                                                         <option value="NZ">New Zealand</option>
//                                                         <option value="NI">Nicaragua</option>
//                                                         <option value="NE">Niger</option>
//                                                         <option value="NG">Nigeria</option>
//                                                         <option value="NU">Niue</option>
//                                                         <option value="NF">Norfolk Island</option>
//                                                         <option value="MP">Northern Mariana Islands</option>
//                                                         <option value="NO">Norway</option>
//                                                         <option value="OM">Oman</option>
//                                                         <option value="PK">Pakistan</option>
//                                                         <option value="PW">Palau</option>
//                                                         <option value="PS">Palestinian Territory, Occupied</option>
//                                                         <option value="PA">Panama</option>
//                                                         <option value="PG">Papua New Guinea</option>
//                                                         <option value="PY">Paraguay</option>
//                                                         <option value="PE">Peru</option>
//                                                         <option value="PH">Philippines</option>
//                                                         <option value="PN">Pitcairn</option>
//                                                         <option value="PL">Poland</option>
//                                                         <option value="PT">Portugal</option>
//                                                         <option value="PR">Puerto Rico</option>
//                                                         <option value="QA">Qatar</option>
//                                                         <option value="RE">Reunion</option>
//                                                         <option value="RO">Romania</option>
//                                                         <option value="RU">Russian Federation</option>
//                                                         <option value="RW">Rwanda</option>
//                                                         <option value="BL">Saint Barthelemy</option>
//                                                         <option value="SH">Saint Helena</option>
//                                                         <option value="KN">Saint Kitts and Nevis</option>
//                                                         <option value="LC">Saint Lucia</option>
//                                                         <option value="MF">Saint Martin</option>
//                                                         <option value="PM">Saint Pierre and Miquelon</option>
//                                                         <option value="VC">Saint Vincent and the Grenadines</option>
//                                                         <option value="WS">Samoa</option>
//                                                         <option value="SM">San Marino</option>
//                                                         <option value="ST">Sao Tome and Principe</option>
//                                                         <option value="SA">Saudi Arabia</option>
//                                                         <option value="SN">Senegal</option>
//                                                         <option value="RS">Serbia</option>
//                                                         <option value="CS">Serbia and Montenegro</option>
//                                                         <option value="SC">Seychelles</option>
//                                                         <option value="SL">Sierra Leone</option>
//                                                         <option value="SG">Singapore</option>
//                                                         <option value="SX">Sint Maarten</option>
//                                                         <option value="SK">Slovakia</option>
//                                                         <option value="SI">Slovenia</option>
//                                                         <option value="SB">Solomon Islands</option>
//                                                         <option value="SO">Somalia</option>
//                                                         <option value="ZA">South Africa</option>
//                                                         <option value="GS">South Georgia and the South Sandwich Islands</option>
//                                                         <option value="SS">South Sudan</option>
//                                                         <option value="ES">Spain</option>
//                                                         <option value="LK">Sri Lanka</option>
//                                                         <option value="SD">Sudan</option>
//                                                         <option value="SR">Suriname</option>
//                                                         <option value="SJ">Svalbard and Jan Mayen</option>
//                                                         <option value="SZ">Swaziland</option>
//                                                         <option value="SE">Sweden</option>
//                                                         <option value="CH">Switzerland</option>
//                                                         <option value="SY">Syrian Arab Republic</option>
//                                                         <option value="TW">Taiwan, Province of China</option>
//                                                         <option value="TJ">Tajikistan</option>
//                                                         <option value="TZ">Tanzania, United Republic of</option>
//                                                         <option value="TH">Thailand</option>
//                                                         <option value="TL">Timor-Leste</option>
//                                                         <option value="TG">Togo</option>
//                                                         <option value="TK">Tokelau</option>
//                                                         <option value="TO">Tonga</option>
//                                                         <option value="TT">Trinidad and Tobago</option>
//                                                         <option value="TN">Tunisia</option>
//                                                         <option value="TR">Turkey</option>
//                                                         <option value="TM">Turkmenistan</option>
//                                                         <option value="TC">Turks and Caicos Islands</option>
//                                                         <option value="TV">Tuvalu</option>
//                                                         <option value="UG">Uganda</option>
//                                                         <option value="UA">Ukraine</option>
//                                                         <option value="AE">United Arab Emirates</option>
//                                                         <option value="GB">United Kingdom</option>
//                                                         <option value="US">United States</option>
//                                                         <option value="UM">United States Minor Outlying Islands</option>
//                                                         <option value="UY">Uruguay</option>
//                                                         <option value="UZ">Uzbekistan</option>
//                                                         <option value="VU">Vanuatu</option>
//                                                         <option value="VE">Venezuela</option>
//                                                         <option value="VN">Viet Nam</option>
//                                                         <option value="VG">Virgin Islands, British</option>
//                                                         <option value="VI">Virgin Islands, U.s.</option>
//                                                         <option value="WF">Wallis and Futuna</option>
//                                                         <option value="EH">Western Sahara</option>
//                                                         <option value="YE">Yemen</option>
//                                                         <option value="ZM">Zambia</option>
//                                                         <option value="ZW">Zimbabwe</option> */}
//                                                     </select>
//                                                     {errorState.countryid
//                                                         ? <span>{errorState.countryid}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-6">
//                                                 <div className="form-group">
//                                                     <select
//                                                         id="sector_of_interest"
//                                                         name="sector_of_interest"
//                                                         className="form-control"
//                                                         value={formState.sector_of_interest}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             sector_of_interest: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}>
                                                    
//                                                         <option>{SiteTrans.becomepartner_sector_interest[currentPage.locale.id]}</option>
                                                        
//                                                         {allWpSolution.map(item => (
//                                                             <option>{item.node.title}</option>
//                                                         ))}
//                                                         <option>Other</option>

//                                                         {/* <option>Medical Imaging</option>
//                                                         <option>Oncology</option>
//                                                         <option>Immunology</option>
//                                                         <option>Diagnostics</option>
//                                                         <option>Point of Care</option>
//                                                         <option>Cardiovascular</option>
//                                                         <option>Rehabilitation</option>
//                                                         <option>Rare Diseases</option>
//                                                         <option>Biotech Investments</option> */}





                                                        



//                                                     </select>
//                                                     {errorState.sector_of_interest
//                                                         ? <span>{errorState.sector_of_interest}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className={`col-md-6 ${sectorShowHide}`}>
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="sector_of_interest_other"
//                                                         id="sector_of_interest_other"
//                                                         placeholder={SiteTrans.becomepartner_sector_interest_other[currentPage.locale.id]}
//                                                         value={formState.sector_of_interest_other}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             sector_of_interest_other: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}/>
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-6">
//                                                 <div className="form-group">
//                                                     <select
//                                                         id="category"
//                                                         name="category"
//                                                         className="form-control"
//                                                         value={formState.category}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             category: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}>
//                                                         <option value="">{SiteTrans.becomepartner_category[currentPage.locale.id]}</option>
//                                                         <option>Buy product or services</option>
//                                                         <option>Looking for distribution partner</option>
//                                                         <option>Investment</option>
//                                                         <option>Other</option>
//                                                     </select>
//                                                     {errorState.category
//                                                         ? <span>{errorState.category}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className={`col-md-6 ${catShowHide}`}>
//                                                 <div className="form-group">
//                                                     <input
//                                                         type="text"
//                                                         className="form-control"
//                                                         name="category_other"
//                                                         id="category_other"
//                                                         placeholder={SiteTrans.becomepartner_category_other[currentPage.locale.id]}
//                                                         value={formState.category_other}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             category_other: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}/>
//                                                 </div>
//                                             </div>






//                                             <div class="col-md-6">
//                                                 <div className="form-group">
//                                                     <select id="typeofinquiry" name="Select Inquiry Type"
//                                                         onChange={(e) => {
//                                                             var inqID = e.target[e.target.selectedIndex].getAttribute('data-inqid');
//                                                             setFormState({
//                                                                 ...formState,
//                                                                 typeofinquiry: e.target.value,
//                                                                 inquiryid:inqID,
//                                                             });
//                                                             checkValidationAfterSubmit(e)
//                                                         }}
//                                                         className="form-control">
//                                                         <option value="">
//                                                             {SiteTrans.contact_inquiry_type[currentPage.locale.id]
//                                                             }
//                                                         </option>
//                                                         {allWpInquiryemail ?
//                                                         allWpInquiryemail.map((data, key) => (
//                                                             <option key={key} value={data.node.title} data-inqid={data.node.databaseId}>{data.node.title}</option>
//                                                         ))
//                                                         :null}
//                                                     </select> 
//                                                 {errorState.typeofinquiry
//                                                 ? (
//                                                     <span>{errorState.typeofinquiry}</span>
//                                                 )
//                                                 : null}
//                                                 </div>
//                                             </div>






//                                             <div className="col-md-12">
//                                                 <div className="form-group">
//                                                     <textarea
//                                                         name="inquiry"
//                                                         row="3"
//                                                         className="form-control"
//                                                         placeholder={SiteTrans.becomepartner_inquiry[currentPage.locale.id]}
//                                                         value={formState.inquiry}
//                                                         onChange={(e) => {
//                                                         setFormState({
//                                                             ...formState,
//                                                             inquiry: e.target.value
//                                                         });
//                                                         checkValidationAfterSubmit(e)
//                                                     }}/> {errorState.inquiry
//                                                         ? <span>{errorState.inquiry}</span>
//                                                         : null}
//                                                 </div>
//                                                 <div className="form-group">
//                                                     <Recaptcha
//                                                         ref={e => recaptchaInstance = e}
//                                                         render="explicit"
//                                                         sitekey="6Ld9CuogAAAAAGCHkeQ0UEP-uBCZN1_8tpgbmcPs"
//                                                         verifyCallback={(response) => {
//                                                         setCaptcha(true)
//                                                     }}
//                                                         onloadCallback={callback}/> {errorState.captcha
//                                                         ? <span>{errorState.captcha}</span>
//                                                         : null}
//                                                 </div>
//                                             </div>

//                                             <div className="col-md-12">
//                                                 <div className="checkbox">
//                                                     <label>
//                                                         <input
//                                                             type="checkbox"
//                                                             name="ageConsent"
//                                                             checked={formState.ageConsent}
//                                                             onChange={(e) => {
//                                                             setFormState({
//                                                                 ...formState,
//                                                                 ageConsent: !formState.ageConsent
//                                                             });
//                                                             checkValidationAfterSubmit(e)
//                                                         }}/> {SiteTrans.becomepartner_age_confirm[currentPage.locale.id]}
//                                                         {/* {currentPage.AdditionalFields.becomeConfirmMessage}                                   */}
//                                                         <br/> {errorState.ageConsent
//                                                             ? <span>{errorState.ageConsent}</span>
//                                                             : null}
//                                                     </label>
//                                                 </div>

//                                                 <div className="checkbox">
//                                                     <label>
//                                                         <input
//                                                             type="checkbox"
//                                                             name="dataConsent"
//                                                             checked={formState.dataConsent}
//                                                             onChange={(e) => {
//                                                             setFormState({
//                                                                 ...formState,
//                                                                 dataConsent: !formState.dataConsent
//                                                             });
//                                                             checkValidationAfterSubmit(e)
//                                                         }}/> {SiteTrans.becomepartner_consent[currentPage.locale.id]}
//                                                         {/* {currentPage.AdditionalFields.becomeConsentMessage}                                   */}
//                                                         <br/> {errorState.dataConsent
//                                                             ? <span>{errorState.dataConsent}</span>
//                                                             : null}
//                                                     </label>
//                                                 </div>

//                                                 <div className="checkbox">
//                                                     <label>
//                                                         <input
//                                                             type="checkbox"
//                                                             name="subscribeConsent"
//                                                             checked={formState.subscribeConsent}
//                                                             onChange={(e) => {
//                                                             setFormState({
//                                                                 ...formState,
//                                                                 subscribeConsent: !formState.subscribeConsent
//                                                             });
//                                                             checkValidationAfterSubmit(e)
//                                                         }}/>
//                                                         <span
//                                                             dangerouslySetInnerHTML={{
//                                                             __html: SiteTrans.becomepartner_subcrible[currentPage.locale.id]
//                                                         }}/> {errorState.subscribeConsent
//                                                             ? <span>{errorState.subscribeConsent}</span>
//                                                             : null}
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-12">
//                                                 <button type="button" className="readmore" onClick={addSubmission}>{SiteTrans.becomepartner_submit_lable[currentPage.locale.id]}</button>
//                                             </div>
//                                             {formState.error
//                                                 ? <div className="message-error">{formState.errorMsg}</div>
//                                                 : null}

//                                             {formState.statusMsg
//                                                 ? <div className="thankyoumessage mt-4">
//                                                         <strong>{formState.statusMsg}</strong>
//                                                     </div>
//                                                 : null}
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>

//                 </section>

               

//             </Layout>
//         </React.Fragment>
//     )
// }

// export default BecomePartner

// export const BecomePartnerPageQuery = graphql `
//     query BecomePartnerPageQuery($id: String!, $langCode: ID!) {
//         wpPage(id: { eq: $id }) {
//             title
//             content
//             slug
//             id,
//             featuredImage {
//                 node {
//                   sourceUrl
//                 }
//               }
            
//             seo {
//                 opengraphTitle
//                 opengraphDescription
//                   }
//             template {
//               templateName
//             }
//             locale {
//                 id
//                 locale
//             }
      
//         translated {
//         id
//         localizedWpmlUrl
//         locale {
//             id
//             locale
//         }
//         slug
//         title
//         }
            
//         }



//         allWpSolution(sort: {menuOrder: ASC} filter: {locale: {id: {eq: $langCode} } }) {
//             edges {
//                 node {
//                     id
//                     content
//                     title
//                     link
//                     localizedWpmlUrl
//                     our_solution_custom_fields {
//                     icon {
//                         altText
//                         sourceUrl
//                     }
//                     shortDescription
//                     }
//                 }
//             }
//         }

//         allWpInquiryemail(filter: {locale: {id: {eq: "en_US"}}}, sort: {menuOrder: ASC}) {
//             edges {
//               node {
//                 title
//                 databaseId
//               }
//             }
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


// // AdditionalFields {
// //                 heading
// //                 topheading
// //                 becomeText      
// //             }