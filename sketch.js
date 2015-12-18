var houseImg;
var roomImg;
var bathroomImg;
var ratImg;
var mouseWasPressed;

var currentPage = "Housepage";

function preload() {
  houseImg = loadImage("pics/house.png");
	roomImg = loadImage("pics/room.png");
	bathroomImg = loadImage("pics/bathroom.png");
	ratImg = loadImage("pics/rat.png");
}


function setup() {
	createCanvas(800, 800);

}

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


}
function drawPageRoomScene() {
	image(roomImg, 0, 0);
}
function drawPageBathroomScene() {

	image(bathroomImg, 0, 0);
}
