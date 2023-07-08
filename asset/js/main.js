$(window).scroll(function() {
    if ($(window).scrollTop() > 60) {
        $(".header__wra").addClass('pc-on-hide');
        $(".navbar__heading").removeClass('pc-on-hide');
        $(".navbar").addClass('navbar__fixed');
    } else {
        $(".header__wra").removeClass('pc-on-hide');        
        $(".navbar").removeClass('navbar__fixed');
        $(".navbar__heading").addClass('pc-on-hide');
    }
});


$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $("#backtop").removeClass('pc-on-hide'); 
    } else {
        $("#backtop").addClass('pc-on-hide');
    }
});

$('#backtop').click(function() {
   $('html, body').animate({
        scrollTop: 0
    }, 1500);
});

$(".header-search__input").focus(function() {
    $(".header-search__war").addClass('header-search__border'); 
});

$(".header-search__input").focusout(function() {
    $(".header-search__war").removeClass('header-search__border'); 
});


var btnDown = document.querySelectorAll('.btn__down');
var btnUp = document.querySelectorAll('.btn__up');
var navbarBlocks = document.querySelectorAll('.down');

[...btnDown].forEach((btnClickHide, index) => {
    btnClickHide.addEventListener('click', () => {
        headNavbarMenu(1, index);
    });
});

[...btnUp].forEach((btnClickHide, index) => {
    btnClickHide.addEventListener('click', () => {
        headNavbarMenu(2, index);
       
    });
});

function headNavbarMenu(param, index) {
    if (param == 1) {
        navbarBlocks[index].classList.add('show-on-mobile-tablet');
        btnDown[index].classList.remove('hide-on-mobile-tablet');
        btnUp[index].classList.remove('hide-on-mobile-tablet');
        btnDown[index].classList.add('hide-on-mobile-tablet');

    } else if (param == 2) { console.log(123)
        navbarBlocks[index].classList.remove('show-on-mobile-tablet');
        btnUp[index].classList.add('hide-on-mobile-tablet');
        btnDown[index].classList.remove('hide-on-mobile-tablet');
    }
}