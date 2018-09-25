require(['jquery'], function ($) {
//alert('cache löschen');
    // Thumbnails
    //var drawer = $('button[aria-controls="nav-drawer"]');
//        var drawer = $('#nav-drawers')
//        var thumbParent = $('#region-main');
//
//        if (drawer.attr('aria-hiddens') === 'false') {
//            thumbParent.addClass('larger');
//        } else {
//            thumbParent.removeClass('larger');
//        }



//    if ($(window).width() <= 1199)
//    {
//        drawer.click(function () {
//            thumbParent.toggleClass('larger');
//        });
//    }
//    if ($(window).width() >= 1200)
//    {
//        thumbParent.addClass('larger');
//        console.log('large Display');
//    }

    //Order Thumbnails Content
    var thumbnail = $('.coursebox > .content > .courseimage');
    thumbnail.each(function () {
        if ($(this).length > 0) {
            //alert('treffer');
            $(this).parent('div').parent('div').addClass('hasThumbnail');
        }
    });
    // Remove Brackets from Kurse Numbers
    // Remove Brackets from Kurse Numbers
    $('.numberofcourse').each(function () {
        var removeFirstBracket = $(this).text().replace('(', '').replace(')', '');
        $(this).text(removeFirstBracket);

    });

    // Remove SVG in Community Button
    $('[data-region="blocks-column"] [data-block="community"] .content a').addClass('btn btn-primary');

    // Twesak Pagination
    $('.section-navigation [class*="mdl"] > a').each(function () {
        $(this).children('[class*="arrow"]').remove();
        $(this).wrapInner('<span></span>');
        var textLink = $(this).children('span').html();
        $(this).attr("title", textLink);
    });
});
