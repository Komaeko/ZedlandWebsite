$(document).on("pagecreate", "#home", function () { //Initialises functions
	$("#facebook").bind("tap", function () {//On Tap event 
		$("#sharechannel").html("Facebook");//Display share popup box
	});
	$("#twitter").bind("tap", function () {//On Tap event 
		$("#sharechannel").html("Twitter");//Display share popup box
	});
	$("#linkedin").bind("tap", function () {//On Tap event 
		$("#sharechannel").html("LinkedIn");//Display share popup box
	});
});

