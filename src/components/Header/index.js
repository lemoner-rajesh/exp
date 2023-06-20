// import { Link } from 'gatsby'
// import {AnchorLink} from "gatsby-plugin-anchor-links"
import React, {useEffect, useState} from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Aljlogo from "../../common/images/logo-blank.png";
import Topmenu from "../../common/images/topmenu.svg";
// import Menuclose from "../../common/images/menu-close.png";
// import LiImg from "../../common/images/in.png";
// import FbImg from "../../common/images/fb.png";
// import InstaImg from "../../common/images/insta.png";
// import YouImg from "../../common/images/yt.png";
// import {navigate, withPrefix} from "gatsby"
// import Function from '../../lib/functions';
// import {WP_URL, HTAccess_User, HTaccess_Pass, ENV} from '../../../apiHelper';
import $ from 'jquery';
import LangConfig from "../LangConfig/LangConfig.json";
// import {lang} from 'moment';
// import _ from 'lodash';

const Header = (props) => {

    let searchiconurl = 'https://media.aljhealth.com/wp-content/uploads/2022/06/23120102/search-black.png';
    let loadingiconurl = 'https://media.aljhealth.com/wp-content/uploads/2022/07/15121616/blue-spin.gif';

    const [menuClass,
        setMenuClass] = useState(false)
    const [skeyword,
        SetSkeyword] = useState('');
    const [searchResult,
        SetSearchResult] = useState('');
    const [searchResultLoop,
        SetSearchResultLoop] = useState('');
    const [searchPageIcon,
        SetSearchPageIcon] = useState(searchiconurl);
    const [partnersResult,
        SetPartnersResult] = useState('');
    const [pageResult,
        SetPageResult] = useState('');
    const [intheNewsResult,
        SetIntheNewsResult] = useState('');
    const [solutionsResult,
        SetSolutionsResult] = useState('');
    const [peoplesResult,
        SetPeoplesResult] = useState('');
    const [newsResult,
        SetNewsResult] = useState('');
    const [insightsResult,
        SetInsightsResult] = useState('');
    const [isActive,
        setIsActive] = useState(false);

    const showMenu = () => {
        setMenuClass(false);
        setTimeout(() => {
            let element = document.querySelector('.navigation');
            element
                .classList
                .toggle('show-menu-class');
        }, 200)
    }

    const hideMenu = () => {

        let element = document.querySelector('.navigation');
        element.classList.toggle('show-menu-class');

    }

    const flatListToHierarchical = (data = [], {
        idKey = 'id',
        parentKey = 'parentId',
        childrenKey = 'children'
    } = {}) => {
        const tree = [];
        const childrenOf = {};
        data.forEach((item) => {
            const newItem = {
                ...item
            };
            const {
                [idKey]: id,
                [parentKey]: parentId = 0
            } = newItem;
            childrenOf[id] = childrenOf[id] || [];
            newItem[childrenKey] = childrenOf[id];
            parentId
                ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
                : tree.push(newItem);
        });
        return tree;
    };

    const siteSearch = () => {

        if (skeyword !== null && skeyword !== '') {
            let searchlang = props.lang === "en_US"
                ? 'en'
                : props.lang === 'ar'
                    ? 'ar'
                    : 'tr';
            SetSearchPageIcon(loadingiconurl);
            var axios = require('axios');
            axios
                .get("https://2krdwpsvdf.execute-api.eu-west-2.amazonaws.com/prod/alj-health?keyword=" + skeyword + "&lang=" + searchlang + "&per_page=100")
                .then(function (response) {

                    if (response !== null && response !== '') {
                        SetSearchResult(response.data)
                        SetSearchResultLoop(response.data);
                    }

                    SetSearchPageIcon(searchiconurl);
                })
                .catch(function (error) {
                    SetSearchPageIcon(searchiconurl);
                    // console.log(error);
                });
        } else {
            SetSearchResult(null)
            SetSearchResultLoop(null);
            SetPartnersResult('');
            SetPageResult('');
            SetSolutionsResult('');
            SetPartnersResult('');
            SetIntheNewsResult('');
            SetNewsResult('');
            SetInsightsResult('');
            SetPeoplesResult('');
        }
    }

    function filterSearch(type, active) {
        SetSearchResultLoop(type)
        setIsActive(active);
    }

    const handleSearchChange = event => {
        SetSkeyword(event.target.value);
    };

    //********* Press release dev header  *********/
    const menuqry = useStaticQuery(graphql `
   {
      menuEn: wpMenu(name: {eq: "Main Top Navigation EN"}) {
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

      menuAr: wpMenu(name: {eq: "Main Top Navigation AR"}) {
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
      menuTr:  wpMenu(name: {eq: "Main Top Navigation TR"}) {
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
      menubackgroundsEN: allWpMenubackground(filter: {locale: {id: {eq: "en_US"}}}) {
        edges {
          node {
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }

      menubackgroundsAR: allWpMenubackground(filter: {locale: {id: {eq: "ar"}}}) {
        edges {
          node {
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }

      menubackgroundsTR: allWpMenubackground(filter: {locale: {id: {eq: "tr_TR"}}}) {
        edges {
          node {
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
  }
  `)

    const menulist = props.lang === "en_US" ? menuqry.menuEn : props.lang === "ar" ? menuqry.menuAr : menuqry.menuEn
    console.log("Headers Menu",props.lang)
    console.log("Headers Menu",menulist)
    // using Array sort and Math.random
    const menubackgroundslist = props.lang === "en_US"
        ? menuqry.menubackgroundsEN
        : props.lang === "ar"
            ? menuqry.menubackgroundsAR
            : menuqry.menubackgroundsTR

    const menubackgrounds = menubackgroundslist && menubackgroundslist.edges ? menubackgroundslist.edges : null
    var menubg = menubackgrounds ? menubackgrounds[Math.floor(Math.random() * menubackgrounds.length)]:null;

    var menuItems = menulist && menulist.menuItems ? flatListToHierarchical(menulist.menuItems.nodes):null;

    // console.log('Top Manu navigation', menuItems)

    useEffect(() => {

        if (searchResult !== null && searchResult !== '') {
            let partnerslist,
                solutionslist,
                poepleslist,
                newslist,
                insightslights,
                inthenewslist,
                pagelist

            partnerslist = searchResult.filter(list => list.subtype === 'partners');
            SetPartnersResult(partnerslist);

            pagelist = searchResult.filter(list => list.subtype === 'page');
            SetPageResult(pagelist)

            solutionslist = searchResult.filter(list => list.subtype === 'solutions');
            SetSolutionsResult(solutionslist);

            inthenewslist = searchResult.filter(list => list.subtype === 'inthenews');
            SetIntheNewsResult(inthenewslist);

            newslist = searchResult.filter(list => list.subtype === 'pressrelease');
            SetNewsResult(newslist);

            insightslights = searchResult.filter(list => list.subtype === 'perspective');
            SetInsightsResult(insightslights);

            poepleslist = searchResult.filter(list => list.subtype === 'ourpeople');
            SetPeoplesResult(poepleslist);

        }

    }, [searchResult]);

    useEffect(() => {
        handleComponentMounted()
    }, [menuClass]);
    const handleComponentMounted = () => {
        if (typeof window !== 'undefined') {

            if ($('header').offset().top > 50) {
                $("header").addClass("sticky");
            }

            $(window)
                .on("scroll", function () {
                    if ($(document).scrollTop() > 50) {
                        $(".alj-nav").addClass("sticky");
                    } else {
                        $(".alj-nav").removeClass("sticky");
                    }
                });
        }
    }
    return (
        <header className={props.cls}>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="navigation-wrapper">
                            <a href="javascript:void(0);" onClick={showMenu}><img className="menu-icon" src={Topmenu} alt="menu" /></a>
                            <div className="navigation">
                                <div className="overlay-menu-bg"></div>
                                <div className="menu-bg-alignment" style={{ background: `url(${menubg && menubg.node ?menubg.node.featuredImage.node.sourceUrl:"https://media.aljhealth.com/wp-content/uploads/2022/07/28071758/background-two-try.jpg"})` }}>
                                    <a href="javascript:void(0);" onClick={() => hideMenu()} className="close-menu"> <img src="https://media.aljhealth.com/wp-content/uploads/2022/06/03124427/cross-mark.png" alt="Close" /></a>
                                    <div className="inner-wrapper">
                                        <ul>
                                            {menuItems ?
                                                menuItems.map((item, key) => (
                                                    item.children.length > 0 ?
                                                        <li className='mainMenuListWrapper'>
                                                            <Link
                                                                to={`${item.url.replace('/home/', '').replace('\/\/', '\/') === '#' ? '#/' : ''}`}
                                                                key={item.key} title={item.label} className={`menu-${item.databaseId} ${item.children.length > 0 ? '' : 'menu-no-bg'} mainmenu mainMenuClick`}>{item.label}</Link>
                                                            <ul className="sub-menu subMenu">
                                                                {item.children.map(chld => (
                                                                    <li>
                                                                        {
                                                                            <li><Link to={`/${LangConfig[props.lang]["slug"]}/${chld.url.replace('/home/', '').replace('\/', '')}/`} key={chld.label} title={chld.label} className={`menu-${chld.databaseId}`}>{chld.label}</Link></li>
                                                                        }
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                        :
                                                        <li>
                                                            <Link to={`/${LangConfig[props.lang]["slug"]}${item.url.replace('/home/', '').replace('\/\/', '\/')}`} onClick={`/${LangConfig[props.lang]["slug"]}/${item.url !== null ? item.url.replace('/home/', '').replace('\/\/', '\/') : ''}`} key={key} title={item.label} className={`menu-${item.databaseId} parentmenu menu-no-bg`}>{item.label}</Link>
                                                        </li>
                                                ))
                                                : null
                                            }
                                            <li className='mainMenuListWrapper'>
                                                <a href="#/" className="language-map mainMenuClick"><img src='https://media.aljhealth.com/wp-content/uploads/2022/06/06080429/language-map.png' alt="img" /></a>
                                                <ul className="sub-menu subMenu lang-menu-ar">
                                                    {props.translations && props.translations.length > 0 ?
                                                        <>  {
                                                            props.translations.map((item, key) => (
                                                                <li className={item.locale.id === "ar" ? 'arabic_lang' : ''}>
                                                                    <Link to={item.localizedWpmlUrl.replace('home/', '')} key={item.key} className={`menu-lang-child`}  >{LangConfig[item.locale.id]["text"]}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                        </>
                                                        : null}
                                                    {/* {props.lang!=="en_US" ? 
                                                    <li><a href="/en">English</a></li>
                                                    :null}
                                                    {props.lang!=="ar" ? 
                                                    <li><a href="/ar">Arabic</a></li>
                                                    :null}
                                                    {props.lang!=="tr_TR" ? 
                                                    <li><a href="/tr">Turkish</a></li>
                                                    :null} */}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mr-auto col-auto">
                        <a href="#/" data-toggle="modal" data-target="#searchmodal">
                            <img className='search-white-icon' src='https://media.aljhealth.com/wp-content/uploads/2022/06/23113736/search-white.png' alt="img" />
                            <img className='search-black-icon' src='https://media.aljhealth.com/wp-content/uploads/2022/06/23120102/search-black.png' alt="img" />
                        </a>
                    </div>

                    <div className="search-model-container">
                        <div className="modal fade" id="searchmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><img src='https://media.aljhealth.com/wp-content/uploads/2022/06/24084158/search-closepop.png' alt="img" /></span>
                                        </button>
                                        <div className="container">
                                            <div className="search-wrapper">
                                                <div className="styled-search-root-sc-17d2bsu-0 fxTRBf">
                                                    <form className="styled-search-box-sc-fds6jn-0 buxDGr" action='#'>
                                                        <input className="SearchInput" type="text" placeholder="Search" aria-label="Search" onChange={handleSearchChange} onKeyUp={siteSearch} onKeyPress={(ev) => {
                                                            if (ev.key === "Enter") {
                                                                ev.preventDefault();
                                                                siteSearch()
                                                            }
                                                        }} />
                                                        {searchPageIcon ?
                                                            <img className="SearchPageIcon" src={searchPageIcon} onClick={siteSearch} alt="img" />
                                                            : null}
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="search-scroll">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="search-pagination">
                                                            <ul>
                                                                {pageResult !== "" && pageResult.length > 0 ?
                                                                    <li><a className={isActive === 'pageResult' ? 'active' : ''} onClick={() => filterSearch(pageResult, 'pageResult')}>Page ({pageResult.length})</a></li>
                                                                    : null}
                                                                {solutionsResult !== "" && solutionsResult.length > 0 ?
                                                                    <li><a className={isActive === 'solutionsResult' ? 'active' : ''} onClick={() => filterSearch(solutionsResult, 'solutionsResult')}>Solutions ({solutionsResult.length})</a></li>
                                                                    : null}
                                                                {partnersResult !== "" && partnersResult.length > 0 ?
                                                                    <li><a className={isActive === 'partnersResult' ? 'active' : ''} onClick={() => filterSearch(partnersResult, 'partnersResult')}>Our Partner ({partnersResult.length})</a></li>
                                                                    : null}

                                                                {peoplesResult !== "" && peoplesResult.length > 0 ?
                                                                    <li><a className={isActive === 'peoplesResult' ? 'active' : ''} onClick={() => filterSearch(peoplesResult, 'peoplesResult')}> Our Peoples ({peoplesResult.length})</a></li>
                                                                    : null}

                                                                {newsResult !== "" && newsResult.length > 0 ?
                                                                    <li><a className={isActive === 'newsResult' ? 'active' : ''} onClick={() => filterSearch(newsResult, 'newsResult')}>News ({newsResult.length})</a></li>
                                                                    : null}

                                                                {intheNewsResult !== "" && intheNewsResult.length > 0 ?
                                                                    <li><a className={isActive === 'intheNewsResult' ? 'active' : ''} onClick={() => filterSearch(intheNewsResult, 'intheNewsResult')}>In the News ({intheNewsResult.length})</a></li>
                                                                    : null}

                                                                {insightsResult !== "" && insightsResult.length > 0 ?
                                                                    <li><a className={isActive === 'insightsResult' ? 'active' : ''} onClick={() => filterSearch(insightsResult, 'insightsResult')}>Insights ({insightsResult.length})</a></li>
                                                                    : null}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`search-result ${props.lang === "ar" ? 'search-result-ar' : ''}`}>
                                                    <div className="row mt-3">
                                                        <div className="col-md-12 mb-4 text-right">
                                                            {searchResultLoop !== null && searchResultLoop !== '' ?
                                                                <>
                                                                    {searchResultLoop.length} results
                                                                </>
                                                                : null}
                                                        </div>
                                                        {
                                                            searchResultLoop !== null && searchResultLoop !== '' ?
                                                                searchResultLoop.map(result => (
                                                                    <div className="col-md-6 mb-4">
                                                                        <a href={result.url.replace(/^.*\/\/[^\/]+/, '')} target="_blank" rel="noreferrer">
                                                                            <span dangerouslySetInnerHTML={{ __html: result.title }}></span>
                                                                        </a>
                                                                    </div>
                                                                ))
                                                                : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        {
                            props.lang === "en_US" ?
                                <Link to="/en/" className="logo"><img src={Aljlogo} alt="Abdul Latif Jameel Logo" /></Link>
                                : <Link to="/ar/" className="logo"><img src={Aljlogo} alt="Abdul Latif Jameel Logo" /></Link>
                        }
                    </div>
                </div>
            </div>
            <div className="pagescrollbar"><div className="progressbar"></div></div>
        </header>
    )
}

export default Header
