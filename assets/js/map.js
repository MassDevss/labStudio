
// Initialize and add the map
let map;

async function initMap() {

  const position = { lat: 25.805457, lng: -108.9963531 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "ebec91dda5c2b1c2",

  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "LabStudio Office",
  });
}

initMap();

