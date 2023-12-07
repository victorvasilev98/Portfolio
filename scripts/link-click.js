let anchors = document.getElementsByTagName("A");

Array.from(anchors).forEach(anchor => {
	if(!anchor.hash) return;
	if(anchor.origin + anchor.pathname != self.location.href) return;

	const anchorPoint = document.getElementById(anchor.hash.replace(/#/, ""));

	anchor.addEventListener("click", function(e) {
		window.scrollTo({
			top: anchorPoint.offsetTop,
			behavior: "smooth"
		});
		e.preventDefault();
	}, false);
});