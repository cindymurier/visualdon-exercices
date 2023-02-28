"use strict";

const bodyContainer = document.querySelector("body");

console.log(bodyContainer);

// ## On click
// Changer la couleur du rectangle ci-dessus en cliquant sur le rectangle (et revenir à la couleur initiale en cliquant une deuxième fois)
bodyContainer.addEventListener("click", function (e) {
	const type = e.target.tagName;

	if (type == "rect") {
		if (e.target.getAttribute("fill") == "red") {
			e.target.setAttribute("fill", "blue");
		} else {
			e.target.setAttribute("fill", "red");
		}
	}
});

// ## On hover
// Agrandir le rayon extérieur du donut que vous avez créé on hover
bodyContainer.addEventListener("mouseover", (e) => {
	const type = e.target.tagName;

	if (type == "circle" && e.target.getAttribute("r") == "60") {
		e.target.setAttribute("r", "80");
	}
});

// ## Prenez la première lettre de votre prénom que vous avez créée ci-dessus. Faite bouger une forme de votre choix le long de la lettre
// Astuces: `<animateMotion>`
