// JavaScript Document
//var vid = $("#video");
//add
$(document).ready(function () {
    homePageSliderFun();
    otherSliderFun();
    cookieStatusFun();
    //zohair code ends
    newsBoxFun();
    // homeNewsSliderFun();
    // googleMapFun();
    //hompage video code starts
    jQuery(function () {
        // console.log('JS Ready!');
        var body = jQuery('body');
        body.on('click', '.play-selected-video', function () {
            var currentVideo = jQuery(this).data('video');
            jQuery('.play-selected-video').removeClass('active-video');
            var video = document.getElementById(currentVideo);
            video.load();
            jQuery(this).addClass('active-video');
            showVideoBox(currentVideo);
        })

        jQuery('select').on('change', function () {
            var currentVideo = jQuery(this).val();
            showVideoBox(currentVideo);
        });

        body.on('click', '.video-controller', function () {
            var videoSelector = jQuery(this).data('video');
            var currentVideo = jQuery('#' + videoSelector);
            if (jQuery(this).hasClass('btn-play')) {
                currentVideo.get(0).play();
                jQuery(this).hide();
                jQuery('.btn-pause').show();
                setTimeout(function () {
                    jQuery('.video-controller-wrapper').fadeOut();
                }, 1000)
                currentVideo.on('ended', function () {
                    jQuery('.btn-pause').hide();
                    jQuery('.btn-play').show();
                    jQuery('.video-controller-wrapper').fadeIn();
                });
            } else if (jQuery(this).hasClass('btn-pause')) {
                currentVideo.get(0).pause();
                jQuery(this).hide();
                jQuery('.btn-play').show();
            }
        });
        body.on('click', '.country-item', function () {
            jQuery('.video-controller-wrapper').fadeIn();
        })
    });
    //homepage video code ends
    // new WOW().init();
    $('.sc').smoothScroll();
    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    //  Ahmar  
    $(".menubx li.has-submenu").prepend("<i class='sidr-dropdown-toggler'></i>");
    if ($(window).width() < 991) {
        $(".menu-show").click(function () {
            $(this).toggleClass("active");
            $(".menuconainer").addClass("active");
        });
        $(".closeMenu").click(function () {
            $(".menuconainer, .menu-show").removeClass("active");
        });
        $(".menubx li.has-submenu > i").click(function () {
            $(this).parents(".has-submenu").find(".sub-menu").slideToggle();
            $(this).parents(".has-submenu").toggleClass("nav-item-open");
        });
    }
    $(document).on("click", ".footnotes h5", function (e) {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    var idcount = 1;
    if (!$('.newsinner .newscontent h4').length) {
        $('.headlist').hide();
    }

    $('.newsinner .newscontent h4').each(function () {
        $(this).attr('id', 'headlist' + idcount);
        var litext = $(this).text();
        $('.headlist ul').append('<li><a href="#headlist' + idcount + '">' + litext + '</a></li>');
        idcount++;
    });

    $(document).on("click", ".headlist ul li", function (e) {
        $('.headlist ul li').removeClass('active');
        $(this).addClass('active');
    });

    $('.related-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 800,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".shareclick").click(function () {
        $(this).next(".aljshare").toggleClass("active");
    });

    $(".ajaxloadmorebutton").click(function () {
        setTimeout(function () {
            $(".shareclick").click(function () {
                $(this).next(".aljshare").toggleClass("active");
            });
        }, 500);
    });
    // $('.datepicker').datepicker('destroy');
    $('.datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    $(function () {
        $(".datepicker").datepicker({ dateFormat: "yyyy-mm-dd" });
    });

    // People Page accordian
    $(".myaccordian h3").click(function () {
        $(this).parents(".accrbox").siblings(".accrbox").find("h3").removeClass("active");
        $(this).parents(".accrbox").siblings(".accrbox").find(".accbody").slideUp();
        $(this).toggleClass("active");
        $(this).parents(".accrbox").find(".accbody").slideToggle();
    });
    //  Ahmar
    // vid.ontimeupdate = function(){
    //   var percentage = ( vid.currentTime / vid.duration ) * 100;
    //   $("#custom-seekbar span").css("width", percentage+"%");
    // };

    // $("#custom-seekbar").on("click", function(e){
    //     var offset = $(this).offset();
    //     var left = (e.pageX - offset.left);
    //     var totalWidth = $("#custom-seekbar").width();
    //     var percentage = ( left / totalWidth );
    //     var vidTime = vid.duration * percentage;
    //     vid.currentTime = vidTime;
    // });

    // Smooth scroll
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                // - 70 is the offset/top margin
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 50
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
                    if (history.pushState) {
                        history.pushState(null, null, hash);
                    } else {
                        window.location.hash = hash;
                    }
                });
                return false;
            } // End if
    });

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    menuActiveFun();

    // let websiteConfig;
    // var conf = $.extend({}, {
    //     templatePath: '.',
    //     flexsliderOptions: {
    //         animation: 'slide',
    //         animationDuration :600,
    //         slideshowSpeed:7000,
    //         slideshow:false,
    //         pauseOnHover:true
    //     }
    // }, typeof websiteConfig != 'undefined' ? websiteConfig : {});
    // $('.flexslider').filter(function() {
    //     return $('.slides > li', this).length >= 2
    // }).each(function() {
    //     var _this = this;
    //     $('.slides > li', this).hide();
    //     $(this).flexslider($.extend({}, conf.flexsliderOptions, {
    //         start: function(slider) {
    //             if (slider.slides.eq(slider.currentSlide).is(':has(iframe, embed, object)')) {
    //                 $('.flex-control-nav', _this).hide()
    //             }
    //         },
    //         before: function(slider) {
    //             var descs = $(_this).next('.descriptions').find('.animated-text');
    //             if (slider.animatingTo != slider.currentSlide && descs.length >= slider.slides.length) {
    //                 descs.filter(':visible').fadeOut(conf.flexsliderOptions.animationDuration / 2, function() {
    //                     descs.eq(slider.animatingTo).fadeIn(conf.flexsliderOptions.animationDuration / 2)
    //                 })
    //             }
    //             if ($(_this).is(':not(.fixed)')) {
    //                 $(_this).animate({
    //                     height: slider.slides.eq(slider.animatingTo).height()
    //                 }, conf.flexsliderOptions.animationDuration)
    //             }
    //             if (slider.slides.eq(slider.animatingTo).is(':has(iframe, embed, object)')) {
    //                 $('.flex-control-nav', _this).fadeOut(100)
    //             } else {
    //                 $('.flex-control-nav', _this).fadeIn(100)
    //             }
    //         }
    //     })).hover(function() {
    //         $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 1)
    //     }, function() {
    //         $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 0)
    //     });
    //     $('.flexslider .flex-direction-nav a').hover(function() {
    //         $(this).stop(!0).fadeTo(100, 1)
    //     }, function() {
    //         $(this).stop(!0).fadeTo(100, 1)
    //     })
    // });
});


