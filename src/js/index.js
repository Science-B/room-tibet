import mobileNav from "./modules/mobile-nav.js";
import getAirDatePicker from "./modules/air-datepicker.js";
import {
	getPopularToursSwiper,
	getSwiperBlog,
	getSwiperPhotos,
} from "./modules/swiper.js";
import Choices from "choices.js";

customSelect("select");
getSwiperBlog();
getSwiperPhotos();
getPopularToursSwiper();
getAirDatePicker();
mobileNav();
