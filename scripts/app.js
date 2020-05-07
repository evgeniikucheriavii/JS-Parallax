const bgTree = document.getElementById("background-tree");

const parallax =
{
	x: 0,
	y: 0
};

document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e)
{
	let offsetX = (e.clientX / window.innerWidth * 50) - 25;
	let offsetY = (e.clientY / window.innerHeight * 50) - 25;

	bgTree.setAttribute("style", "left: " + offsetX + "px; top: " + offsetY + "px;");
}