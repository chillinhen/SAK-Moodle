require(['jquery'], function ($) {

$(".gradereport-grader-table tr").each(function(){
   var label = $(this).children("th").children('span').html();
   $(this).css('border','1px solid red');
  console.log(label);
});

});

//(FEHLER -> scrolling)
