$(document).on("pagecontainerbeforeshow", function (e, ui) { //Initialises functions
	var page = ui.toPage[0].id;
	if( page == 'myAccommodation' ) {
		if (typeof(Storage) != "undefined") { // Tests for local storage capability
      if (localStorage.getItem("favourites") === null){  // Tests for saved favourites
        var showFavourites = document.getElementById('showFavourites');//Gets HTML element
        showFavourites.innerHTML = "<p>You haven't selected any favourites yet</p>";//Message
        }
        else{
          getFavourites();//Calls the function below
        }
		} else {
			$("#nostorage").text("The browser does not support storage");  //Error message
		}
	}
});

function getFavourites(){ //Accesses Local storage data and runs through data
  var showFavourites = document.getElementById('showFavourites'); //Gets HTML element
  showFavourites.innerHTML = ''; //Resets HTML  //Delete Function doesn't work well without this
    var favourites = JSON.parse(localStorage.getItem('favourites'));//Gets JSON Data and Parses it
    for(var i = 0; i < favourites.length; i++){//For each value until the end
      var accommodationid = favourites[i].accommodationid; // Creates variable for accommodationid
      var accommodationtitle = favourites[i].accommodationtitle; // Creates variable for accommodationtitle
      showFavourites.innerHTML += //Changes HTML to the following
      '<div class="ui-grid-a">'+
      '<div class="ui-block-a">'+
      "<a href=accommodation.html?id=" + accommodationid + " class='ui-shadow ui-btn ui-icon-carat-r ui-btn-icon-right ui-corner-all'>" + accommodationtitle + "</a></div>"+
      '<div class="ui-block-b">'+
      '<a onclick="deleteFavourite(\''+accommodationtitle+'\')" class="ui-shadow ui-btn ui-icon-delete ui-btn-icon-right ui-corner-all" href="#">Delete</a></div>'+
      '</div>';  //Button calls delete function
    }
} //Some ideas and techniques inspired by tutorial at https://www.youtube.com/watch?v=DIVfDZZeGxM

function deleteFavourite(accommodationtitle){//Deletes Favourite
  var favourites = JSON.parse(localStorage.getItem('favourites'));//Gets JSON Data and Parses it
  for(var i =0;i < favourites.length;i++){//For each value until the end
    if(favourites[i].accommodationtitle == accommodationtitle){//IF value matches accommodationtitle
      favourites.splice(i, 1); //Removes each value in array
    }
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));//
  getFavourites();//Calls get favourites function again to refresh page
} //Some ideas and techniques inspired by tutorial at https://www.youtube.com/watch?v=DIVfDZZeGxM