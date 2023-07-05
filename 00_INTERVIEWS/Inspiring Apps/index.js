const state = {};

function initApp() {
	initState();
	makeDotsDraggable();
	makeSocketsDroppable();
}

function initState() {
	state.dotsCounter = 0;
	state.totalDots = $("#dots-drag > img").length;

	$("#dots-drag > img").animate({
		top: "0px",
		left: "0px",
	});
}

function makeDotsDraggable() {
	$("#dots-drag > img")
		.draggable({
			stack: "#dots-drag img",
			cursor: "move",
			revert: true,
		})
		.draggable("enable");
}

function makeSocketsDroppable() {
	$("#dots-socket > div")
		.droppable({
			accept: "#dots-drag img",
			drop: handleDotDrop,
		})
		.droppable("enable");
}

function handleDotDrop(event, ui) {
	let dotName = ui.draggable.attr("alt");
	let socketName = $(this).text();

	if (dotName === socketName) {
		$(this).droppable("disable");
		ui.draggable.draggable("disable");
		ui.draggable.draggable("option", "revert", false);
		ui.draggable.position({ of: $(this), my: "center", at: "center" });
		state.dotsCounter++;
	}

	if (state.dotsCounter === state.totalDots) {
		setTimeout(function () {
			alert("Cheers, you are a winner.");
			initApp();
		}, 250);
	}
}

$("#reset").click(function () {
	initApp();
});

$(document).ready(initApp);
