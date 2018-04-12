require([
  "esri/Map",
  "esri/views/MapView",
  //*** ADD ***//
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, MapView, FeatureLayer) {

  var map = new Map({
    basemap: "topo-vector"
  });

 //trailheads layer 
  var featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/CityHealth/FeatureServer"
  });

  map.add(featureLayer);

    

  
  
  var view = new MapView({
  container: "viewDiv",
  map: map,
 
    
  center: [-104.99,39.7392],
  zoom: 10
  });
});