$(window).scroll(function () {
    //   if ($(document).scrollTop() > 50) { 
    //    $(".alj-nav").css("background-color", "#0d233b"); 
    //  } else {
    //    $(".alj-nav").css("background-color", "transparent"); 
    //  }

    if ($(document).scrollTop() > 50) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }

    // Single News page Menu Scroll Bar
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var wheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / wheight) * 100;
    $(".progressbar").css("width", scrolled + "%");
    // Single News page Menu Scroll Bar
    if ($('.impact-section .text h5').visible()) {
        // $('#video')[0].pause();
        document.querySelectorAll('video').forEach(vid => vid.pause());

    }

    if ($('.whatwedo-section .text h5').visible()) {
        // $('#video')[0].pause();
        document.querySelectorAll('video').forEach(vid => vid.pause());

    }
});

//code added by zohair for press release
function showMore() {
    const lengInvisible = jQuery('div.newsBox.invisible').length;
    const lenVisible = jQuery('div.newsBox.visible').length;
    const lengInvisibleTotal = jQuery('div.newsBox').length - lenVisible;

    if (lengInvisible > 0) {
        let count = parseInt(lenVisible) + 6;
        jQuery(`div.newsBox:lt(${count})`).removeClass().addClass('col-sm-6 newsBox visible');
        jQuery('div.newsBox.visible').show(500);
    }
    if (jQuery('div.newsBox.invisible').length == 0) {
        jQuery('#showMoreContainer').hide();
    }
}

function filterPressrelease(refreshText = '', lang) {
    var mainLang = "ar";
    if (lang == "en") {
        mainLang = "en_US";
    }
    if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "" || jQuery('#keyword').val() != '' || refreshText != '') {
        jQuery('#filterMessage').hide();
        jQuery('#featuredNewsContainer').hide(350);
        jQuery('#featuredNewsContainerGatsby').hide(350);


        jQuery('#mainNewsContainer').hide(500);
        jQuery('#loader').show();
        jQuery('.wpNewsWidget').show(350);

        var query = `{
            pressreleases(       
            where: {
            status: PUBLISH,`;
        if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "") {
            query = query + `dateQuery: {`;
            if (jQuery('#startdate').val() != "") {
                var startDateArr = jQuery('#startdate').val().split("-");
                query = query + `after: {day: ` + startDateArr[0].replace(/^0+/, '') + `, month: ` + startDateArr[1].replace(/^0+/, '') + `, year: ` + startDateArr[2] + `},`;
            }
            if (jQuery('#enddate').val() != "") {
                var endDateArr = jQuery('#enddate').val().split("-");
                query = query + `before: {day: ` + endDateArr[0].replace(/^0+/, '') + `, month: ` + endDateArr[1].replace(/^0+/, '') + `, year: ` + endDateArr[2] + `},`;
            }
            query = query + `inclusive: true},`;
        }
        if (jQuery('#keyword').val() != "") {
            query = query + `search: "` + jQuery('#keyword').val() + `"`;
        }

        query = query + `},first: 300) {
            edges {
                node {
                    title
                    slug
                    date
                    localizedWpmlUrl
                    press_release_acf {
                        featured
                        location
                        summary
                        shortTitle
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                        }
                    }
                    locale {
                        id
                    }
                }
            }
        }
        }`;
        console.log(query);
        jQuery.get("https://2krdwpsvdf.execute-api.eu-west-2.amazonaws.com/prod/alj-health", {
            query: query
        }, function (data) {
            // console.log(data.data.pressreleases.edges);
            // $( ".result" ).html( data );
            //  alert( "Load was performed." );
            var mainData = data.data.pressreleases.edges;
            if (mainData.length != 0) {
                var newsHTML = '';
                var visCount = 0;
                for (var i = 0; i < mainData.length; i++) {
                    // console.log(mainData[i].node.locale.id,mainLang);
                    if (mainData[i].node.locale.id == mainLang) {
                        var visClass = 'visible';
                        if (visCount > 5) {
                            visClass = 'invisible';
                        }
                        var tempDateArr = mainData[i].node.date.substr(0, 10).split("-");
                        var tempDate = new Date(tempDateArr[1] + "-" + tempDateArr[2] + "/" + tempDateArr[0]);
                        var monthName = tempDate.toLocaleString('default', { month: 'long' });
                        var displayDate = monthName + " " + tempDateArr[2].replace(/^0+/, '') + ", " + tempDateArr[0];
                        var mainSlug = "/" + lang + "/news/" + mainData[i].node.slug;
                        var readMoreText = "Read More &gt;";
                        if (lang == "ar") {
                            readMoreText = "إقرأ المزيد >";
                        }
                        newsHTML = newsHTML + `<div class="col-sm-6 newsBox ` + visClass + `">
                        <div class="newsperbx">
                        <div class="imgbx"> 
                        <a href="`+ mainSlug + `"> <img class="media-object" src="` + mainData[i].node.featuredImage.node.mediaItemUrl + `" alt="img"> </a>
                        </div>
                        <div class="textbx">
                        <div class="timings">
                            <p><img class="servicon" src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img"> <span class="date-numbers">`+ displayDate + `</span> | ` + mainData[i].node.press_release_acf.location + `</p>
                        </div>
                        <a href="`+ mainSlug + `"><h4>` + mainData[i].node.press_release_acf.shortTitle + `</h4></a>
                        <p>`+ mainData[i].node.press_release_acf.summary + `</p>
                        <div class="row bottomrow">
                            <div class="col-5">
                                <a class="readmore" href="`+ mainSlug + `">` + readMoreText + `</a>
                            </div>
                            <div class="col-7">
                            <ul class="socialbx">
                                <li>
                                    <a href="#/"  class="sicons" onclick="shareEmail('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;">
                                        <img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-mail.png" alt="img">
                                    </a>
                                </li>
                                <li>
                                <a href="javascript:" class="sicons shareclick"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131439/share.png" alt="img"></a>
                                <div class="aljshare">
                                    <div class="sharebox">
                                        <div class="shareinner">
                                        <a href="#/"  class="icon" onclick="shareWhatsapp('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-whatsapp.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareLinkedin('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-linkedin.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareFB('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131440/share-fb.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareTwitter('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-twitter.png" alt="img"></a>
                                        </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>`;
                        visCount = visCount + 1;
                    }
                }
                console.log(newsHTML);
                jQuery('#mainNewsContainer').html(newsHTML);
                jQuery('div.newsBox.invisible').hide();
                if (visCount > 6) {
                    jQuery('#showMoreContainer').show();
                }
                else {
                    jQuery('#showMoreContainer').hide();
                }
                jQuery('#mainNewsContainer').show(500);
                $(".shareclick").click(function () {
                    $(this).next(".aljshare").toggleClass("active");
                });
            }
            else {
                if (lang == "en") {
                    jQuery('#filterMessage').text('No article found.');
                }
                else {
                    jQuery('#filterMessage').text('لم يتم العثور على مقال');
                }
                jQuery('#filterMessage').show();
                jQuery('#showMoreContainer').hide();
            }

            jQuery('#loader').hide();
        });
    }

    else {
        if (lang == "en") {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering');
        } else {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering ar');
        }
        jQuery('#filterMessage').show();
    }
}


