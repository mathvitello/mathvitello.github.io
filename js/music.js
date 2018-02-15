$( document ).ready(function() {
    var windowWidth = $(window).width();
    if(windowWidth < 576){
		$("#music-right").addClass('pad-me');
		$("#music-left").addClass('pad-me');
	}

	if(windowWidth < 769){
    	$("#music-divider").removeClass();
    	$("#music-right").removeClass();
    	$("#music-left").removeClass();

    	$("#music-right").addClass('col-12');
    	$("#music-left").addClass('col-12');
	}

	else if(windowWidth < 995){
    	$("#music-divider").removeClass();
    	$("#music-right").removeClass();
    	$("#music-left").removeClass();

    	$("#music-right").addClass('col-5');
    	$("#music-divider").addClass('col-1');
    	$("#music-left").addClass('col-5');
	}
	else if(windowWidth > 995){
		$("#music-divider").addClass('col-2');
	}
});


$(window).on('resize', function(event){
	var windowWidth = $(window).width();
	if(windowWidth < 576){
		$("#music-right").addClass('pad-me');
		$("#music-left").addClass('pad-me');
	}

	if(windowWidth < 769){
    	$("#music-divider").removeClass();
    	$("#music-right").removeClass();
    	$("#music-left").removeClass();

    	$("#music-right").addClass('col-12');
    	$("#music-left").addClass('col-12');
	}

	else if(windowWidth < 995){
    	$("#music-divider").removeClass();
    	$("#music-right").removeClass();
    	$("#music-left").removeClass();

    	$("#music-right").addClass('col-5');
    	$("#music-divider").addClass('col-1');
    	$("#music-left").addClass('col-5');
	}
	else if(windowWidth > 995){
		$("#music-divider").addClass('col-2');
	}
});