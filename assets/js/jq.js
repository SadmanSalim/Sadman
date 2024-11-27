$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $('nav').addClass('fixed');
    }
    if(scroll <= 300){
        $('nav').addClass('fixedRemoved');
    }else{
        $('nav').removeClass('fixedRemoved');
    }
});