function clearFilter(pathname, lang) {
    if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "" || jQuery('#keyword').val() != '') {
        jQuery('#startdate').val('');
        jQuery('#enddate').val('');
        jQuery('#keyword').val('');
        if (pathname == "perspective") {
            filterPerspective(pathname, lang);
        } else if (pathname == "in-the-news") {
            filterInTheNews(pathname, lang);
        } else {
            filterPressrelease(pathname, lang);
        }
    }
}

//share functions
function shareWhatsapp(shareUrl, title) {
    var mainURL = window.location.origin + shareUrl;
    window.open(`https://wa.me/?text=` + encodeURIComponent(mainURL));
}
function shareFB(shareUrl, title) {
    var mainURL = window.location.origin + shareUrl;
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(mainURL) + "&t=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
}
function shareTwitter(shareUrl, title) {
    var mainURL = window.location.origin + shareUrl;
    window.open("https://twitter.com/share?url=" + encodeURIComponent(mainURL) + "&text=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
}
function shareLinkedin(shareUrl, title) {
    var mainURL = window.location.origin + shareUrl;
    window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(mainURL) + "&title=" + title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
}
function shareEmail(shareUrl, title) {
    var mainURL = window.location.origin + shareUrl;
    window.open("mailto:?subject=" + title + "&body= Check out this article " + encodeURIComponent(mainURL), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=420,width=650');
}

function filterPerspective(refreshText = '', lang) {
    var mainLang = "ar";
    if (lang == "en") {
        mainLang = "en_US";
    }

    if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "" || jQuery('#keyword').val() != '' || refreshText != '') {
        jQuery('#filterMessage').hide();
        jQuery('#featuredNewsContainer').hide(350);
        jQuery('#featuredNewsContainerGatsby').hide(350);

        jQuery('#mainNewsContainer').hide(500);
        jQuery('#loader').show();
        jQuery('.wpNewsWidget').show(350);

        var query = `{
            perspectives(
                where: {
                    status: PUBLISH,`;
        if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "") {
            query = query + `dateQuery: {`;
            if (jQuery('#startdate').val() != "") {
                var startDateArr = jQuery('#startdate').val().split("-");
                query = query + `after: {day: ` + startDateArr[0].replace(/^0+/, '') + `, month: ` + startDateArr[1].replace(/^0+/, '') + `, year: ` + startDateArr[2] + `},`;
            }
            if (jQuery('#enddate').val() != "") {
                var endDateArr = jQuery('#enddate').val().split("-");
                query = query + `before: {day: ` + endDateArr[0].replace(/^0+/, '') + `, month: ` + endDateArr[1].replace(/^0+/, '') + `, year: ` + endDateArr[2] + `},`;
            }
            query = query + `inclusive: true},`;
        }
        if (jQuery('#keyword').val() != "") {
            query = query + `search: "` + jQuery('#keyword').val() + `"`;
        }

        query = query + `},first: 300) {
            edges {
                node {
                    title
                    slug
                    date
                    localizedWpmlUrl
                    press_release_acf {
                        featured
                        location
                        summary
                        shortTitle
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                        }
                    }
                    locale {
                        id
                    }
                }
            }
        }
        }`;
        console.log(query);
        jQuery.get("https://2krdwpsvdf.execute-api.eu-west-2.amazonaws.com/prod/alj-health", {
            query: query
        },
            function (data) {
                // console.log(data.data.perspectives.edges);
                //$( ".result" ).html( data );
                //  alert( "Load was performed." );
                var mainData = data.data.perspectives.edges;
                if (mainData.length != 0) {
                    var newsHTML = '';
                    var visCount = 0;
                    for (var i = 0; i < mainData.length; i++) {
                        console.log(mainData[i].node.locale.id, mainLang);
                        if (mainData[i].node.locale.id == mainLang) {
                            var visClass = 'visible';
                            if (visCount > 5) {
                                visClass = 'invisible';
                            }
                            var tempDateArr = mainData[i].node.date.substr(0, 10).split("-");
                            var tempDate = new Date(tempDateArr[1] + "-" + tempDateArr[2] + "/" + tempDateArr[0]);
                            var monthName = tempDate.toLocaleString('default', { month: 'long' });
                            var displayDate = monthName + " " + tempDateArr[2].replace(/^0+/, '') + ", " + tempDateArr[0];

                            var mainSlug = "/" + lang + "/insights/" + mainData[i].node.slug;
                            var readMoreText = "Read More &gt;";
                            if (lang == "ar") {
                                readMoreText = "إقرأ المزيد >";
                            }
                            newsHTML = newsHTML + `<div class="col-sm-6 newsBox ` + visClass + `">
                        <div class="newsperbx">
                        <div class="imgbx"> 
                        <a href="`+ mainSlug + `"> <img class="media-object" src="` + mainData[i].node.featuredImage.node.mediaItemUrl + `" alt="img"> </a>
                        </div>
                        <div class="textbx">
                        <div class="timings">
                            <p><img class="servicon" src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img"> <span class="date-numbers">`+ displayDate + `</span>&nbsp; | &nbsp;` + mainData[i].node.press_release_acf.location + `</p>
                        </div>
                        <a href="`+ mainSlug + `"><h4>` + mainData[i].node.press_release_acf.shortTitle + `</h4></a>
                        <p>`+ mainData[i].node.press_release_acf.summary + `</p>
                        <div class="row bottomrow">
                            <div class="col-5">
                                <a class="readmore" href="`+ mainSlug + `">` + readMoreText + `</a>
                            </div>
                            <div class="col-7">
                            <ul class="socialbx">
                                <li>
                                    <a href="#/"  class="sicons" onclick="shareEmail('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;">
                                        <img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-mail.png" alt="img">
                                    </a>
                                </li>
                                <li>
                                <a href="javascript:" class="sicons shareclick"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131439/share.png" alt="img"></a>
                                <div class="aljshare">
                                    <div class="sharebox">
                                        <div class="shareinner">
                                        <a href="#/"  class="icon" onclick="shareWhatsapp('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-whatsapp.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareLinkedin('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-linkedin.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareFB('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131440/share-fb.png" alt="img"></a>
                                        <a href="#/"  class="icon" onclick="shareTwitter('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-twitter.png" alt="img"></a>
                                        </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>`;
                            visCount = visCount + 1;
                        }
                    }
                    jQuery('#mainNewsContainer').html(newsHTML);
                    jQuery('div.newsBox.invisible').hide();
                    if (visCount > 6) {
                        jQuery('#showMoreContainer').show();
                    } else {
                        jQuery('#showMoreContainer').hide();
                    }
                    jQuery('#mainNewsContainer').show(500);
                    $(".shareclick").click(function () {
                        $(this).next(".aljshare").toggleClass("active");
                    });
                } else {
                    if (lang == "en") {
                        jQuery('#filterMessage').text('No article found.');
                    } else {
                        jQuery('#filterMessage').text('لم يتم العثور على مقال');
                    }
                    jQuery('#filterMessage').show();
                    jQuery('#showMoreContainer').hide();
                }
                jQuery('#loader').hide();
            });
    } else {
        if (lang == "en") {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering');
        } else {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering ar');
        }
        jQuery('#filterMessage').show();
    }
}
//zohair code ends
// in-the-news code starts also clear filter code update
function filterInTheNews(refreshText = '', lang) {
    var mainLang = "ar";
    if (lang == "en") {
        mainLang = "en_US";
    }
    if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "" || jQuery('#keyword').val() != '' || refreshText != '') {
        jQuery('#filterMessage').hide();
        jQuery('#featuredNewsContainer').hide(350);
        jQuery('#featuredNewsContainerGatsby').hide(350);
        jQuery('#mainNewsContainer').hide(500);
        jQuery('#loader').show();
        jQuery('.wpNewsWidget').show(350);

        var query = `{
            inthenewses(
                where: {
                    status: PUBLISH,`;
        if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "") {
            query = query + `dateQuery: {`;
            if (jQuery('#startdate').val() != "") {
                var startDateArr = jQuery('#startdate').val().split("-");
                query = query + `after: {day: ` + startDateArr[0].replace(/^0+/, '') + `, month: ` + startDateArr[1].replace(/^0+/, '') + `, year: ` + startDateArr[2] + `},`;
            }
            if (jQuery('#enddate').val() != "") {
                var endDateArr = jQuery('#enddate').val().split("-");
                query = query + `before: {day: ` + endDateArr[0].replace(/^0+/, '') + `, month: ` + endDateArr[1].replace(/^0+/, '') + `, year: ` + endDateArr[2] + `},`;
            }
            query = query + `inclusive: true},`;
        }
        if (jQuery('#keyword').val() != "") {
            query = query + `search: "` + jQuery('#keyword').val() + `"`;
        }

        query = query + `},first: 300) {
            edges {
                node {
                    title
                    slug
                    date
                    localizedWpmlUrl
                    press_release_acf {
                        featured
                        location
                        summary
                        shortTitle
                    }
                    featuredImage {
                        node {
                            mediaItemUrl
                        }
                    }
                    locale {
                        id
                    }
                }
            }
        }
        }`;
        // console.log(query);
        jQuery.get("https://2krdwpsvdf.execute-api.eu-west-2.amazonaws.com/prod/alj-health", {
            query: query
        },
            function (data) {
                // console.log(data.data.inthenewses.edges);
                //$( ".result" ).html( data );
                //  alert( "Load was performed." );
                var mainData = data.data.inthenewses.edges;
                if (mainData.length != 0) {
                    var newsHTML = '';
                    var visCount = 0;
                    for (var i = 0; i < mainData.length; i++) {
                        // console.log(mainData[i].node.locale.id,mainLang);
                        if (mainData[i].node.locale.id == mainLang) {
                            var visClass = 'visible';
                            if (visCount > 5) {
                                visClass = 'invisible';
                            }
                            var tempDateArr = mainData[i].node.date.substr(0, 10).split("-");
                            var tempDate = new Date(tempDateArr[1] + "-" + tempDateArr[2] + "/" + tempDateArr[0]);
                            var monthName = tempDate.toLocaleString('default', { month: 'long' });
                            var displayDate = monthName + " " + tempDateArr[2].replace(/^0+/, '') + ", " + tempDateArr[0];
                            var mainSlug = "/" + lang + "/in-the-news/" + mainData[i].node.slug;
                            var readMoreText = "Read More &gt;";
                            if (lang == "ar") {
                                readMoreText = "إقرأ المزيد >";
                            }
                            newsHTML = newsHTML + `<div class="col-sm-6 newsBox ` + visClass + `">
                            <div class="newsperbx">
                            <div class="imgbx"> 
                            <a href="`+ mainSlug + `"> <img class="media-object" src="` + mainData[i].node.featuredImage.node.mediaItemUrl + `" alt="img"> </a>
                            </div>
                            <div class="textbx">
                            <div class="timings">
                                <p><img class="servicon" src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131409/calender.png" alt="img"> <span class="date-numbers">`+ displayDate + `</span>&nbsp; | &nbsp;` + mainData[i].node.press_release_acf.location + `</p>
                            </div>
                            <a href="`+ mainSlug + `"><h4>` + mainData[i].node.press_release_acf.shortTitle + `</h4></a>
                            <p>`+ mainData[i].node.press_release_acf.summary + `</p>
                            <div class="row bottomrow">
                                <div class="col-5">
                                    <a class="readmore" href="`+ mainSlug + `">` + readMoreText + `</a>
                                </div>
                                <div class="col-7">
                                <ul class="socialbx">
                                    <li>
                                        <a href="#/"  class="sicons" onclick="shareEmail('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;">
                                            <img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-mail.png" alt="img">
                                        </a>
                                    </li>
                                    <li>
                                    <a href="javascript:" class="sicons shareclick"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131439/share.png" alt="img"></a>
                                    <div class="aljshare">
                                        <div class="sharebox">
                                            <div class="shareinner">
                                            <a href="#/"  class="icon" onclick="shareWhatsapp('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-whatsapp.png" alt="img"></a>
                                            <a href="#/"  class="icon" onclick="shareLinkedin('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131441/share-linkedin.png" alt="img"></a>
                                            <a href="#/"  class="icon" onclick="shareFB('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131440/share-fb.png" alt="img"></a>
                                            <a href="#/"  class="icon" onclick="shareTwitter('`+ mainSlug + `','` + mainData[i].node.title + `'); return false;"><img src="https://media.aljhealth.com/wp-content/uploads/2021/02/10131436/share-twitter.png" alt="img"></a>
                                            </div>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>`;
                            visCount = visCount + 1;
                        }
                    }
                    jQuery('#mainNewsContainer').html(newsHTML);
                    jQuery('div.newsBox.invisible').hide();
                    if (visCount > 6) {
                        jQuery('#showMoreContainer').show();
                    } else {
                        jQuery('#showMoreContainer').hide();
                    }
                    jQuery('#mainNewsContainer').show(500);
                    $(".shareclick").click(function () {
                        $(this).next(".aljshare").toggleClass("active");
                    });
                } else {
                    if (lang == "en") {
                        jQuery('#filterMessage').text('No article found.');
                    } else {
                        jQuery('#filterMessage').text('لم يتم العثور على مقال');
                    }
                    jQuery('#filterMessage').show();
                    jQuery('#showMoreContainer').hide();
                }
                jQuery('#loader').hide();
            });
    } else {
        if (lang == "en") {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering');
        } else {
            jQuery('#filterMessage').text('Please enter search term or select dates for filtering ar');
        }
        jQuery('#filterMessage').show();
    }
}

