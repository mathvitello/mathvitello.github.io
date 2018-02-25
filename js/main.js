$( document ).ready(function() {
	var state = {};
	$("#main-page").load("home.txt");

	$("#shop-tab").click(function(){
		console.log("ajax load")
		var state = {};
		$("#main-page").replaceWith("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
	});
});