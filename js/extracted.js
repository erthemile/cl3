$(document).ready(function(){
    $('[data-no-append]').each(function () {
        $(this).attr('href', $(this).data('no-append'));
    });
    const allSecs = $('[data-section]');
    if (allSecs.length > 0) {
        allSecs.each(function () {
            const title = $(this).text();
            const link = $(this).attr('data-section-linkOut');
            $('#quickLinks').append('<li><a href="' + link + '" title="' + title + '">' + title + '</a></li>');
        });
    }
    var names = "Isabella, Angelina, Martina, Gabriela, Maya, Elena, Lucia, Sofia".split(",");
    var nameIndex = 0;
    // $('.bxslider').bxSlider({
    //     mode: 'horizontal',
    //     adaptiveHeight: true,
    //     responsive: true,
    //     moveSlides: 1,
    //     controls: true,
    //     pager: false,
    //     infiniteLoop: true,
    //     minSlides: 1,
    //     maxSlides: 1,
    //     speed: 800,
    // });
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsiveClass: true,
        dots: false,
        nav: true,

    });

    $('.slider1').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsiveClass: true,
        dots: false,
        nav: true
    });

    $('.owl-carousel.logos').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsiveClass: true,
        dots: false,
        responsive: {0: {items: 1, nav: true}, 600: {items: 2, nav: true}, 1000: {items: 4, nav: true, loop: false}}
    });
    var owl1 = $('.owl-carousel.logos');
    owl1.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.logos').on('click', function () {
        owl1.trigger('play.owl.autoplay', [1000])
    });
    $('.logos').on('click', function () {
        owl1.trigger('stop.owl.autoplay')
    });
    $('.owl-carousel.prizes-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsiveClass: true,
        dots: false,
        responsive: {0: {items: 1, nav: true}, 600: {items: 1, nav: true}, 1000: {items: 3, nav: true, loop: false}}
    });
    var owl = $('.owl-carousel.prizes-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.prizes-carousel').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    });
    $('.prizes-carousel').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });
});