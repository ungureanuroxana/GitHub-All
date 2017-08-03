$(document).ready(function () {


    $(".purpleToFuchsia").click(function () {
        $('.purple').css('background-color', '#FF00FF');
    });
    $('.toggleGreenGrey').click(function () {
        if ($('.colors').find('div').last().attr('class') == 'green') {
            $('.colors').find('div').last().attr('class', "grey");
        } else {
            $('.colors').find('div').last().attr('class', "green");
        }
    });

    $('.switchBoxes').click(function () {
        red1 = $('.red');
        blue1 = $('.blue');

        cloneRed = red1.clone(true);
        cloneBlue = blue1.clone(true);

        red1.replaceWith(cloneBlue);
        blue1.replaceWith(cloneRed);
    });

    $('.insertText').click(function () {
        $('.purple').append('<p class="white">Some test</p>')
    });


    var firstClick = null;
    $('.colors').children().click(function () {

        if (firstClick != null) {
            secondClick = $(this);

            firstClickClass = firstClick.attr('class');
            secondClickClass = secondClick.attr('class');

            firstClick.attr('class', secondClickClass);
            secondClick.attr('class', firstClickClass);

            firstClick = null;

        } else {
            firstClick = $(this);
        }
    });

    $('.sameheight').click(function () {
        var maxHeight = 0;
        $('.colors').find('div').each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        })
        $('.colors').find('div').each(function () {
            $(this).css('height', maxHeight);
        });
    });

    $(window).resize( function(){
        var i = 0, sw = $( ".colors" ).width();
        while( i < 4 ){
            var start = i;
            var current = $('.colors').find('div').eq(i);
            var w = current.outerWidth(true);
            var maxH = 0;

            while( w <= sw && i < 4){
                current = $('.colors').find('div').eq(i);
                var next = $('.colors').find('div').eq(i+1);
                w = w + next.outerWidth(true);
                maxH = (maxH > current.height()) ? maxH : current.height();
                ++i;
            }
            for(var j=start; j <= i; j++){
                $('.colors').find('div').eq(j).css('height',maxH + "px");
            }

        }
    });


});