// (function($) {
//   'use strict';
//   $(document).ready(function($) {
//       $('html').removeClass('no-js');
//       let websiteConfig;
//       var conf = $.extend({}, {
//           templatePath: '.',
//           flexsliderOptions: {
//               animation: 'slide',
//               animationDuration :600,
//               slideshowSpeed:7000,
//               slideshow:false,
//               pauseOnHover:true
//           }
//       }, typeof websiteConfig != 'undefined' ? websiteConfig : {});


//       $('.flexslider').filter(function() {
//           return $('.slides > li', this).length >= 2
//       }).each(function() {
//           var _this = this;
//           $('.slides > li', this).hide();
//           $(this).flexslider($.extend({}, conf.flexsliderOptions, {
//               start: function(slider) {
//                   if (slider.slides.eq(slider.currentSlide).is(':has(iframe, embed, object)')) {
//                       $('.flex-control-nav', _this).hide()
//                   }
//               },
//               before: function(slider) {
//                   var descs = $(_this).next('.descriptions').find('.animated-text');
//                   if (slider.animatingTo != slider.currentSlide && descs.length >= slider.slides.length) {
//                       descs.filter(':visible').fadeOut(conf.flexsliderOptions.animationDuration / 2, function() {
//                           descs.eq(slider.animatingTo).fadeIn(conf.flexsliderOptions.animationDuration / 2)
//                       })
//                   }
//                   if ($(_this).is(':not(.fixed)')) {
//                       $(_this).animate({
//                           height: slider.slides.eq(slider.animatingTo).height()
//                       }, conf.flexsliderOptions.animationDuration)
//                   }
//                   if (slider.slides.eq(slider.animatingTo).is(':has(iframe, embed, object)')) {
//                       $('.flex-control-nav', _this).fadeOut(100)
//                   } else {
//                       $('.flex-control-nav', _this).fadeIn(100)
//                   }
//               }
//           })).hover(function() {
//               $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 1)
//           }, function() {
//               $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 0)
//           });
//           $('.flexslider .flex-direction-nav a').hover(function() {
//               $(this).stop(!0).fadeTo(100, 1)
//           }, function() {
//               $(this).stop(!0).fadeTo(100, 1)
//           })
//       });
//   })
// })(jQuery)

