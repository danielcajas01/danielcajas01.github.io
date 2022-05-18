let information = document.createElement("div");
	let screen = document.getElementById("screen");
	information.style.display = "none";
	screen.appendChild(information);
	information.classList.add("information")
const PUZZLE_SIZE = 3; 
let cardCount = 0
function createCard(appName, shuffle){
	cardCount++;
	let body = document.getElementById("screen");
	let card = document.createElement("div");
	card.classList.add("card");
	let puzzle = document.createElement("div");
	puzzle.classList.add("puzzle");
	puzzle.id = "puzzles";
	puzzle.id = "c" + cardCount;
	let data = document.createElement("div");
	data.style.visibility = "hidden";
	let heading = document.createElement("h6");
	heading.innerHTML = appName;
	data.appendChild(heading);
	let monthRow = document.createElement("div");
	monthRow.classList.add("monthRow");


let colOne = document.createElement("p");
	colOne.innerHTML = "1";
	monthRow.appendChild(colOne);


let colTwo = document.createElement("p");
	colTwo.innerHTML = "2";
	monthRow.appendChild(colTwo);


let colThree = document.createElement("p");
	colThree.innerHTML = "3";
	monthRow.appendChild(colThree);

	data.appendChild(monthRow);
	body.appendChild(puzzle);
	card.appendChild(data);
	
	//body.appendChild(card);
	createPuzzle(PUZZLE_SIZE, appName, cardCount, shuffle);

};


createCard("puzzle_images",true);


function createData(){

};

$.get("https://danielcajas01.github.io/apps_api.json", function(data, status){
	console.log(data);
	for (let i = 0; i<22; i++){
		cardCount++;
	console.log([i]);
	let card = document.createElement("div");
	card.classList.add("card");
	let d = document.createElement("div");
	let heading = document.createElement("h2");
	heading.innerHTML = data[i].app;
	d.appendChild(heading);
	let monthRow = document.createElement("div");
	monthRow.classList.add("monthRow");


let colOne = document.createElement("h4");
	colOne.innerHTML = "February";
let data1 = document.createElement("p");
	data1.innerHTML = `<br>-Information: ${data[i].information}<br>- Time: ${data[i].time}`;
	colOne.appendChild(data1);
	monthRow.appendChild(colOne);


let colTwo = document.createElement("h4");
	colTwo.innerHTML = "March";
	data2 = document.createElement("p");
	data2.innerHTML = `<br>-information: ${data[i+22].information}<br>- time: ${data[i+22].time}`;
	colTwo.appendChild(data2);
	monthRow.appendChild(colTwo);


let colThree = document.createElement("h4");
	colThree.innerHTML = "April";
	data3 = document.createElement("p");
	data3.innerHTML = `<br>-information: ${data[i+44].information}<br>- time: ${data[i+44].time}`;
	colThree.appendChild(data3);
	monthRow.appendChild(colThree);
	console.log(data)
	d.appendChild(monthRow);
	card.appendChild(d);
	information.appendChild(card);
	}
});

function create(appName, notData){
	cardCount++;
	let card = document.createElement("div");
	card.classList.add("card");
	let data = document.createElement("div");
	let heading = document.createElement("h2");
	heading.innerHTML = appName;
	data.appendChild(heading);
	let monthRow = document.createElement("div");
	monthRow.classList.add("monthRow");


let colOne = document.createElement("h4");
	colOne.innerHTML = "1";
	monthRow.appendChild(colOne);


let colTwo = document.createElement("h4");
	colTwo.innerHTML = "2";
	monthRow.appendChild(colTwo);


let colThree = document.createElement("h4");
	colThree.innerHTML = "3";
	monthRow.appendChild(colThree);

	data.appendChild(monthRow);
	card.appendChild(data);
	information.appendChild(card);

};