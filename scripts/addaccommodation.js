$(document).on("pagecreate", "#accommodationpage", function() {  //Adds current page ID to local storage
	$( "#addbtn" ).click(function() {
		if (typeof(Storage) != "undefined") {
			storeaccommodationDetails(getaccommodationId(), getaccommodationTitle()); //Calls the functions below
		} else {
			$("#nostorage").text("The browser does not support local storage"); //Error message
		}
	});
});  

function getaccommodationId() {  // Gets Accomadation ID and gives it to function below
	var accommodationId = $("#accommodationid").text();
	return accommodationId;
}

function getaccommodationTitle() { // Gets Accomadation Title and gives it to function below
	var accommodationTitle = $("#accommodationtitle").text();
	return accommodationTitle;
}

 function storeaccommodationDetails(id, title) {  
	var accommodation = {accommodationid: id, accommodationtitle: title};//This creates the json data from functions above
  if(localStorage.getItem('favourites') === null){//If local storage item favourites not found
    var favourites = []; //Creates array
    favourites.push(accommodation);
    localStorage.setItem('favourites', JSON.stringify(favourites));//Adds key value pair to local storage
  } else {
    var favourites = JSON.parse(localStorage.getItem('favourites')); //Gets local storage item favourites
    favourites.push(accommodation);
    localStorage.setItem('favourites', JSON.stringify(favourites));//Adds new key value pair to local storage within existing array 
	} //Some ideas and techniques inspired by tutorial at https://www.youtube.com/watch?v=DIVfDZZeGxM
}