function menuActiveFun() {
    if (document.location.href.indexOf('insights') > -1) {
        $(".menu-1069").addClass('active');
        $(".menu-843").addClass('active');
        $(".insightsInside").addClass('active');
        $(".menu-1924").addClass('active');
        $(".menu-1926").addClass('active');
    }

    if (window.location.href.indexOf("/news") != -1) {
        $(".menu-862").addClass('active');
        $(".menu-843").addClass('active');
        $(".newsInside").addClass('active');
        $(".menu-1924").addClass('active');
        $(".menu-1925").addClass('active');
    }

    if (window.location.href.indexOf("/in-the-news") != -1) {
        $(".menu-843").addClass('active');
        $(".menu-1436").addClass('active');
        $(".inTheNewsInside").addClass('active');
        $(".menu-1924").addClass('active');
        $(".menu-1927").addClass('active');
    }
    // if ( document.location.href.indexOf('home') > -1 ) {
    // $(".menu-840").addClass('active');
    // $(".menu-1073").addClass('active');
    // }

    if (document.location.href.indexOf('our-people') > -1) {
        $(".menu-840").addClass('active');
        $(".menu-844").addClass('active');
        $(".menu-1919").addClass('active');
        $(".menu-1921").addClass('active');
    }
}

//code for homepage videos
function showVideoBox(currentVideo) {
    jQuery('.country-item').hide();
    jQuery('.video-controller').data('video', currentVideo);
    jQuery('.video-item').each(function () {
        jQuery(this).get(0).pause();
        //$(this).get(0).currentTime = 0;
    });
    jQuery('#' + currentVideo).show();
    jQuery('.btn-play').show();
    jQuery('.btn-pause').hide();
    var className = currentVideo.replace(/\s+/g, '-').toLowerCase();
    jQuery('.' + className).show();
}

