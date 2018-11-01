export default function banner() {
	(function () {

        setTimeout(() => {
            let banner = document.querySelectorAll('.banner-title')
            for (let i = 0; i < banner.length; i++) {
                new CircleType(banner[i]).radius(300);
            }
            $('.js-carousel__banner').addClass('show');
        }, 20);

        
        let bannerSwiper = new Swiper('.js-carousel__banner .swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });

	})();
}
