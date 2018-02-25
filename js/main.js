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
		$("#main-page").load("../home.txt");
		history.pushState(state,"ROY BLAIR", '/');
});

$(document).on("click", '#shirt-prev', function(event) { 
		var state = {};
		$("#main-page").load("../shirt.txt");
		history.pushState(state,"ROY BLAIR", '/shop/shirt.html');
});

$(document).on("click", '#longsleeve-prev', function(event) { 
		var state = {};
		$("#main-page").load("../longsleeve.txt");
		history.pushState(state,"ROY BLAIR", '/shop/longsleeve.html');
});

$(document).on("click", '#hoodie-prev', function(event) { 
		var state = {};
		$("#main-page").load("../hoodie.txt");
		history.pushState(state,"ROY BLAIR", '/shop/hoodie.html');
});


window.onpopstate = function(event) {
	if(location.href.includes("/shop/shirt.html")){
		var state = {};
		$("#main-page").load("../shirt.txt");
		history.pushState(state,"ROY BLAIR", '/shop/shirt.html');
	}
	else if(location.href.includes("/shop/longsleeve.html")){

	}
	else if(location.href.includes("/shop/hoodie.html")){
		
	}
	else if (location.href.includes("/shop/")){
		console.log("back to shop");
		var state = {};
		$("#main-page").load("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
	}
	else if (location.href.includes("/")){
		var state = {};
		$("#main-page").load("../home.txt");
		history.pushState(state,"ROY BLAIR", '/');
	}
	else{
		console.log(location.href);
	}
	//location.reload();
}