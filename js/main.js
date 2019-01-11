$(document).ready(function(){

//magnificPopup

// $('.popup-link').magnificPopup({
//   type: 'iframe'
// });


$('.slide-active').owlCarousel({
    autoplay:false,
    loop:true,
    margin:0,
    nav:false,
    slideBy: 1,
    pager: false,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



$('.slider-active').owlCarousel({
	autoplay:false,
    loop:true,
    margin:0,
    nav:false,
    slideBy: 1,
    pager: false,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// $('.owl-dot').each(function(){
// $(this).children('span').text($(this).index()+1);
// });

// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });




})