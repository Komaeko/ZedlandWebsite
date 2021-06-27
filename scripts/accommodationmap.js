$(document).on("pagecontainershow", function (e, ui) {//Initialises functions
	var page = ui.toPage[0].id;
	if( page == 'map-page' ) {
		if (navigator.geolocation) { //Tests for geo location capability 
			navigator.geolocation.getCurrentPosition(initialize);  //Sends position to initalize function
		} else {
			documentgetElementById("nogeolocation").innerHTML = "Geolocation is not supported by this browser."; //Error message
		}
	}
}); 

function initialize(position) {

		var thisUrl = $(location).attr('search'); //Gets ID of Page from URL location
		var thisId = thisUrl.split("=")[1];//Splits ID of Page on = symbol and takes second piece of data giving us the ID number
		
		$.get("data/accommodation" + thisId +".json", function(result, status) {  //Gets json file with the same ID
			var accomodationLatitude = (result.latitude); //Gets required data from json file
			var accomodationLongitude = (result.longitude); //Gets required data from json file
			var accommodationTitle = (result.name); //Gets required data from json file
			var mapdescription = (result.mapdescription); //Gets required data from json file

			var popupAccommodationInfo ='<div id="mappopup">'+ //Creates HTML for popup box
			'<h4>'+accommodationTitle+'</h4>'+
			'<p>'+mapdescription+'</p>' +
			'</div>'; 

			var lat = position.coords.latitude;  //Shows Current Position
			var lon = position.coords.longitude;
			var currentPosition = new google.maps.LatLng(lat, lon);

			var popupAccommodationPosition = new google.maps.LatLng(accomodationLatitude, accomodationLongitude);

			var mapOptions = {  //Shows accomodation position
			zoom: 12,
			center: popupAccommodationPosition,
			mapTypeControl: true,
			mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				}
			}

			var accommodationMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//Puts map into map-canvas ID of HTML page

			var currentPositionImage ='http://www.dcs.bbk.ac.uk/lo/mad/madexamples/session5/classactivities/zedlandhotels/icons/currentlocation.png';
			var userPosition  = new google.maps.Marker({
			position: currentPosition,
			map: accommodationMap,
			icon: currentPositionImage,
			title: 'You are here'
			});

			var popupAccommodationMarkerImage = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|FF0000|000000';
			var popupPosition = new google.maps.Marker({
			position: popupAccommodationPosition,
			map: accommodationMap,
			icon: popupAccommodationMarkerImage,
			title: accommodationTitle
			});

			var popupAccommodationInfoWindow = new google.maps.InfoWindow({//Creates popup info box
			content: popupAccommodationInfo
			});

			google.maps.event.addListener(popupPosition, 'click', function() {
			popupAccommodationInfoWindow.open(accommodationMap, popupPosition);
			});
		}, "json");
}

