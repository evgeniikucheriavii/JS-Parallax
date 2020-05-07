const bgTree = document.getElementById("background-tree");

const parallax =
{
	x: 0,
	y: 0
};

document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e)
{
	let offsetX = (e.clientX / window.innerWidth * 30) - 15;
	let offsetY = (e.clientY / window.innerHeight * 10) - 5;

	bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}