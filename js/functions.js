(function ($) {
    $(document).ready(function () {
        var bannerSwiper = new Swiper(".banner__swiper", {
            loop: true,
            pagination: {
                el: ".banner__swiper .swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".banner__swiper .swiper-button-next",
                prevEl: ".banner__swiper .swiper-button-prev",
            },
        });

        var featuresSwiper = new Swiper(".features__swiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: ".features__swiper .swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".features__swiper .swiper-button-next",
                prevEl: ".features__swiper .swiper-button-prev",
            },
        });
    });
})(window.jQuery);