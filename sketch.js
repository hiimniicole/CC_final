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
	createCanvas(800, 800);

}
//function draw() {
	//background(0, 0, 0);
	//noStroke();
	//fill(255, 255, 255, 50);

	//for (var i = 0; i < 100; i++){
		//ellipse(mouseX+random(-40, 40), mouseY+random(-40, 40), 20, 20);
	//}
//}

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


}
function drawPageRoomScene() {
	image(roomImg, 0, 0);
}
function drawPageBathroomScene() {

	image(bathroomImg, 0, 0);
}
//function draw() {
	//background(255, 255, 255);
	//put background here

	//image(rattImg, mouseX, mouseY);
//image(houseImg,0,0);
//}
