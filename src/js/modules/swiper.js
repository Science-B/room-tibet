import Swiper from "swiper";
import "swiper/css";

function getPopularToursSwiper() {
	const swiper = new Swiper(".popular__tours-swiper", {
		slidesPerView: "auto",
		grabCursor: true,
		spaceBetween: 20,
	});
}

export default getPopularToursSwiper;