/*! pym.js - v1.3.2 - 2018-02-13 */
!function(a){"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&module.exports?module.exports=a():window.pym=a.call(this)}(function(){var a={},b=function(a){var b=document.createEvent("Event");b.initEvent("pym:"+a,!0,!0),document.dispatchEvent(b)},c=function(a){var b=new RegExp("[\\?&]"+a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))},d=function(a,b){if(("*"===b.xdomain||a.origin.match(new RegExp(b.xdomain+"$")))&&"string"==typeof a.data)return!0},e=function(a){var b=/^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/gi;if(a.match(b))return!0},f=function(a,b,c){return["pym",a,b,c].join("xPYMx")},g=function(a){var b=["pym",a,"(\\S+)","(.*)"];return new RegExp("^"+b.join("xPYMx")+"$")},h=Date.now||function(){return(new Date).getTime()},i=function(a,b,c){var d,e,f,g=null,i=0;c||(c={});var j=function(){i=!1===c.leading?0:h(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var k=h();i||!1!==c.leading||(i=k);var l=b-(k-i);return d=this,e=arguments,l<=0||l>b?(g&&(clearTimeout(g),g=null),i=k,f=a.apply(d,e),g||(d=e=null)):g||!1===c.trailing||(g=setTimeout(j,l)),f}},j=function(){for(var b=a.autoInitInstances.length,c=b-1;c>=0;c--){var d=a.autoInitInstances[c];d.el.getElementsByTagName("iframe").length&&d.el.getElementsByTagName("iframe")[0].contentWindow||a.autoInitInstances.splice(c,1)}};return a.autoInitInstances=[],a.autoInit=function(c){var d=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),e=d.length;j();for(var f=0;f<e;++f){var g=d[f];g.setAttribute("data-pym-auto-initialized",""),""===g.id&&(g.id="pym-"+f+"-"+Math.random().toString(36).substr(2,5));var h=g.getAttribute("data-pym-src"),i={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},k={};for(var l in i)if(null!==g.getAttribute("data-pym-"+l))switch(i[l]){case"boolean":k[l]=!("false"===g.getAttribute("data-pym-"+l));break;case"string":k[l]=g.getAttribute("data-pym-"+l);break;case"number":var m=Number(g.getAttribute("data-pym-"+l));isNaN(m)||(k[l]=m);break;default:console.err("unrecognized attribute type")}var n=new a.Parent(g.id,h,k);a.autoInitInstances.push(n)}return c||b("pym-initialized"),a.autoInitInstances},a.Parent=function(a,b,c){this.id=a,this.url=b,this.el=document.getElementById(a),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=g(this.id),this.messageHandlers={},c=c||{},this._constructIframe=function(){var a=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var b="",c=this.url.indexOf("#");for(c>-1&&(b=this.url.substring(c,this.url.length),this.url=this.url.substring(0,c)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+a+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=b,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),void 0!==this.settings.allowfullscreen&&!1!==this.settings.allowfullscreen&&this.iframe.setAttribute("allowfullscreen",""),void 0!==this.settings.sandbox&&"string"==typeof this.settings.sandbox&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}.bind(this),this._onScroll=function(){this.sendViewportAndIFramePosition()}.bind(this),this._fire=function(a,b){if(a in this.messageHandlers)for(var c=0;c<this.messageHandlers[a].length;c++)this.messageHandlers[a][c].call(this,b)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),j()},this._processMessage=function(a){if(d(a,this.settings)&&"string"==typeof a.data){var b=a.data.match(this.messageRegex);if(!b||3!==b.length)return!1;var c=b[1],e=b[2];this._fire(c,e)}}.bind(this),this._onHeightMessage=function(a){var b=parseInt(a);this.iframe.setAttribute("height",b+"px")},this._onNavigateToMessage=function(a){e(a)&&(document.location.href=a)},this._onScrollToChildPosMessage=function(a){var b=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,c=b+parseInt(a);window.scrollTo(0,c)},this.onMessage=function(a,b){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(b)},this.sendMessage=function(a,b){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(f(this.id,a,b),"*"):this.remove())},this.sendWidth=function(){var a=this.el.offsetWidth.toString();this.sendMessage("width",a)},this.sendViewportAndIFramePosition=function(){var a=this.iframe.getBoundingClientRect(),b=window.innerWidth||document.documentElement.clientWidth,c=window.innerHeight||document.documentElement.clientHeight,d=b+" "+c;d+=" "+a.top+" "+a.left,d+=" "+a.bottom+" "+a.right,this.sendMessage("viewport-iframe-position",d)};for(var h in c)this.settings[h]=c[h];return this._throttleOnScroll=i(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},a.Child=function(a){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},a=a||{},this.onMessage=function(a,b){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(b)},this._fire=function(a,b){if(a in this.messageHandlers)for(var c=0;c<this.messageHandlers[a].length;c++)this.messageHandlers[a][c].call(this,b)},this._processMessage=function(a){if(d(a,this.settings)&&"string"==typeof a.data){var b=a.data.match(this.messageRegex);if(b&&3===b.length){var c=b[1],e=b[2];this._fire(c,e)}}}.bind(this),this._onWidthMessage=function(a){var b=parseInt(a);b!==this.parentWidth&&(this.parentWidth=b,this.settings.renderCallback&&this.settings.renderCallback(b),this.sendHeight())},this.sendMessage=function(a,b){window.parent.postMessage(f(this.id,a,b),"*")},this.sendHeight=function(){var a=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",a),a}.bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(a){this.sendMessage("navigateTo","#"+a)},this.navigateParentTo=function(a){this.sendMessage("navigateTo",a)},this.scrollParentToChildEl=function(a){var b=document.getElementById(a).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(b)},this.scrollParentToChildPos=function(a){this.sendMessage("scrollToChildPos",a.toString())};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var e in a)this.settings[e]=a[e];this.id=c("childId")||a.id,this.messageRegex=new RegExp("^pymxPYMx"+this.id+"xPYMx(\\S+)xPYMx(.*)$");var g=parseInt(c("initialWidth"));return this.parentUrl=c(this.settings.parenturlparam),this.parentTitle=c("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(g),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),function(a){var c,d=document.getElementsByTagName("html")[0],e=d.className;try{c=window.self!==window.top?"embedded":"not-embedded"}catch(a){c="embedded"}e.indexOf(c)<0&&(d.className=e?e+" "+c:c,a&&a(c),b("marked-embedded"))}(a.onMarkedEmbeddedStatus),this},"undefined"!=typeof document&&a.autoInit(!0),a});

function cookieStatusFun() {
    var getstatus = localStorage.getItem('cookiestatus')
    if (!getstatus) {
        $("#cookieConsent").fadeIn(200);
    }
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
        localStorage.setItem('cookiestatus', true)
    });

}

