/**
 * Created by User on 13.05.2017.
 */
"use strict";
(function ($, document) {
$('document').ready(function(){
    $('.promo-img__text-item').each(function(){
        $(this).hide();
        $(this).stop().animate({
                opacity: 'show',
                left: "+=500"
                //height: "toggle"
            }, 1500);
        });
    $(".series__preview-link").on('click',function(){
       //$(this).stopPropagation();
       console.log($(this).children().prop('src'));
       return false;
    });
    });
})(jQuery, document);