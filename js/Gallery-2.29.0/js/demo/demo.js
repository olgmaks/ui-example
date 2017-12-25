/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict'

    var lightBoxLinks = [];
    var linksContainer = $('#links');

    var lightBoxData = [
        "data/i1",
        "data/i2",
        "data/i3",
        "data/i4",
        "data/i5",
        "data/i6",
        "data/i7",
        "data/i8",
        "data/i1",
        "data/i2",
        "data/i3",
        "data/i4",
        "data/i5",
        "data/i6",
        "data/i7",
        "data/i8",
        "data/i1",
        "data/i2",
        "data/i3",
        "data/i4",
        "data/i5",
        "data/i6",
        "data/i7",
        "data/i8",
        "data/i1",
        "data/i2",
        "data/i3",
        "data/i4",
        "data/i5",
        "data/i6",
        "data/i7",
        "data/i8"
    ];

    var carouselData = [
        "data/i9",
        "data/i10",
        "data/i11"
    ];

    // Add the demo images as links with thumbnails to the page:
    $.each(lightBoxData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret
        $('<a/>')
            .append($('<img>').prop('src', photo + '_tn.jpg'))
            .prop('href', photo + '.jpg')
            .prop('title', '')
            .attr('data-gallery', '')
            .appendTo(linksContainer);
    });


    var carouselLinks = [];
    // Add the demo images as links with thumbnails to the page:
    $.each(carouselData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret

        carouselLinks.push({
            href: photo + '.jpg',
            title: 'Зображення'
        });
        // })
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true,
            controlsClass: 'blueimp-gallery-controls'
        })
    });

});
