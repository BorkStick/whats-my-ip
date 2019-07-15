function callback(response) {
  console.log(response);
  document.getElementById('IP').innerHTML = response.IPv4;
  document.getElementById('COUNTRY').innerHTML = response.country_name;
  document.getElementById('STATE').innerHTML = response.state;
  document.getElementById('CITY').innerHTML = response.city;
  document.getElementById('POSTAL').innerHTML = response.postal;
  document.getElementById('LAT').innerHTML = response.latitude;
  document.getElementById('LONG').innerHTML = response.longitude;
  document.getElementById('IP2').innerHTML = response.IPv4;
}

$.ajax({
  url: 'https://geoip-db.com/jsonp/',
  dataType: 'jsonp'
});

function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 30.4421, lng: -97.6299 },
    zoom: 8
  });
}
