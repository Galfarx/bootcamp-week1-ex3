(function ($) {
    var $hamburger = $('.fancy-hamburger');

    $hamburger.on('click', function () {
        $(this).toggleClass('open');
    })
})(jQuery);