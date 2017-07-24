/*
https://www.google.com/maps/@?api=1&map_action=pano&center=-33.712206,150.311941&zoom=21&basemap=satellite
 https://www.google.com/maps/@?api=1&map_action=pano&pano=tu510ie_z4ptBZYo2BGEJg&viewpoint=48.857832,2.295226&heading=-45&pitch=38
 https://www.google.com/maps/@37.6371022,-122.4257247,539a,35y,39.27t/data=!3m1!1e3
 https://www.google.com/maps/@37.6371022,-122.4257247,539m/data=!3m1!1e3


 https://www.google.com/maps/@37.641067,-122.4257247,439m/data=!3m1!1e3 -- 2D
 https://www.google.com/maps/@37.6370978,-122.4257247,539a,35y,39.32t/data=!3m1!1e3 --3D
 */

'use strict';

let map;
let panorama;

function initMap() {
    let place = {lat:37.76686, lng: -122.42561};

    map = new google.maps.Map(document.getElementById('map'), {
        center: place,
        zoom: 21,
        mapTypeId: 'satellite'
    });

    panorama = map.getStreetView();
    panorama.setPosition(place);
    panorama.setPov(({
            heading: 265,
            pitch: 0
    }));

    console.log('panorama: ', panorama);

    map.addListener('zoom_changed', function() {
        let tiltCell = document.getElementById('zoom-cell');

        tiltCell.innerHTML = map.getZoom();
    });

    map.addListener('center_changed', function() {
        let positionCell = document.getElementById('position-cell');

        positionCell.innerHTML = map.getCenter();

        console.log(map)
    });

    map.addListener('heading_changed', function () {
        let headingCell = document.getElementById('heading-cell');

        headingCell.innerHTML = map.getHeading();

        drawPolygon();
    });

    map.addListener('tilt_changed', function() {
        let tiltCell = document.getElementById('tilt-cell');

        tiltCell.innerHTML = map.getTilt();
    });

    //rectangleRed.setMap();
    //drawPolygon();
}

function drawPolygon() {
    let angleShift = 0.00005;

    // Define the LatLng coordinates for the polygon's path.
    let rectangleCoordsRed = [
        {lat: 37.76685, lng: -122.42565},
        {lat: 37.76685, lng: -122.42575},
        {lat: 37.76695, lng: -122.42575},
        {lat: 37.76695, lng: -122.42565}
    ];

    let rectangleCoordsBlue = [
        {lat: 37.7668, lng: -122.4256},
        {lat: 37.7668, lng: -122.4257},
        {lat: 37.7669, lng: -122.4257},
        {lat: 37.7669, lng: -122.4256}
    ];

    // Construct the polygon.
    let rectangleRed = new google.maps.Polygon({
        paths: rectangleCoordsRed,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        draggable: true,
        geodesic: true
    });

    // Construct the polygon.
    let rectangleBlue = new google.maps.Polygon({
        paths: rectangleCoordsBlue,
        strokeColor: '#0000FF',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.35
    });

    //rectangleRed.setMap(map);
    //rectangleBlue.setMap(map);
}
