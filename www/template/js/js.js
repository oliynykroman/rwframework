/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    //language selector 
    $("#lang ul").on("click", ".current", function () {
        $(this).closest("ul").toggleClass('toggle_up');
        $(this).closest("ul").children('li:not(.current)').toggleClass('show');
        return false;
    });
    var allOptions = $("#lang ul").children('li:not(.current)');
    $("#lang ul").on("click", "li:not(.current)", function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#lang ul").children('.current').html($(this).html());
        allOptions.toggle();
    });

//search resault
    $('.search_result_list li').each(function () {
        if ($(this).find('.themeimages').length > 0) {
            $(this).find('.search_image').addClass('col-3 col-s-6 col-xs-12');
            $(this).find('.search_short_text').addClass('col-9 col-s-6 col-xs-12');
        }
    });
    //SVG injector
    jQuery('img[src$=".svg"]').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });

    //back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a.totop').fadeIn();
        } else {
            $('a.totop').fadeOut();
        }

    });
    $('a.totop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});
