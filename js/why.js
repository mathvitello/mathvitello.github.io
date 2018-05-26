$(".visual-block a").hover(
  //on hover
  function() {
  	$($(this).children()[1]).hide();
  	$($(this).children()[2]).show();
  }, 
  //on end hover
  function() {
	$($(this).children()[1]).show();
  	$($(this).children()[2]).hide();
  }
);