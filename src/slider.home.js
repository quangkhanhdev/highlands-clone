import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	grabCursor: true,
	lazyPreloadPrevNext: 1,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
