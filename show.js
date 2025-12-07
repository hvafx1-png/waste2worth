function showRecyclingCenters() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 17.385, lng: 78.486 } // Example: Hyderabad
  });

  new google.maps.Marker({
    position: { lat: 17.392, lng: 78.482 },
    map,
    title: "Plastic Recycling Center"
  });
}