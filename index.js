function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(-41.286461, 174.776230),
    zoom: 15,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
