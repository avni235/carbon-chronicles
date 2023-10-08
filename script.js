function initMap() {
    // Initialize the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2
    });

    // Function to search for the location
    window.searchLocation = function() {
        var location = document.getElementById('searchInput').value;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': location}, function(results, status) {
            if (status === 'OK') {
                var latLng = results[0].geometry.location;
                map.setCenter(latLng);
                new google.maps.Marker({
                    map: map,
                    position: latLng
                });
                // Display location information on the right side
                document.getElementById('info').innerHTML = '<h2>Location Information</h2>' +
                    '<p><strong>Address:</strong> ' + results[0].formatted_address + '</p>' +
                    '<p><strong>Latitude:</strong> ' + latLng.lat() + '</p>' +
                    '<p><strong>Longitude:</strong> ' + latLng.lng() + '</p>';
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
}
