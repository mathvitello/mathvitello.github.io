    window.onload = function() {
        //document.getElementById("tune").play();
        $('#play-button').click();
    }

    $('#play-button').click(function(){ document.getElementById("tune").play(); });

    $(document).ready(function() {
        $('.carousel').carousel({
            interval: 100000000,
            wrap: false
        }).carousel('pause');

        $(".carousel").on("touchstart", function(event){
            var xClick = event.originalEvent.touches[0].pageX;
            $(this).on("touchmove", function(event){
                var xMove = event.originalEvent.touches[0].pageX;
                if( Math.floor(xClick - xMove) > 50 ){
                    $(this).carousel('next');
                }
                else if( Math.floor(xClick - xMove) < -50 ){
                    $(this).carousel('prev');
                }
            });
            $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
            });
        });
    });

/*
    $('#shirt').click(function(){   
        var href = $('.product__buy').attr('href');
        window.location.href = href;
    });
    */