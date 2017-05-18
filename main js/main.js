$(document).ready(function() {
    //card flip
$('.card').hover(function() {
  $(this).toggleClass('flipped');
});

//Script to run Leaflet.js map
    //Map

//Set home location
  var map = L.map('map-container').setView([47.608013, -122.335167]);
//Add Tile Layers for Open Streets, Satellite, and Map View
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.tileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});
  
var satLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoic3NhZGFybyIsImEiOiJjajF4cWpiaDcwMDBxMndxNWNnYW50bnc0In0.OXQXQLzfbFX3h_7jOo5gIw'
});

var drawLayer = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.mapbox-terrain-v2',
    accessToken: 'pk.eyJ1Ijoic3NhZGFybyIsImEiOiJjajF4cWpiaDcwMDBxMndxNWNnYW50bnc0In0.OXQXQLzfbFX3h_7jOo5gIw'

});
var mapLayers = {
    "Open Street Maps": osm,
    "Satellite": satLayer,
    "Map View": drawLayer,
}

	
L.control.layers(mapLayers).addTo(map);
osm.addTo(map);
// markers 3 locations
var marker1 = L.marker([47.5612, 122.3870]).addTo(map);
marker1.bindPopup("<b>Easy Street");
    
var marker2 = L.marker([47.6685, 122.3851]).addTo(map);
marker2.bindPopup("<b>Sonic Boom");
    

var marker3 = L.marker([122.333754]).addTo(map);
	marker3.bindPopup("<b>Silver Platters");
	})
	
	//scroll
$('a[href*=#]').on('click', function(event){     
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
	 
  });
	
	
	