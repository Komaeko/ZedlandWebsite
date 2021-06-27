$(document).on("pagecontainerbeforeshow", function (e, ui) {//Initialises functions
	var page = ui.toPage[0].id;//Get Page ID's
	if( page == 'five' ) {//If page id = five
		$.get("data/accommodationlist1.json", function(result, status) {//Get accomodation list
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#accommodationlist1").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == 'four' ) {//If page id = four
		$.get("data/accommodationlist2.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#accommodationlist2").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == 'three' ) {//If page id = three
		$.get("data/accommodationlist3.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#accommodationlist3").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == 'two' ) {//If page id = two
		$.get("data/spareroomlist1.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#spareroomlist1").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == 'one' ) {//If page id = one
		$.get("data/spareroomlist2.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#spareroomlist2").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == '130aWeek' ) {//If page id = 130aWeek
		$.get("data/130list.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#130list").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == '110aWeek' ) {//If page id = 110aWeek
		$.get("data/110list.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#110list").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
	if( page == '90aWeek' ) {//If page id = 90aWeek
		$.get("data/90list.json", function(result, status) {
		var accommodation = "";//creates variable for accommodation
		for (var i = 0; i < result.length; i++) { //For each value 
			accommodation += "<li><a href='accommodation.html?id=" +  //Create the following html
			result[i].id + //Adds Page ID
			"'><img src='images/" +  
			result[i].thumbnail + //Adds image thumbnail
			"'>" + 
			result[i].name + //Adds accomodation title
			"<p>" + 
			result[i].shortdescription + //Adds short description
			"</p></a></li>";
		}
		$("#90list").html(accommodation).listview("refresh"); //Refreshes listview
		}, "json");	
	}
});