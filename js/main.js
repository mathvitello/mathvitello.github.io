$("#shop-tab").click(function(){
	console.log("ajax load")
	var state = {};
	$("#shop-page").load("js/shop.txt");
	history.pushState(state,"ROY BLAIR", '/shop/');
});