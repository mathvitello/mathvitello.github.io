$( document ).ready(function() {
	var state = {};
	$("#main-page").load("home.txt");
	history.pushState(state,"ROY BLAIR", '');

    $("#shop-tab").click(function(){
		console.log("ajax load")
		var state = {};
		$("#main-page").load("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
	});

});