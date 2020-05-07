class Particle
{
	constructor(x, y, z, color)
	{
		this.x = x;
		this.y = y;
		this.z = z;

		let blurs = [ 0, 2, 1, 0 ];

		this.blur = blurs[z];
		this.speed = z;
		this.color = color;

		this.elem = null;
	}

	Move(d)
	{
		this.y += this.speed * d;
	}
}

let scrollPosition = 0;

const particlesContainer = document.getElementById("particles");

const particles = 
[
	new Particle(1650, 450, 3, "#FF7019"),
	new Particle(1700, 450, 1, "#FF7019"),
	new Particle(220, 500, 3, "#FF7019"),
	new Particle(600, 700, 1, "#FF7019"),
	new Particle(900, 600, 4, "#FF7019"),
	new Particle(1200, 900, 2, "#FF7019"),
];

Fill();

window.addEventListener("scroll", function (e) { Scroll(e); });

function Scroll(e)
{
	let d = 0;
	if(window.pageYOffset > scrollPosition)
	{
		d = 1;
	}
	else
	{
		d = -1;
	}
	
	scrollPosition = window.pageYOffset;

	for(let i = 0; i < particles.length; i++)
	{
		particles[i].Move(d);
	}

	Fill();
}

function Fill()
{
	particlesContainer.innerHTML = "";

	for(let i = 0; i < particles.length; i++)
	{
		let div = document.createElement("div");
		div.className = "particle";

		div.setAttribute("style", "top: " + particles[i].y + "px; left: " + particles[i].x + "px; z-index: " + particles[i].z + "px; filter: blur(" + particles[i].blur + "px); background: " + particles[i].color + "; ");
		particlesContainer.appendChild(div);
	}
}