function newsBoxFun() {
    jQuery('div.newsBox.invisible').hide();
    jQuery('#startdate,#enddate').on('change', function () {
        if (jQuery('#startdate').val() != "" || jQuery('#enddate').val() != "") {
            jQuery('.gobtn').click();
        }
    });
}

function homePageSliderFun() {
    $(".main-slider").on("init", function (event, slick) {
            $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
        });
    $(".main-slider").on("afterChange", function (event, slick, currentSlide) {
        $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
    });
    $(".main-slider").slick({
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700
    });
}

function otherSliderFun() {
    $('.partner-slider-1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.partner-next-1'),
        prevArrow: $('.partner-prev-1'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
	
	$('.featured-partner-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.featured-partner-next'),
        prevArrow: $('.featured-partner-prev'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    // $('.featured-market-slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow: $('.featured-market-next'),
    //     prevArrow: $('.featured-market-prev'),
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         }
    //     ]
    // });
	
$('.partner-slider-investment').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.partner-next-investment'),
        prevArrow: $('.partner-prev-investment'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

	$('.featured-market-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,	
        nextArrow: $('.featured-market-next'),
        prevArrow: $('.featured-market-prev'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $('.partners-slider-2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.partner-next-2'),
        prevArrow: $('.partner-prev-2'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    $('.solutionslickslider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

}

function homeNewsSliderFun() {
    $('html').removeClass('no-js');
    let websiteConfig;
    var conf = $.extend({}, {
        templatePath: '.',
        flexsliderOptions: {
            animation: 'slide',
            animationDuration: 600,
            slideshowSpeed: 7000,
            slideshow: true,
            pauseOnHover: true
        }
    }, typeof websiteConfig != 'undefined' ? websiteConfig : {});


    $('.flexslider').filter(function () {
        return $('.slides > li', this).length >= 2
    }).each(function () {
        var _this = this;
        $('.slides > li', this).hide();
        $(this).flexslider($.extend({}, conf.flexsliderOptions, {
            start: function (slider) {
                if (slider.slides.eq(slider.currentSlide).is(':has(iframe, embed, object)')) {
                    $('.flex-control-nav', _this).hide()
                }
            },
            before: function (slider) {
                var descs = $(_this).next('.descriptions').find('.animated-text');
                if (slider.animatingTo != slider.currentSlide && descs.length >= slider.slides.length) {
                    descs.filter(':visible').fadeOut(conf.flexsliderOptions.animationDuration / 2, function () {
                        descs.eq(slider.animatingTo).fadeIn(conf.flexsliderOptions.animationDuration / 2)
                    })
                }
                if ($(_this).is(':not(.fixed)')) {
                    $(_this).animate({
                        height: slider.slides.eq(slider.animatingTo).height()
                    }, conf.flexsliderOptions.animationDuration)
                }
                if (slider.slides.eq(slider.animatingTo).is(':has(iframe, embed, object)')) {
                    $('.flex-control-nav', _this).fadeOut(100)
                } else {
                    $('.flex-control-nav', _this).fadeIn(100)
                }
            }
        })).hover(function () {
            $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 1)
        }, function () {
            $('.flex-direction-nav a', this).stop(!0).fadeTo(100, 0)
        });
        $('.flexslider .flex-direction-nav a').hover(function () {
            $(this).stop(!0).fadeTo(100, 1)
        }, function () {
            $(this).stop(!0).fadeTo(100, 1)
        })
    });


}
// function googleMapFun(){
//   // alert("ASDF");
//   // console.log('layout map');
  
// }
$('.slider-news-2-a').slick({
    autoplay: false,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    fade: true,
    asNavFor: '.slider-news-1-a'
});
$('.slider-news-1-a').slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.slider-news-2-a',
    dots: true,
});

$('.slider-news-2-b').slick({
    autoplay: false,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-news-1-b'
});
$('.slider-news-1-b').slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.slider-news-2-b',
    dots: true,
});

function newssliderOne() {
    $('.latest-news-slider-1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.latest-news-partner-next-1'),
        prevArrow: $('.latest-news-partner-prev-1'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }

            }]
    });
}

var checkifar = "";
if (window.location.href.includes('/ar/')) {
    checkifar = true;
} else {
    checkifar = false;
}

function newssliderTwo() {
    $('.latest-insights-slider-1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: $('.latest-insights-partner-next-1'),
        prevArrow: $('.latest-insights-partner-prev-1'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
      
            }]
    });
}

// function solutionsListingAbout() {
//     $('.solutionsListingAbout').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,

//                     dots: false
//                 }
//             }, {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             }, {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// }



