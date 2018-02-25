$( document ).ready(function() {
	document.getElementById("tune").play();
	var state = {};
	$("#main-page").load("home.txt");
});

$(document).on("click", '#shop-tab', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
});

$(document).on("click", '#shows-tab', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("shows.txt");
		history.pushState(state,"ROY BLAIR", '/shows/');
});

$(document).on("click", '#music-tab', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("music.txt");
		history.pushState(state,"ROY BLAIR", '/music/');
});

$(document).on("click", '#catheaven-page', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("../catheaven.txt");
		history.pushState(state,"ROY BLAIR", '/music/catheaven.html');
});

$(document).on("click", '#vans-page', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("../vans.txt");
		history.pushState(state,"ROY BLAIR", '/music/vans.html');
});

$(document).on("click", '#shell-page', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("../shell.txt");
		history.pushState(state,"ROY BLAIR", '/music/shell.html');
});

$(document).on("click", '#uk-page', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("../uk.txt");
		history.pushState(state,"ROY BLAIR", '/music/uk.html');
});

$(document).on("click", '#sucker-page', function(event) { 
		console.log("ajax load");
		var state = {};
		$("#main-page").load("../sucker.txt");
		history.pushState(state,"ROY BLAIR", '/music/sucker.html');
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
		var state = {};
		$("#main-page").load("../longsleeve.txt");
		history.pushState(state,"ROY BLAIR", '/shop/longsleeve.html');
	}
	else if(location.href.includes("/shop/hoodie.html")){
		var state = {};
		$("#main-page").load("../hoodie.txt");
		history.pushState(state,"ROY BLAIR", '/shop/hoodie.html');
	}
	else if (location.href.includes("/shop/")){
		var state = {};
		$("#main-page").load("../shop.txt");
		history.pushState(state,"ROY BLAIR", '/shop/');
	}
	else if (location.href.includes("/music/")){
		var state = {};
		$("#main-page").load("music.txt");
		history.pushState(state,"ROY BLAIR", '/music/');
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