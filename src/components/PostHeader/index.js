import { Link } from 'gatsby';
import React, {useEffect} from "react";
import {useStaticQuery, graphql} from 'gatsby';
import Aljlogo from "../../common/images/logo-blank.png";
import Menuclose from "../../common/images/menu-close.png";
import LiImg from "../../common/images/in.png";
import FbImg from "../../common/images/fb.png";
import InstaImg from "../../common/images/insta.png";
import YouImg from "../../common/images/yt.png";
// import {navigate, withPrefix} from "gatsby";
// import Function from '../../lib/functions';
import $ from 'jquery';
import LangConfig from "../LangConfig/LangConfig.json";
const Header = (props) => {
    const clickHandler = () => {
        $('.navbar-collapse').collapse('hide');
    }
    useEffect(() => handleComponentUpdated(), []);
    const handleComponentUpdated = () => {
        if (typeof window !== 'undefined') {
            // JavaScript Document  Function.LoadingAllSliderScript()
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

    // const _closeBtn = () => {
    //     $('.navbar-collapse').collapse('hide');
    // }

    const flatListToHierarchical = (data = [], {
        idKey = 'key',
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

    const data = useStaticQuery(graphql `
    {
        menuEn: wpMenu(name: {eq: "Primary Menu Clone"}) {
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
        menuAr: wpMenu(name: {eq: "Primary Menu Clone-ar"}) {
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
  `)
    // console.log('Top Navigation data.menuEn', data.menuEn); console.log('Top
    // Navigation data.menuAr', data.menuAr);
    var menuItems = flatListToHierarchical(props.lang === "en_US"
        ? data.menuEn.menuItems.nodes
        : data.menuAr.menuItems.nodes);

    return (
        <body data-spy="scroll" data-target=".menubx" data-offset="100" className="sc">
            <header className="whitebgnav">
                <a href="#/" className="menu-show mobile"> <em></em><em></em><em></em></a>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <div className="menuconainer">
                                <div className="closeMenu mobile"><img src={Menuclose} alt="img" /></div>
                                <ul className="menubx">
                                    {menuItems ?
                                        menuItems.map((item, key) => (
                                            item.children.length > 0 ?
                                                <li onClick={clickHandler}  onKeyDown={clickHandler} role="presentation" className="has-submenu">
                                                    <Link to={`/${LangConfig[props.lang]["slug"]}/${item.url.replace('/home/', '').replace('\/\/', '\/')}`} key={item.key} title={item.label} className={`menu-${item.databaseId}`}>{item.label}</Link>
                                                    <ul className="sub-menu">
                                                        {item.children.map(chld => (
                                                            <li onClick={clickHandler} onKeyDown={clickHandler} role="presentation">
                                                                <Link to={`/${LangConfig[props.lang]["slug"]}/${chld.url.replace('/home/', '').replace('\/', '')}`} key={chld.label} title={chld.label} className={`menu-${chld.databaseId}`} >{chld.label}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                :
                                                <li onClick={clickHandler}  onKeyDown={clickHandler} role="presentation">
                                                    <Link to={`/${LangConfig[props.lang]["slug"]}/${item.url.replace('/home/', '').replace('\/\/', '\/')}`} key={key} title={item.label} className={`menu-${item.databaseId}`} >{item.label}  </Link>
                                                </li>
                                        ))
                                        : null}
                                    {/* {props.translations && props.translations.length>0?
                                    <li onClick={clickHandler} className="has-submenu">
                                        <Link to={`#`}  title="label"  className={`menu-lang`}>Lang</Link>
                                        <ul className="sub-menu">
                                            {props.translations.map((item,key)=>(
                                        <li onClick={clickHandler}>
                                            <Link to={`${item.localizedWpmlUrl.replace('home/','')}`} key={item.key}   className={`menu-lang-child`} >{LangConfig[item.locale.id]["text"]}</Link> 
                                        </li>
                                            ))}
                                            </ul>
                                    </li>
                                    :null} */}
                                    {props.translations && props.translations.length > 0 ?
                                        <li>
                                            {
                                                props.translations.map((item, key) => (
                                                    <a href="#/" onClick={() => {
                                                        window.location = item.localizedWpmlUrl.replace('home/', '');
                                                    }} key={item.key} className={`menu-lang-child`} >{LangConfig[item.locale.id]["text"]}</a>
                                                ))
                                            }
                                        </li>
                                        : null}
                                </ul>
                                <div className="menusocial mobile">
                                    <p className="fallow-us">
                                        {
                                            props.lang === "en_US" ?
                                                <strong>Follow Us</strong>
                                                : <strong>تابعنا</strong>
                                        }
                                    </p>
                                    <ul className="d-flex">
                                        <li><a href="https://www.linkedin.com/company/alj/" target="_blank" rel="noreferrer"><img src={LiImg} alt="linkedin" /></a></li>
                                        <li><a href="https://www.facebook.com/Abdul.Latif.Jameel.Official" target="_blank" rel="noreferrer"><img src={FbImg} alt="fb" /></a></li>
                                        <li><a href="https://www.instagram.com/abdul_latif_jameel_official/" target="_blank" rel="noreferrer"><img src={InstaImg} alt="insta" /></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCM4oe4BmtP4YdKhJe0BGTbw" target="_blank" rel="noreferrer"><img src={YouImg} alt="youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto testrtt">
                            {
                                props.lang === "en_US" ?
                                    <a href="/en/" className="logo"><img src={Aljlogo} alt="logo" /></a>
                                    : <a href="/ar/" className="logo"><img src={Aljlogo} alt="logo" /></a>
                            }
                        </div>
                    </div>
                </div>
                <div className="pagescrollbar"><div className="progressbar"></div></div>
            </header>
        </body>
    )
}

export default Header
