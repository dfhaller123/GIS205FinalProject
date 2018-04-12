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
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer"
  });

  map.add(featureLayer);

    
  //parks layer
  
   var featureLayer2 = new FeatureLayer({
    url: "https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Parks_and_Open_Space_dfh/FeatureServer"
  });
  

  map.add(featureLayer2);
  
  //trails layer
  
  var featureLayer3 = new FeatureLayer({
    url: "https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/Trails_dfh/FeatureServer"
  });
  
  

  map.add(featureLayer3);
  
  var view = new MapView({
  container: "viewDiv",
  map: map,
 
    
  center: [-118.55,34.05293],
  zoom: 9
  });
});
