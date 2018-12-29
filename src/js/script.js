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
    });
    $('.series__preview-link').on('click', function(e) {
        e.preventDefault();
        console.dir(e.target.src);
        $('body').addClass('modal--showe');
        console.log($('#imgPreview'));
        $('#imgPreview')[0].src = e.target.src;
    });
    var scaleImg = 1;
    function closeModal() {
        $('body').removeClass('modal--showe');
        $('#imgPreview').css({
            transform: 'scale('+1+')',
        })
        scaleImg = 1;
    }
    $('.modal__close-btn').on('click', function(e) {
        closeModal();
    });
    $('.modal').on('click', function(e) {
        closeModal();
    });
    $('#imgPreview').on('click', function(e) {
        if (scaleImg < 2.5) {
            scaleImg += 0.3;
        }
        $(this).css({
            transform: 'scale('+scaleImg+')',
        });
        return false;
    });

})(jQuery, document);