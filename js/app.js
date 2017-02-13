requirejs.config({
    baseUrl: 'js/',
    paths: {
        jquery: 'lib/jquery-3.1.1.min',
        swiper: 'plugin/swiper/js/swiper.jquery.umd.min'
    }
});

requirejs(['jquery','swiper'], function ($, Swiper) {
    var mySwiper = new Swiper('.swiper-container',{
            initialSlide :0,
            autoplay : 1000,
            loop : true
        });

    console.log($);
});
