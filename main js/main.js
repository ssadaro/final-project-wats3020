$(document).ready(function() {
    //card flip
$('.card').hover(function() {
  $(this).toggleClass('flipped');
});

//Script to run Leaflet.js map
    //Map
//Set home location
var map = L.map('map-container').setView([47.608013, -122.335167], 11);
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
    id: 'mapbox.mapbox-streets-v7',
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
var marker1 = L.marker([47.561430, -122.387028]).addTo(map);
marker1.bindPopup("Easy Street Records");
    
var marker2 = L.marker([47.668645, -122.385076]).addTo(map);
marker2.bindPopup("Sonic Boom");
    
var marker3= L.marker([47.577812, -122.333861]).addTo(map);
marker3.bindPopup("Silver Platters");

	//scroll
$('a[href*=#]').on('click', function(event){     
   event.preventDefault();
   $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
});

	
	});	






	
	
	
	
	 	