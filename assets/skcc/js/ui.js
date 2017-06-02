// JavaScript Document
$(document).ready(function(){
    init();
})

function init() {
    $('.serviceTab li a').on('click',function(){
        var indexNum = $('.serviceTab li a').index(this);
        $('.serviceTab li').removeClass('active')
        $('.serviceContents .serviceCon').hide();
        $('.serviceTab li').eq(indexNum).addClass('active')
        $('.serviceContents .serviceCon').eq(indexNum).show();
        return false;
    })
    $('.loginNotice .noticeList').eq(0).show();
    $('.noticeTab li a').on('click',function(){
        var indexNum = $('.noticeTab li a').index(this);
        $('.noticeTab li').removeClass('active')
        $('.loginNotice .noticeList').hide();
        $('.noticeTab li').eq(indexNum).addClass('active')
        $('.loginNotice .noticeList').eq(indexNum).show();
        return false;
    })
    $('.nav dl dt a').on('click',function(){
        $(this).parent().next().slideToggle(200);
        $(this).parent().parent().siblings('dl').find('dd').slideUp(200);
        return false;
    })
    $('.faqList dl dt').on('click',function(){
        $(this).toggleClass('active')
        $(this).next().slideToggle(200);
        $(this).parent().siblings('dl').find('dt').removeClass('active');
        $(this).parent().siblings('dl').find('dd').slideUp(200);
        return false;
    })
    $('.topBtn a.btn_all').on('click',function(){
        $('#fullMenuArea.allMenu').fadeIn(100);
        $('#fullMenuArea.allMenu .fullMenu').animate({marginLeft:0},200)
        $('html, body').addClass('overflow-hidden')
        return false;
    })
    $('.topBtn a.btn_boucher,.menuOpen a').on('click',function(){
        $('#fullMenuArea.voucherMenu').fadeIn(100);
        $('#fullMenuArea.voucherMenu .fullMenu').animate({marginRight:0},200)
        $('html, body').addClass('overflow-hidden')
        return false;
    })
    $('#fullMenuArea.allMenu .fullMenu .btnClose a , #fullMenuArea .overay').on('click',function(){
        $('#fullMenuArea.allMenu .fullMenu').animate({marginLeft:"-290px"},200,function(){
            $('#fullMenuArea.allMenu').fadeOut(100);
            $('html, body').removeClass('overflow-hidden')
        })
        return false;
    })
    $('#fullMenuArea.voucherMenu .fullMenu .btnClose a, #fullMenuArea .overay').on('click',function(){
        $('#fullMenuArea.voucherMenu .fullMenu').animate({marginRight:"-290px"},200,function(){
            $('#fullMenuArea.voucherMenu').fadeOut(100);
            $('html, body').removeClass('overflow-hidden')
        })
        return false;
    })
    $(window).on('scroll',function(){
        var topScroll = $(window).scrollTop();
        if(topScroll>=100){
            $('.btnTop').addClass('active')
        } else if(topScroll<100){
            $('.btnTop').removeClass('active')
        }
    })

    var slideNum = $('.statsMenu .swiper-slide.active').index()
    var swiper = new Swiper('.statsMenu', {
        slidesPerView:5,
        loop: false,
        autoplay:false,
        initialSlide:slideNum,
        freeMode :true
    });
    swiper.on('slideChangeStart', function () {
//        swiper.activeIndex()
        console.log(slideNum);
//        swiper.slideTo(3, 100);

    });



}

function layer_function(){
    var pop_height = $('.popupWrap').height()/2;
    $('.popupWrap').show().css({marginTop:-pop_height})
//    $('.popup-layer.'+name).show().css({marginTop:-pop_height}).addClass('bounceInUp')
    return false;
}

function layer_init(name){
    var pop_height = $('.popup-layer.'+name).height()/2;
    $('.overay-layer').show().addClass('fadeIn')
//    $('.popup-layer').show().css({marginTop:-pop_height}).addClass('bounceInUp')
    $('.popup-layer.'+name).show().css({marginTop:-pop_height}).addClass('bounceInUp')
    return false;
}