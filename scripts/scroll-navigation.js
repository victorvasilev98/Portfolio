const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav ul a");

function changeLinkState() {
	let index = sections.length - 1;

	// Track if we are at the bottom of the page
	if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
		index = sections.length - 1;
	}
	else {
		// Loop over sections to see where our scroll is at
		while (index >= 0 && window.scrollY + 50 < sections[index].offsetTop) {
			index--;
		}	
	}
	
	// Remove previous nav activations
	navLinks.forEach((link) => link.classList.remove("active"));

	// We sometimes could be out of all sections
	// set nav link as active when we've scrolled to its section
	if (navLinks[index])
		navLinks[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);


// For scroll-buttons 
const scrollToElements = [
	document.querySelector('header'),
	document.querySelector('#welcome'),
	document.querySelector('#professional-projects'),
	...document.querySelectorAll('#professional-projects > ul > li'),
	document.querySelector('#curriculum-vitae'),
	document.querySelector('#personal-projects'),
	document.querySelector('#contact')
];

const buttons = document.querySelectorAll('.scroll-buttons button');

Array.from(buttons).forEach(button => {

	button.addEventListener('click', () => {
		const currentPos = window.scrollY + (button.dataset.dir === "up" ? -1 : 1);
		let previous = null;
		let next = null;

		for (let i = 0; i < scrollToElements.length; i++) {
			if (currentPos < scrollToElements[i].offsetTop) {
				previous = scrollToElements[i - 1];
				next = scrollToElements[i];
				break;
			}
		}

		if (button.dataset.dir === "up") {
			if (!previous) return;

			window.scrollTo({
				top: previous.offsetTop,
				behavior: "smooth"
			});
		}
		else {
			if (!next) return;

			window.scrollTo({
				top: next.offsetTop,
				behavior: "smooth"
			});
		}
	})

});