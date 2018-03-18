require(['jquery'], function ($) {
//alert('cache löschen');
    // Thumbnails
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
    //Order Thumbnails Content
    var thumbnail = $('.coursebox > .content > .courseimage');
    thumbnail.each(function () {
        if ($(this).length > 0) {
            //alert('treffer');
            $(this).parent('div').parent('div').addClass('hasThumbnail');
        }
    });
    
});
