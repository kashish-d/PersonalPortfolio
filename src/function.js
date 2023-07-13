// Refactor it somehow with refs for react

function scrollSpy() {
	window.addEventListener("scroll", () => {
		const sections = document.querySelectorAll(".section");
		const navLinks = document.querySelectorAll(".app__nav-link");
		const burgerLinks = document.querySelectorAll(".app__burger-link");
		let currentSection = "";
		let value = window.scrollY;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 150;
			// console.log(sectionTop);
			if (value >= sectionTop) {
				currentSection = section.id;
			}
		});
		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.classList.contains(currentSection)) {
				link.classList.add("active");
			}
		});
		burgerLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.classList.contains(currentSection)) {
				link.classList.add("active");
			}
		});
	});
}

export default scrollSpy;
