// Owl-Carosel JS
const prevIcon = '<img src="./img/icon/prev.png" alt="prev">';
const nextIcon = '<img src="./img/icon/next.png" alt="next">';

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    autoplay: false,
    nav:true,
    navText: [
        prevIcon,
        nextIcon  
    ],
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
});

// fancyBox 
$('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});

    //  Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });


// Project Menu Filter jQuery isotope Codes
// Gallery Filter jQuery Codes
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.gellery-btn-area').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
$('.grid').isotope({
    itemSelector: '.gellery-item',
    percentPosition: true,
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gellery-box'
    }
});