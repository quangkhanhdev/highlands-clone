import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const Options = document.querySelectorAll(".main-product .option");
const PriceValue = document.querySelector(".price .value");
let currentOption = Options[0];

Options.forEach((option) => {
	option.addEventListener("click", () => changeCurrentOption(option));
});

function changeCurrentOption(option) {
	currentOption.classList.toggle("current");
	option.classList.toggle("current");
	currentOption = option;
	updatePriceOption(currentOption);
}

function updatePriceOption(currentOption) {
	const price = currentOption.getAttribute("data-price");
	PriceValue.textContent = Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(price);
}

new Swiper(".relevant-products .slider", {
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
	},
	navigation: {
		nextEl: ".btn--next",
		prevEl: ".btn--prev",
	},
});
