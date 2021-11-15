function changeImage(img) {
    $("#backgroundImage").attr("src", img);
}

function goToWebPage(webPage){
	//changes the website location
	window.location= webPage
}

	
	$('#event1').hover(function(){
		changeImage("image/bighall.jpeg")
	});

	$('#event2').hover(function(){
		changeImage("image/smokeyclub.png")

	});

	$('#event3').hover(function(){
		changeImage("image/littlecafe.jpeg")
	});

	$('#event1').click(function(){
		goToWebPage("event1.html")

	});

	$('#event2').click(function(){
		goToWebPage("event2.html")

	});

	$('#event3').click(function(){
		goToWebPage("event3.html")
	});

	
	$('th').click(function(e){
		var target = $(e.target)
		$(target).attr("style", "background-color: orange")

	});





		