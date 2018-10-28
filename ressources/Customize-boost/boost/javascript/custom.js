require(['jquery'], function ($) {
    //Order Thumbnails Content
    var thumbnail = $('.coursebox > .content > .courseimage');
    thumbnail.each(function () {
        if ($(this).length > 0) {
            $(this).parent('div').parent('div').addClass('hasThumbnail');
        }
    });
    // Style Forum Sections
      $('.forum.modtype_forum').parent('.section').css('background-color','transparent');
    // Remove Brackets from Kurse Numbers
    $('.numberofcourse').each(function () {
        var removeFirstBracket = $(this).text().replace('(', '').replace(')', '');
        $(this).text(removeFirstBracket);
    });

    // Remove SVG in Community Button
    $('[data-region="blocks-column"] [data-block="community"] .content a').addClass('btn btn-primary');

    // Tweak Pagination
    $('.section-navigation [class*="mdl"] > a').each(function () {
        $(this).children('[class*="arrow"]').remove();
        $(this).wrapInner('<span></span>');
        var textLink = $(this).children('span').html();
        $(this).attr("title", textLink);
    });

    // Style yes and no Links
    $('.lessonbutton.standardbutton').each(function(){
      $(this).children('a[href*="yes"]').addClass('btn btn-primary');
      $(this).children('a[href*="no"]').addClass('btn btn-info');
    });
});
