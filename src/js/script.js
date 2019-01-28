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
        var pashImgHq = String(e.target.src).substring(0, String(e.target.src).search(/\/\d.png/i))
        +'/hq'+ String(e.target.src).substring( String(e.target.src).search(/\/\d.png/i), String(e.target.src).length);
        console.log(pashImgHq);
        $('#imgPreview')[0].src = pashImgHq;
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
    $('.seriesTab__item').each( function (el) {
        $(this).on('click', function(event) {
            event.preventDefault();
            const activeLink = $('.seriesTab__item.active')
            const activePage =  $('.series__preview-page:not(.hidden)')
            $('.series__preview-page').each(function(){
                if($(this).data('page') === $(event.currentTarget).data('page-link')){
                    $(activePage).addClass('hidden');
                    $(activeLink).removeClass('active');
                    $(this).removeClass('hidden');
                    $(event.currentTarget).addClass('active');
                }
            })
        })
    });
})(jQuery, document);