export default function carouselGallery() {
	(function () {

        let gallerySwiper = new Swiper('.js-carousel__gallery .swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true
        });

	})();
}
