(function ($) {
    $(document).ready(function () {
        // var bannerSwiper = new Swiper(".banner__swiper", {
        //     loop: true,
        //     autoplay: true,
        //     pagination: {
        //         el: ".banner__swiper .swiper-pagination",
        //         clickable: true
        //     },
        //     navigation: {
        //         nextEl: ".banner__swiper .swiper-button-next",
        //         prevEl: ".banner__swiper .swiper-button-prev",
        //     },
        // });

        var featuresSwiper = new Swiper(".features__swiper", {
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1024: {
                            slidesPerView: 4,
                    spaceBetween: 30,
                    }
                    },
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