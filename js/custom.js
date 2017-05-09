/**
 * Created by Mhamed on 02/05/2017.
 */

 // global $,alert,console
$(function () {
    'use strict';
    // Adjust header
    var myheader=$('.header');
  myheader.height($(window).height());
    $(window).resize(function () {
        myheader.height($(window).height());
    });
    //link add  active
    $('.links li').click(function(){
       $(this).addClass('active').siblings().removeClass('active');

    });
    //Trigger the  bxSlider
    $('.bxslider').bxSlider({
        pager:false
    });

});