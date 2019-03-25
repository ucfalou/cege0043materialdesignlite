var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',{ maxZoom:18, attribution:'Mapdata&copy;<a href="http://openstreetmap.org">OpenStreetMap</a>contributors,'+ '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+ 'Imagery©<a href="http://mapbox.com">Mapbox</a>', id:'mapbox.streets' }).addTo(mymap);
	L.marker([51.523, -0.1283]).addTo(mymap)
.bindPopup("<b>Hello my friend!</b><br />This is warenstreet.").openPopup();
// create a custom popup

var popup = L.popup();
function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("You clicked the map at " + e.latlng.toString())
.openOn(mymap);
}
// now add the click event detector to the map
mymap.on('click', onMapClick);


