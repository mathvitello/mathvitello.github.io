$( document ).ready(function() {
	var windowWidth = $(window).width();
	if(windowWidth < 992){
		$("#shop-main").removeClass('align-self-center');
	}
	else{
		$("#shop-main").addClass('align-self-center');
	}
});

$(window).on('resize', function(event){
	var windowWidth = $(window).width();
	if(windowWidth < 992){
		$("#shop-main").removeClass('align-self-center');
	}
	else{
		$("#shop-main").addClass('align-self-center');
	}
});