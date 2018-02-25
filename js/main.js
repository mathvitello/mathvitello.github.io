$( document ).ready(function() {
	var state = {};
	$("#main-page").load("home.txt");
});

$(document).on("click", '#shop-tab', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").replaceWith("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
});