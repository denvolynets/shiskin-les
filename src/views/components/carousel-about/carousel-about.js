export default function carouselAbout() {
	(function () {

        let aboutSwiper = new Swiper('.js-carousel__about .swiper-container', {
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true
        });

	})();
}
