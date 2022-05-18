const IMG_LOC = "images/" 

function createPuzzle(dimension, appName, cardCount, mix){
	createGrid(dimension, appName, cardCount); 
	if(mix) shuffle(10);
} 

function createGrid(numOfRows, appName, cardCount){
	let tileCount = 1;
	let grid = document.getElementById("c" + cardCount);
	console.log(grid);
	for(let row = 0; row < numOfRows; row++){
		let newRow = document.createElement('div');
		newRow.classList = "row"; 
		for( let tile = 0; tile < numOfRows; tile++){
		     let newTile = document.createElement('img');
		     newTile.classList = "tile";
		     newTile.src = IMG_LOC + appName + "/" + tileCount + ".jpg";
		     newTile.id = tileCount;
		     newRow.appendChild(newTile);
		     tileCount++;	
		}
		grid.appendChild(newRow); 
	}
}

let prevTile = null;

function swap(firstTile, secondTile){
	if(firstTile.parentElement.parentElement !=
		secondTile.parentElement.parentElement) return;
		let a = firstTile.src; 
	firstTile.src = secondTile.src;
	secondTile.src = a;
}

function checkForCompletion(tile){
let puzzle = tile.parentElement.parentElement;
let rows = puzzle.childNodes;
for (let i = 0; i<rows.length; i++){ 
	 let tiles = rows[i].childNodes;
for (let j = 0; j<tiles.length; j++){
	let lengthJpg = tiles[j].src.length;
	let jpg = tiles[j].src.substring(lengthJpg - 5, lengthJpg -4);
	console.log(jpg);
	if(jpg != tiles[j].id) return;
}
} console.log("winer,winer");
	document.getElementById("tittleText").style.display = "none";
	//puzzle.nextSibling.style.visibility = "visible";
	document.getElementById("lockScreenDisplay").style.display = "none";
	document.getElementById("lockScreenImage").style.display = "none";
	document.getElementById("c1").style.display = "none";
	information.style.display = "inline";
	information.style.overflowY = "scroll";
}

$(document).ready(function(){
	$(".tile").click(function(){
		if(prevTile == null){
			prevTile = this; 
			this.classList.add("selected");
		} 
		else{
			prevTile.classList.remove("selected");
			swap(this, prevTile);
			prevTile = null;
			checkForCompletion(this);

		}
});
});

function getById(id) {
	return document.getElementById(id.toString());
}

function shuffle(numChanges){
	for(let i = 0; i<numChanges; i++ ){
		let tile1 = getById(Math.floor(Math.random()*9)+1);
		let tile2 = getById(Math.floor(Math.random()*9)+1); 
		swap(tile1,tile2)
	}
}