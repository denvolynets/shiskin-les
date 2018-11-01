// Load app style
import '@/styles/style.scss'
// Load app style


// js components //
import rsForm from './scripts/rsForm'; //валидация форм
import banner from './views/components/banner/banner';
import carouselCategories from './views/components/carousel-categories/carousel-categories';
import carouselGallery from './views/components/carousel-gallery/carousel-gallery';
import carouselAbout from './views/components/carousel-about/carousel-about';
// js components //



const app = {
	load: () => {
		app.bindEvents();
	},

	bindEvents: () => {

        $('input[type="tel"]').inputmask('+7(999)-9999-99-99');

        banner();

        carouselCategories();

        carouselGallery();

        carouselAbout();

        $('form').rsForm();
        
	}
};

window.addEventListener('load', app.load);