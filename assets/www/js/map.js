var load = function() {
  getMyLocation();
};

var getMyLocation = function() {

  var showMyPositionInMap = function(position) {

    var callback = function() {
      var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var map = new google.maps.Map(document.getElementById('map_canvas'), {
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        center:myLocation,
        zoom:17
      });
      var marker = new google.maps.Marker({
                                            position:myLocation,
                                            map:map,
                                            title:"Du er her"
                                          });
      marker.setMap(map);
    };

    navigator.notification.alert("Hei", callback, "Fin tittel");
  };

  var suc = function(position) {
    showMyPositionInMap(position);
  };

  var locFail = function() {
    alert("Fant ikke din lokasjon");
  };

  navigator.geolocation.getCurrentPosition(suc, locFail);
};
