require(['jquery'], function ($) {

    var drawer = $('button[aria-controls="nav-drawer"]');
    var thumbParent = $('#region-main');

    drawer.click(function () {
        thumbParent.toggleClass('smaller');
    });
});

