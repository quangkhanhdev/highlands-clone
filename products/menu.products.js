import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

new Swiper(".product-slider", {
	direction: "horizontal",
	loop: true,
	grabCursor: true,
	slidesPerView: 2,
	spaceBetween: 10,
	breakpoints: {
		576: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		996: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: ".btn--next",
		prevEl: ".btn--prev",
	},
});
