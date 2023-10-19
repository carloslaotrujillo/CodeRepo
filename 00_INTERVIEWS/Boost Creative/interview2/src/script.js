function animateValue(element, start, end, duration) {
	let startTimestamp = null;

	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		element.textContent = formatNumber(Math.floor(progress * (end - start) + start));
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};

	function formatNumber(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	window.requestAnimationFrame(step);
}

const numbers = document.querySelectorAll(".number");
let hasAnimated = false;

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !hasAnimated) {
				animateValue(numbers[0], 0, 5000, 4500);
				animateValue(numbers[1], 0, 1400, 4500);
				hasAnimated = true;
			}
		});
	},
	{
		threshold: 0.5,
	}
);

observer.observe(document.querySelector(".stats"));
