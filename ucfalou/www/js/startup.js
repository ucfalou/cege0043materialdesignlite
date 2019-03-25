var userMarker;	
var userCircle;
var userPolygon;
var earthquakes;
	
	function trackAndCircle() {
		if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
		} else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
		}
		}


	function showPosition(position){
		if(userMarker){
			mymap.removeLayer(userMarker);
		}
		userMarker=L.marker([position.coords.latitude,position.coords.longitude])
		.addTo(mymap).bindPopup("<b>You were here</b>");
		
		var userCircle=L.circle([position.coords.latitude,position.coords.longitude],500,{

			   color:'red',

			   fillColor:'#f03',

			   fillOpacity:0.05

			   }).addTo(mymap).bindPopup;
		
		var userPolygon =L.polygon([
		[position.coords.latitude+0.0005,position.coords.longitude],
		[position.coords.latitude-0.0005,position.coords.longitude-0.0005],
		[position.coords.latitude-0.0005,position.coords.longitude+0.0005]
		],{color:'red',fillColor:"#f03",fillOpacity:0.05}).addTo(mymap).bindPopup('I am a polygon');
	
		
		}





	function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		trackAndCircle();getDistance();startFormDataLoad()
	},false);
}	     

    function loadW3HTML() {
         w3.includeHTML();
}


