var houseImg;
var roomImg;
var bathroomImg;
var ratImg;
function preload() {
  houseImg = loadImage("pics/house.png");
roomImg = loadImage("pics/room.png");
bathroomImg = loadImage("pics/bathroom.png");
ratImg = loadImage("pics/rat.png");
}
function setup() {
	createCanvas(800, 800);
}

function draw() {

	//put background here
	image(houseImg,0,0);
}
