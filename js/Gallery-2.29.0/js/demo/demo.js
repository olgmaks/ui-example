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

    // Portrait data
    var portraitData = [
        "data/p1",
        "data/p2",
        "data/p3"
    ];
    var portraitLinksContainer = $('#portrait-links');

    // Film
    var filmData = [
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
    var filmLinksContainer = $('#film-links');

    // Sea
    var seaData = [
        "data/s1"
    ];
    var seaLinksContainer = $('#sea-links');

    // Black and white
    // Sea
    var bwData = [
        "data/bw1",
        "data/bw2",
        "data/bw3"
    ];
    var bwLinksContainer = $('#bw-links');


    $.each(portraitData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret
        $('<a/>')
            .append($('<img>').prop('src', photo + '_tn.jpg'))
            .prop('href', photo + '.jpg')
            .prop('title', '')
            .attr('data-gallery', '')
            .appendTo(portraitLinksContainer);
    });

    $.each(filmData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret
        $('<a/>')
            .append($('<img>').prop('src', photo + '_tn.jpg'))
            .prop('href', photo + '.jpg')
            .prop('title', '')
            .attr('data-gallery', '')
            .appendTo(filmLinksContainer);
    });

    $.each(seaData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret
        $('<a/>')
            .append($('<img>').prop('src', photo + '_tn.jpg'))
            .prop('href', photo + '.jpg')
            .prop('title', '')
            .attr('data-gallery', '')
            .appendTo(seaLinksContainer);
    });

    $.each(bwData, function (index, photo) {
        // baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
        // photo.server + '/' + photo.id + '_' + photo.secret
        $('<a/>')
            .append($('<img>').prop('src', photo + '_tn.jpg'))
            .prop('href', photo + '.jpg')
            .prop('title', '')
            .attr('data-gallery', '')
            .appendTo(bwLinksContainer);
    });
});
