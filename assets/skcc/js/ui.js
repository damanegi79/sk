// JavaScript Document
$(document).ready(function(){
    init();
    leftNav()
    nav_height()
    wingMotion()
})

function init() {
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
    $(window).on('resize',function(){
        nav_height()
    })
    $('.btnConsole a').on('click',function(){
        $(this).toggleClass('active')
        $('.apiContents').toggleClass('active')
        $('.consoleCon').toggleClass('active')
    })
    $('.slideBlock .btn a.slide').on('click',function(){
        $(this).toggleClass('active')
        $(this).parent().parent().toggleClass('active')
        $(this).parent().parent().find('ul').toggle();
        return false;
    })
    setInterval(function() {wingMotion()}, 6000);
    
//    $('.serviceTab li a').on('click',function(){
//        var indexNum = $('.serviceTab li a').index(this);
//        $('.serviceTab li').removeClass('active')
//        $('.serviceContents .serviceCon').hide();
//        $('.serviceTab li').eq(indexNum).addClass('active')
//        $('.serviceContents .serviceCon').eq(indexNum).show();
//        return false;
//    })
//    $('.loginNotice .noticeList').eq(0).show();
//    $('.noticeTab li a').on('click',function(){
//        var indexNum = $('.noticeTab li a').index(this);
//        $('.noticeTab li').removeClass('active')
//        $('.loginNotice .noticeList').hide();
//        $('.noticeTab li').eq(indexNum).addClass('active')
//        $('.loginNotice .noticeList').eq(indexNum).show();
//        return false;
//    })
//    $('.nav dl dt a').on('click',function(){
//        $(this).parent().next().slideToggle(200);
//        $(this).parent().parent().siblings('dl').find('dd').slideUp(200);
//        return false;
//    })
//    $('.faqList dl dt').on('click',function(){
//        $(this).toggleClass('active')
//        $(this).next().slideToggle(200);
//        $(this).parent().siblings('dl').find('dt').removeClass('active');
//        $(this).parent().siblings('dl').find('dd').slideUp(200);
//        return false;
//    })
//    $('.topBtn a.btn_all').on('click',function(){
//        $('#fullMenuArea.allMenu').fadeIn(100);
//        $('#fullMenuArea.allMenu .fullMenu').animate({marginLeft:0},200)
//        $('html, body').addClass('overflow-hidden')
//        return false;
//    })
//    $('.topBtn a.btn_boucher,.menuOpen a').on('click',function(){
//        $('#fullMenuArea.voucherMenu').fadeIn(100);
//        $('#fullMenuArea.voucherMenu .fullMenu').animate({marginRight:0},200)
//        $('html, body').addClass('overflow-hidden')
//        return false;
//    })
//    $('#fullMenuArea.allMenu .fullMenu .btnClose a , #fullMenuArea .overay').on('click',function(){
//        $('#fullMenuArea.allMenu .fullMenu').animate({marginLeft:"-290px"},200,function(){
//            $('#fullMenuArea.allMenu').fadeOut(100);
//            $('html, body').removeClass('overflow-hidden')
//        })
//        return false;
//    })
//    $('#fullMenuArea.voucherMenu .fullMenu .btnClose a, #fullMenuArea .overay').on('click',function(){
//        $('#fullMenuArea.voucherMenu .fullMenu').animate({marginRight:"-290px"},200,function(){
//            $('#fullMenuArea.voucherMenu').fadeOut(100);
//            $('html, body').removeClass('overflow-hidden')
//        })
//        return false;
//    })

//    $(window).on('scroll',function(){
//        var topScroll = $(window).scrollTop();
//        if(topScroll>=84){
//            $('#header').addClass('fixed')
//        } else if(topScroll<84){
//            $('#header').removeClass('fixed')
//        }
//    })
}

function layer_function(){
    var pop_height = $('.popupWrap').height()/2;
    $('.popupWrap').show().css({marginTop:-pop_height})
    return false;
}

function layer_init(name){
    var pop_height = $('.popup-layer.'+name).height()/2;
    $('.overay-layer').show().addClass('fadeIn')
    $('.popup-layer.'+name).show().css({marginTop:-pop_height}).addClass('bounceInUp')
    return false;
}

function leftNav(){
    $('.leftNav ul li.active').parent().parent().show().prev().addClass('active');
    $('.leftNav dt a').on('click',function(){
        if($(this).parent().parent().find('dd').size()!=0){
            $(this).parent().toggleClass('active').parent().siblings('dl').find('dt').removeClass('active')
            $(this).parent().next().slideToggle(200)
            $(this).parent().parent().siblings('dl').find('dd').slideUp(200)
            return false;
        }
    })
}
function nav_height(){
    var winH = $(window).height();
    var customH = winH - 270
    $('#leftArea .leftNav').height(customH)
    return false;
}

function wingMotion() {
    TweenMax.to($('#header .logo .wing_l'),0.5,{opacity:1, transform:'rotateY(30deg) rotateZ(10deg) translateY(-3px)',ease:Sine.easeInOut, delay:1})
    TweenMax.to($('#header .logo .wing_l'),0.5,{opacity:1, transform:'rotateY(0deg) rotateZ(0deg) translateY(0px)',ease:Sine.easeInOut,delay:1.5})
    TweenMax.to($('#header .logo .wing_r'),0.5,{opacity:1, transform:'rotateX(30deg) rotateZ(-10deg) translateY(-3px)  translateX(1px)',ease:Sine.easeInOut, delay:1})
    TweenMax.to($('#header .logo .wing_r'),0.5,{opacity:1, transform:'rotateY(0deg) rotateZ(0deg) translateY(0px) translateX(0)',ease:Sine.easeInOut,delay:1.5})
}