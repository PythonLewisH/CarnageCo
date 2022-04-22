function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(-41.301600, 174.797000),
    zoom: 15,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
