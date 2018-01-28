jQuery(document).ready(function ($) {

    $('.level-bar-inner').css('width', '0');

    // TODO: make this static
    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');
            $(this).css({width: itemWidth});
        });

    });

    // TODO what this even does?
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
});