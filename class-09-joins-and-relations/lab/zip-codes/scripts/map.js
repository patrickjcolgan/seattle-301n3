function initMap(dataArray) {
  // Create a map object and specify the DOM element for display.
  if(dataArray){
      var customMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: dataArray[0].latitude, lng: dataArray[0].longitude},
        scrollwheel: true,
        zoom: 8
      });
      
      dataArray.forEach(function(ele) {
        //make markers
        var marker = new google.maps.Marker({
           position: {lat: ele.latitude, lng: ele.longitude},
           map: customMap
         });
      })
} else {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.611435, lng: -122.330456},
    scrollwheel: true,
    zoom: 8
  });


}
  // TODO: Follow the Google Maps API docs to create markers on the map based on the search options on the home page.
}
