
$(function() {
  	setTimeout(function() {
        $("#vid1").hide('blind', {}, 21400)
    }, 214000);

    setTimeout(function() {
        $("#cath").hide('blind', {}, 475)
    }, 4750);


});

//document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);



function touchmove(e) {
    e.preventDefault()
}


//hide video after it runs
//