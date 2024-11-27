$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('nav').addClass('fixed');
    }
    if(scroll <= 200){
        $('nav').addClass('fixedRemoved');
    }else{
        $('nav').removeClass('fixedRemoved');
    }
});
