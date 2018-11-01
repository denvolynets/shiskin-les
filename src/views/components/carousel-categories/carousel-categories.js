export default function carouselCategories() {
	(function () {

        let categoriesSwiper = new Swiper('.js-carousel__categories .swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoHeight: true
        });

	})();
}
