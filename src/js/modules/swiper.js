import Swiper from "swiper";
import "swiper/css";

function getPopularToursSwiper() {
	const swiper = new Swiper(".popular__tours-swiper", {
		slidesPerView: "auto",
		grabCursor: true,
		slidesPerView: 3,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
		},
	});
}

export default getPopularToursSwiper;
