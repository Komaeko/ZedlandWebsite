$(document).on("pagecontainerbeforeshow", function (e, ui) { //Initialises function
	var page = ui.toPage[0].id;//Gets Page ID
    if(page === 'accommodationpage') { //IF Page ID = accommodationpage
	var thisPage = "#" + page; //Page ID + # //Helps some of the variables below find the HTML selector
	var thisUrl = $(location).attr('search'); //Gets ID of Page from URL location
	var thisId = thisUrl.split("=")[1];//Splits ID of Page on = symbol and takes second piece of data giving us the ID number
		$.get("data/accommodation" + thisId +".json", function(result, status) {//Gets json file with the same ID
			$("#accommodationtitle",thisPage).text(result.name);// Gets Accomadation title and puts it into header
			console.log(result.image1);	
			$("#accommodationid", thisPage).html(thisId); // Gets Accomadation ID
			var image1 = 
			"<img src='images/" + 
			result.image1 + 
			"' alt='accommodation' class='accommodation'>";
			$("#contentImage1", thisPage).html(image1);// Gets Image 1 and puts it into UL
			var image2 = 
			"<img src='images/" + 
			result.image2 + 
			"' alt='accommodation' class='accommodation'>";
			$("#contentImage2", thisPage).html(image2);// Gets Image 2 and puts it into UL
			var image3 = 
			"<img src='images/" + 
			result.image3 + 
			"' alt='accommodation' class='accommodation'>";
			$("#contentImage3", thisPage).html(image3);// Gets Image 3 and puts it into UL
			var image4 = 
			"<img src='images/" + 
			result.image4 + 
			"' alt='accommodation' class='accommodation'>";
			$("#contentImage4", thisPage).html(image4);// Gets Image 4 and puts it into UL
			var features = result.description;
			$("#contentFeatures", thisPage).html(features);// Gets features paragraph and puts it into DIV
			var location = result.location;
			$("#contentLocation", thisPage).html(location);// Gets location paragraph and puts it into DIV
			var prices = result.price;
			$("#contentPrices", thisPage).html(prices);// Gets prices paragraph and puts it into DIV
			var maplink = "<a href=\"map.html?id="+ thisId +"\" data-role=\"button\" data-icon=\"search\" id=\"mapbtn\"><span style=\"color:black;text-decoration: none;font-weight:bold\">View on a Map</span></a>";
			$("#mapbtn", thisPage).html(maplink);//Opens maps page with the same page ID 
		}, "json");
	}
});
