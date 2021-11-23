function changeImage(img) {
    $("#backgroundImage").attr("src", img);
}

function goToWebPage(webPage){
	//changes the website location
	window.location= webPage
}

	
	$('#event1').hover(function(){
		changeImage("Images/bighall.jpeg")
	});

	$('#event2').hover(function(){
		changeImage("Images/smokeyclub.png")

	});

	$('#event3').hover(function(){
		changeImage("Images/littlecafe.png")
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

	
	//This is for the second file// 



	function printArtist(venue){
		for (var i = 0; i < venueItems.length; i++) {
			if (venueItems[i].venue == venue){
				console.log(venueItems[i])
			}

		}
	}
	function showData(artist){
		$(artist).toggle()

	}
	function displayArtist(venue){
		var htmlText = ""
		for (var i = 0; i < venueItems.length; i++) {

			if (venueItems[i].venue == venue){
				htmlText = 

				'<h1 class="artist">'+venueItems[i].artist+'</h1>'+
				'<button class="showButton" onclick="showData(item'+i+')"> Show me show time </button>'+
				'<div class="artistData" id="item'+i+'" style="display:none">'+
				'<p>'+venueItems[i].date+'</p>'+
				'<p>'+venueItems[i].city+'</p>'+
				'<p>'+venueItems[i].state+'</p>'+
				'<p>'+venueItems[i].show_time+'</p>'+
				'<p>$'+venueItems[i].price+'</p>'+
				'<p>'+venueItems[i].currency+'</p>'+
				'</div>'

		$("#data").append(htmlText)
			}

		}
		
	}

	

		