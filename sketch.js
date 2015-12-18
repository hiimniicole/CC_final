var houseImg;
var roomImg;
var bathroomImg;
var rattImg;
var mouse;

var currentPage = "Housepage";

function preload() {
  houseImg = loadImage("pics/house.png");
	roomImg = loadImage("pics/room.png");
	bathroomImg = loadImage("pics/bathroom.png");
	rattImg = loadImage("pics/rat.png");
}



function setup() {
	createCanvas(790, 550);

}


//house and room load
function mousePressed() {
	if(currentPage === "Housepage"){
			currentPage = "Roompage";
		} else if (currentPage === "Roompage"){
			currentPage = "Bathroompage";
		} else if (currentPage === "Bathroompage"){
			currentPage = "Housepage";
		}
}
function draw() {
	if(currentPage === "Housepage"){
			drawPageHouseScene();
			} else if (currentPage === "Roompage"){
			drawPageRoomScene();
			} else if (currentPage === "Bathroompage"){
			drawPageBathroomScene();
	}
}
function drawPageHouseScene() {
 image(houseImg, 0, 0);
image(rattImg, mouseX, mouseY);

}
function drawPageRoomScene() {
	image(roomImg, 0, 0);
image(rattImg, mouseX, mouseY);
}

function drawPageBathroomScene() {

	image(bathroomImg, 0, 0);
image(rattImg, mouseX, mouseY);
}
