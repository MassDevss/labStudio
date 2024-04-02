
import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "AIzaSyAjLuO9HRAUgr7ryKTKYZspmnvK8mRtwdM",
  version: "weekly",
});


// Initialize and add the map
let map;

loader.load().then(async () => {

  const position = { lat: 25.8055853, lng: -108.9964254 };

  const { Map } = await google.maps.importLibrary("maps");

  // The map, centered at LabStudio
  map = new Map(document.getElementById("map"), {
    zoom: 16.2,
    center: position,
    mapId: "ebec91dda5c2b1c2",
  });

  // The marker, positioned at LabStudio
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "LabStudio Office",
  });

  marker.setIcon({
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8,
    fillColor: "#633fb9",
    fillOpacity: 0.8,
    strokeColor: "#5f3cb1",
    strokeWeight: 2
  });

});

