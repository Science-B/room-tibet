import Swiper from "swiper";
import "swiper/css";

export function getPopularToursSwiper() {
	const swiper = new Swiper(".popular__tours-swiper", {
		slidesPerView: "auto",
		grabCursor: true,
		spaceBetween: 20,
	});
}

export function getSwiperBlog() {
	if (window.innerWidth < 589) {
		const swiper = new Swiper(".blog-swiper", {
			slidesPerView: "auto",
			spaceBetween: 20,
			grabCursor: true,
		});
	}
}

export function getSwiperPhotos() {
	if (window.innerWidth < 1210) {
		const swiper = new Swiper(".photos__swiper", {
			slidesPerView: "auto",
			spaceBetween: 20,
			grabCursor: true,
		});
	}
}
