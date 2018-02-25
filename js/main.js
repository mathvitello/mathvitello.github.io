$( document ).ready(function() {
	var state = {};
	$("#main-page").load("home.txt");
});

$(document).on("click", '#shop-tab', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
});


$(document).on("click", '#top-nav-btn', function(event) { 
		var state = {};
		$("#main-page").load("home.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
});



window.onpopstate = function(event) {
    if(event && event.state) {
        location.reload();
    }
}