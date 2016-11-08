(function ($) {
    var $hamburger = $('.fancy-hamburger');
    var $fancySidebarContainer = $('.js_fancy_sidebar');

    $hamburger.on('click', function () {
        $(this).toggleClass('open');
        $fancySidebarContainer.toggleClass('open');
    })
})(jQuery);