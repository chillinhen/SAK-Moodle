require(['jquery'], function ($) {

    var drawer = $('button[aria-controls="nav-drawer"]');
    var thumbParent = $('#region-main');

    if (drawer.attr('aria-expanded') === 'false') {
        thumbParent.addClass('larger');
    } else {
        thumbParent.removeClass('larger');
    }

    drawer.click(function () {
        thumbParent.toggleClass('larger');
    });
});

