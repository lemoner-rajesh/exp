
// $('html').removeClass('no-js');
// let websiteConfig;
// var conf = $.extend({}, {
//     templatePath: '.',
//     flexsliderOptions: {
//         animation: 'slide',
//         animationDuration :600,
//         slideshowSpeed:7000,
//         slideshow:true,
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
