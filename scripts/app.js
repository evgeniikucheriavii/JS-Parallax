//Получаем элемент фона с деревом
const bgTree = document.getElementById("background-tree");

//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e)
{
	//Высчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 1 - ширина экрана
	//Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
	//Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
	//Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
	let offsetX = (e.clientX / window.innerWidth * 30) - 15;
	let offsetY = (e.clientY / window.innerHeight * 10) - 5;

	//Меняем положение фона
	bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}