mapboxgl.accessToken = 'pk.eyJ1IjoiZ3J5bXlrIiwiYSI6ImNqM3JtZHl4MzAxZGkydm82eGZrNXdiNmoifQ.AJWTmNEt-6PVlX3HZyvpAg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-68.13734351262877, 45.137451890638886],
  zoom: 5
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {

  map.addLayer({
    'id': 'maine',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': 'data/threeDPolygon.geojson'
    },
    'layout': {},
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.8
    }
  });
});
