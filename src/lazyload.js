document.addEventListener("DOMContentLoaded", ready);

function ready() {
	if (window.IntersectionObserver) {
		const lazyImageList = document.querySelectorAll("img[lazy-src]");
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target.hasAttribute("lazy-src")) load(entry.target);
			});
		});

		lazyImageList.forEach((lazyImage) => {
			observer.observe(lazyImage);
		});
	} else console.error("- lazyload with IntersectionObserver is not supported");
}

function load(lazyImage) {
	const src = lazyImage.getAttribute("lazy-src");
	lazyImage.classList.add("animation--fadeIn");
	lazyImage.setAttribute("src", src);
	lazyImage.removeAttribute("lazy-src");
}
