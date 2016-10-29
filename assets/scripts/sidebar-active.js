$(function() {
    var $page = url('path');
    console.log($page);
    $('ul.navigation li a').each(function() {
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            console.log("there");
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    });
});
