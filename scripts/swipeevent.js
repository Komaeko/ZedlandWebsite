$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = ui.toPage[0].id;
    if(page === 'accommodationpage') {

    var imageCount = $('#gallery ul li').length;//Counts images
    var imageWidth = $('#gallery ul li').width();//Takes image width for later functions
    var imageHeight = $('#gallery ul li').height();//Takes image width for later functions
    var galleryUlWidth = imageCount * imageWidth;//Adds together width of gallery

    $('a.lastImage').click(function () { //Tap buttons
        lastImage();//Calls last image function
    });

    $('a.nextImage').click(function () {  //Tap buttons
        nextImage();//Calls next image function
    });

    $('div.images').on( "swiperight", lastImage);  // Swipe event on DIV class images calls last image function

    $('div.images').on( "swipeleft", nextImage);   //Swipe event on DIV class images calls next image function

    function lastImage() {
        $('#gallery ul').animate({//Selects gallery ul 
            left: +imageWidth// moves left by width of image
        }, 250, function () {//Take 250 milliseconds for transition effect
            $('#gallery ul li:last-child').prependTo('#gallery ul');
            $('#gallery ul').css('left', '');//Appends CSS to left hand side
        });
    };
    
    function nextImage() {
        $('#gallery ul').animate({
            left: -imageWidth// moves right by width of image
        }, 250, function () {//Take 250 milliseconds for transition effect
            $('#gallery ul li:first-child').appendTo('#gallery ul');
            $('#gallery ul').css('left', '');//Appends CSS to left hand side
        });
    };

    $('#gallery').css({//Inherit width and height from CSS
        width: imageWidth,
        height: imageHeight
    });

    $('#gallery ul').css({//Inherit width and left margin from CSS
        width: galleryUlWidth,
        marginLeft: -imageWidth
    });

    $('#gallery ul li:last-child').prependTo('#gallery ul');//On Last child of UL prepend to start of UL (Image 4 transitions back to 1 and vice versa)
    }

});
