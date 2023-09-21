
// Initialize and add the map
let map;

async function initMap() {

  const position = { lat: 25.8055853, lng: -108.9964254 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at LabStudio
  map = new Map(document.getElementById("map"), {
    zoom: 16.2,
    center: position,
    mapId: "ebec91dda5c2b1c2",
  });

  const styleMarker = new google.maps.marker.PinView({
    background: "#633fb9",
    borderColor: "#5f3cb1",
    glyphColor: "#5636a1",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "LabStudio Office",
    content: styleMarker.element
  });
}

initMap();

