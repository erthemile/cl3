$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }
});
$(window).load(function () {
    $(".se-pre-con").fadeOut("slow");
    ;

    function onScrollInit(items, trigger) {
        items.each(function () {
            var osElement = $(this), osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');
            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });
            var osTrigger = (trigger) ? trigger : osElement;
            osTrigger.waypoint(function () {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {triggerOnce: true, offset: '90%'});
        });
    }

    onScrollInit($('.os-animation'));
    onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
});