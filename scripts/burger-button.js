const button = document.querySelector(".burger-button");
const nav = document.querySelector("nav");


button.addEventListener("click", () => {
	const currentState = button.getAttribute("data-state");

	if (!currentState || currentState === "closed") {
		button.setAttribute("data-state", "opened");
		button.setAttribute("aria-expanded", "true");
		nav.classList.add('active');
	} else {
		button.setAttribute("data-state", "closed");
		button.setAttribute("aria-expanded", "false");
		nav.classList.remove('active');
	}
});

const links = document.querySelectorAll("nav ul a");
// Close burger menu and nav on link click
links.forEach(link => {
	link.addEventListener('click', () => {
		button.setAttribute("data-state", "closed");
		button.setAttribute("aria-expanded", "false");
		nav.classList.remove('active');
	});
})