newssliderOne();
newssliderTwo();
// solutionsListingAbout();

$(document).ready(function () {
// var insights_btn_clicked = false
var news_btn_clicked = false

    $('.news_block').hide();
    $('.news_btn').click(function () {
        $('.insights_block').hide();
        $('.news_block').show();
        $('.news_btn').removeClass('tabs-inactive');
        $('.insights_btn').addClass('tabs-inactive');
        
        $('.latest-news-slider-1').find('.slider').slick('setPosition');

        if(news_btn_clicked === false){
          
            if ($('.latest-news-slider-1').hasClass('slick-initialized')) {
                $('.latest-news-slider-1').slick('destroy');
                
                newssliderOne();
                afterCarouselInit();

            } 
            
            news_btn_clicked = true;
        }

    });
    $('.insights_btn').click(function () {
        $('.insights_block').show();
        $('.news_block').hide();
        $('.insights_btn').removeClass('tabs-inactive');
        $('.news_btn').addClass('tabs-inactive');
        // newssliderTwo();
        $('.latest-insights-slider-1').find('.slider').slick('setPosition');
        // if(insights_btn_clicked === false){
          
        //     if ($('.latest-insights-slider-1').hasClass('slick-initialized')) {
        //         $('.latest-insights-slider-1').slick('destroy');
                
        //         newssliderTwo();
        //         afterCarouselInit();

        //     } 
            
        //     insights_btn_clicked = true;
        // }
        
    });
   
});

function afterCarouselInit(){
    $(".partner-section .slick-dots").insertAfter($(".partner-prev-1"));
    $(".other-partner-section .slick-dots").insertAfter($(".partner-prev-1"));
	$(".other-partner-section-investment .slick-dots").insertAfter($(".partner-prev-investment"));
	$(".featured-partner-thumbnail-part .slick-dots").insertAfter($(".featured-partner-prev"));
	$(".featured-market-list-section .slick-dots").insertAfter($(".featured-market-prev"));
    $(".latest-news-container .slick-dots").insertAfter($(".latest-news-partner-prev-1"));
    $(".latest-insights-container .slick-dots").insertAfter($(".latest-insights-partner-prev-1")); 
}

$(document).ready(function () {
    afterCarouselInit();
    /*$('.show-menu').click(function () {
         $('.navigation').addClass('show-menu-class');
     });
     $('.close-menu').click(function () {
         $('.navigation').removeClass('show-menu-class');
     });*/
    //  $('.showmymenu').click(function () {
    //     $('.navigation').addClass('show-menu-class');
    // });
    // $('.close-menu').click(function () {
    //     console.log('fffff');
    //     $('.navigation').removeClass('show-menu-class');
    // });
    var navigationWrapper = $('.navigation-wrapper');
    $('body').click(e => {
        if (!navigationWrapper.is(e.target) // if the target of the click isn't the container...
            && navigationWrapper.has(e.target).length === 0) // ... nor a descendant of the container

        {
            // $('.navigation').removeClass('show-menu-class');

        }
    });
});

function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}
if (isTouchDevice() === true) {
    $(".mainMenuClick").click(function () {
        // $(".navigation li.menu-item-has-children > a").not($(this)).next('.sub-menu').hide();
        $(this).next('.subMenu').toggle();
    });
}

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
$('#vmap').vectorMap({
    map: 'world_en',
    pinMode: 'content',
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderOpacity: 1,
    borderWidth: 0.5,
    color: '#e0e0e0',
    enableZoom: true,
    hoverColor: '#77cbb7',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#3fbeb6'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    values: { "sa": "682", "ae": "784", "tr": "792", "eg": "818", "in": "400" },
});

// var maplocationfile = 'https://jameelhealthcms.aljhealth.com/mapLocations.json';
// if (window.location.href.indexOf("/ar/") > -1) {
//     maplocationfile = 'https://jameelhealthcms.aljhealth.com/mapLocationsAR.json';
// }else if (window.location.href.indexOf("/tr/") > -1) {
//     maplocationfile = 'https://jameelhealthcms.aljhealth.com/mapLocationsTR.json';
// }

// $('#mapplic').mapplic({
//     source: maplocationfile,
//     sidebar: false,
//     thumbholder: true,
//     minimap: true,
//     zoombuttons: false,
//     fullscreen: false,
//     lightbox: true,
//     maxscale: 1,
//     developer:false,
//     hovertip: false,
//     zoomoutclose:true,
//     height: 450,
//     mousewheel:false,
//     zoom:false,
 
// });


$(document).ready(function() {
    var maplocationfile = 'https://jameelhealthcms.aljhealth.com/worldMapLocations.json';
    if (window.location.href.indexOf("/ar/") > -1) {
        maplocationfile = 'https://jameelhealthcms.aljhealth.com/worldMapLocationsAR.json';
    }else if (window.location.href.indexOf("/tr/") > -1) {
        maplocationfile = 'https://jameelhealthcms.aljhealth.com/worldMapLocationsTR.json';
    }
    var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
    $('#mapplic').mapplic({
        source: maplocationfile,
        height: 600,
        sidebar: false,
        marker: 'hidden',
        fullscreen: false,
        maxscale: 4,
        zoombuttons: false,
        minimap: false,
        legends:false
    });
});

// $(document).ready(function () {
//     $('.inner-wrapper>ul>li>a').each(function () {
//         var oldUrl = $(this).attr("href"); // Get current url
//         var newUrl = oldUrl.replace("/en/#", "#/"); // Create new url
//         $(this).attr("href", newUrl);
//     });
// });



// $('#exampleModalCenter').on('show.bs.modal', function (e) {
//   console.log('dddddddd');
//     var url = $('#hiddeniframeurl').val();
//     $('#videoframe').attr('src', url);
// });
// $('#exampleModalCenter').on('hide.bs.modal', function (e) {
//     $('#videoframe').attr('src', "");
// });

$('#exampleModalCenter').on('show.bs.modal', function (e) {
	var button = $(e.relatedTarget);
    var vidID = button.data('url');
    $('#videoframe').attr('src', "https://www.youtube.com/embed/"+vidID);
});
$('#exampleModalCenter').on('hide.bs.modal', function (e) {
    $('#videoframe').attr('src', "");
});


console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
