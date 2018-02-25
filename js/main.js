$( document ).ready(function() {
	var state = {};
	$("#main-page").html("home.txt");
	history.pushState(state,"ROY BLAIR", '');

    $("#shop-tab").click(function(){
    	$("#main-page").hide();

		console.log("ajax load")
		var state = {};
		$("#main-page").html("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
	});

});