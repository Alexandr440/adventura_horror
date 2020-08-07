$(document).ready(function () {

    //закрыть попап окно Благоларности за заявку
    // $(".thanksblank-close").click(function(){
    //    $('.thanksblank').removeClass('thanksblank-active'); 
    // });

    //маска для телефона
    $("[type='tel']").mask('+7(999) 999-99-99');


    //выезжающее мобильное меню
    var mobili = $('.mobil');
    var menuf = $('.mobil-list');
    var menua = $('.mobil-list a');
    var mobclose = $('.mobil-close');

    mobili.click(function () {
        menuf.toggleClass('mobil-list_active');
    });
    menua.click(function () {
        menuf.removeClass('mobil-list_active');
    });
    mobclose.click(function () {
        menuf.removeClass('mobil-list_active');
    });


    //slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        /*lazyLoad: 'ondemand',*/
        speed: 500,
        arrows: true,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        dots: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]

    });


    //почта
    // $("form").submit(function(event) {
    //     event.preventDefault();

    //     var name = document.querySelector(".form__name");
    //     var phone = document.querySelector(".form__telephon");


    //     if (name.value == '' || phone.value == '' ) {           
    //         valid = false;
    //         return valid;          
    //     }

    //     $.ajax({
    //         type: "POST",
    //         url: "smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         //alert("отправлена заявка")

    //         $("form").trigger("reset");
    //         $('.thanksblank').addClass('thanksblank-active');
    //         $('.popup-over').fadeOut();       

    //     });
    //     return false;
    // });


    //замедление прокрутки из меню

    $('.menu a ').on('click', function (e) {
        e.preventDefault();
        //прикручиваем актив класс
        $('.menu a').removeClass("active").filter(this).addClass("active");
        //прокрутка 
        var selector = $(this).attr('href');
        var h = $(selector);
        $('html,body').animate({
            scrollTop: h.offset().top - 70
        }, 1000);
    });

    //прокрутка на первый экран
    var btnUp = $('.up');

    function scroolBtn() {
        var top = $(this).scrollTop();
        if (top > 700) {
            btnUp.fadeIn(500);
        } else {
            btnUp.fadeOut(500);
        }
    }
    scroolBtn();
    $(document).on('scroll', scroolBtn);
    btnUp.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });


    /*галлерея circus*/
    var $it = $('.gall-circus').find('> li'),
        $linkus = $it.find('> a'),
        $box = $('.box'),
        $nex = $('.nex'),
        $pre = $('.pre'),
        $clouse = $('.clouse'),
        liInd,
        targetImage;

    function replaceImage(sr) {
        $box.find('img').attr('src', sr);
    }

    function getHref(ind) {
        return $it.eq(ind).find('> a').attr('href');
    }

    $linkus.click(function (event) {
        event.preventDefault();
        liInd = $(this).parent().index();
        targetImage = $(this).attr('href');
        replaceImage(targetImage);
        $box.fadeIn();
    });

    $clouse.click(function () {
        $box.fadeOut();
    });

    $nex.click(function () {
        if ((liInd + 1) < $it.length) {
            targetImage = getHref(liInd + 1);
            liInd++;
        } else {
            targetImage = getHref(0);
            liInd = 0;

        }
        replaceImage(targetImage);

    });

    $pre.click(function () {
        if (liInd > 0) {
            targetImage = getHref(liInd - 1);
            liInd--;
        } else {
            targetImage = getHref($it.length - 1);
            liInd = $it.length - 1;
        }
        replaceImage(targetImage);
    });




    /*галлерея синистр*/
    var $li = $('.gallery-list').find('> li'),
        $links = $li.find('> a'),
        $lightbox = $('.lightbox'),
        $next = $('.next'),
        $prev = $('.prev'),
        $close = $('.close'),
        liIndex,
        targetImg;

    function replaceImg(src) {
        $lightbox.find('img').attr('src', src);
    }

    function getHruf(index) {
        return $li.eq(index).find('> a').attr('href');
    }

    $links.click(function (event) {
        event.preventDefault();
        liIndex = $(this).parent().index();
        targetImg = $(this).attr('href');
        replaceImg(targetImg);
        $lightbox.fadeIn();
    });
    $close.click(function () {
        $lightbox.fadeOut();
    });


    $next.click(function () {
        if ((liIndex + 1) < $li.length) {
            targetImg = getHruf(liIndex + 1);
            liIndex++;
        } else {
            targetImg = getHruf(0);
            liIndex = 0;
        }
        replaceImg(targetImg);
    });

    $prev.click(function () {
        if (liIndex > 0) {
            targetImg = getHruf(liIndex - 1);
            liIndex--;
        } else {
            targetImg = getHruf($li.length - 1);
            liIndex = $li.length - 1;
        }
        replaceImg(targetImg);
    });


    /*галлерея zlo*/
    var $liz = $('.galler-zlolist').find('> li'),
        $linkz = $liz.find('> a'),
        $lightboxz = $('.lightboxz'),
        $nextz = $('.nextz'),
        $prevz = $('.prevz'),
        $closed = $('.closed'),
        liIndexz,
        targetImgz;

    function replaceImgz(src) {
        $lightboxz.find('img').attr('src', src);
    }

    function getHrufz(index) {
        return $liz.eq(index).find('> a').attr('href');
    }

    $linkz.click(function (event) {
        event.preventDefault();
        liIndexz = $(this).parent().index();
        targetImgz = $(this).attr('href');
        replaceImgz(targetImgz);
        $lightboxz.fadeIn();
    });
    $closed.click(function () {
        $lightboxz.fadeOut();
    });


    $nextz.click(function () {
        if ((liIndexz + 1) < $liz.length) {
            targetImgz = getHrufz(liIndexz + 1);
            liIndexz++;
        } else {
            targetImgz = getHrufz(0);
            liIndexz = 0;
        }
        replaceImgz(targetImgz);
    });

    $prevz.click(function () {
        if (liIndexz > 0) {
            targetImgz = getHrufz(liIndexz - 1);
            liIndexz--;
        } else {
            targetImgz = getHrufz($liz.length - 1);
            liIndexz = $liz.length - 1;
        }
        replaceImgz(targetImgz);
    });





    //Открытие модального окна
    $('.certificate__btn').on('click', function () {

        //$(".form__title").text('gjikb d gjge');

        $('.popup-certificate').fadeIn();

    });

    $('.button-o').on('click', function () {

        $('.popup-over').fadeIn();

    });


    $('.stock-block__button').on('click', function () {

        $('.popup-over').fadeIn();
        $('body').addClass('no-scroll');

    });
    $('.offerta__cta-button').on('click', function () {
        $('.popup-over').fadeIn();
        $('body').addClass('no-scroll');

    });
    $('.cashbox__button').on('click', function () {
        $('.popup-over').fadeIn();
    });




    //закрытие модального окна
    $('.form__close').on('click', function () {
        $('.popup-over').fadeOut();
        $('body').removeClass('no-scroll');

    });

    $('.form__close').on('click', function () {
        $('.popup-certificate').fadeOut();
        $('body').removeClass('no-scroll');

    });


    //показывать карту токо когда докрутили до нее
    var rev = $(".reviews");
    var reviewsTop = rev.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {

            $('.contact-maps').html(
                '<script type="text/javascript" class="contact-yn" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2316b0589f9aa876e9d4d734a02813a01e083b87ff5059f35dfe76f40cb48f8e&amp;height=350&amp;lang=ru_RU&amp;scroll=false"></script>'
            );

            $('.reserv-select').html(
                '<iframe id="scheduleWidgetAll" class="reserv-select__bronika"  src="https://broni.biz/order/showAllSchedule/?userId=793&hash=dd34faa7b6c843bbe801472692435661&theme=gray&questId=2107,2117" frameborder="0" scrolling="no">Ваш браузер не поддерживает плавающие фреймы! </iframe><script>function widgetHeight(){let frame=document.getElementById("scheduleWidgetAll"),height=0,listener=function(event){if(event.data.constructor !== Object || event.data.type=="height"){height=parseInt(event.data.height);if(height!=frame.height){frame.style.height=height+"px"}}if(event.data.type=="scroll"){window.scrollTo({"top":document.getElementById("scheduleWidgetAll").getBoundingClientRect().top + pageYOffset - 50})}};function addEvent(elem,evnt,func){if(elem.addEventListener){elem.addEventListener(evnt,func,!1)}else if(elem.attachEvent){elem.attachEvent("on"+evnt,func)}else{elem["on"+evnt]=func}}addEvent(window,"message",listener)}widgetHeight() </script>'
            );
            $(window).unbind('scroll');


        }
    });












});

function newFunction() {
    var moblink = document.querySelector('.mobil-link'),
        mobmenu = document.querySelector('.mobaile-menu');
    moblink.on('click', function () {
        mobmenu.classList.addClass('mobaile-menu_active');
    });
}