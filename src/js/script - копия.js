/**
 * Created by User on 13.05.2017.
 */
"use strict";
(function ($, document) {
   // var doc = document.querySelector('.close');
$('document').onload(function(){
    function hendler(event) {
         console.log(event.keyCode);
        if (event.keyCode === 86) {
//            doc.className = 'hidden';
            $('.promo-img__text-item').each(function(){
                $(this).hide();
                $(this).stop().animate({
                        opacity: 'show',
                        left: "+=500"
                        //height: "toggle"
                    }, 3000);
                });
        } else {
            //doc.className = 'close';
            $('.promo-img__text-item').each(function(){
                $(this).css({
                    left: "-500px"
                });
            });
        }

    }
    window.addEventListener('keyup', hendler);
//    $('.close').on("dblclick swipe", function(){
//        hendler({keyCode: 86});
//    });
    });
})(jQuery, document);