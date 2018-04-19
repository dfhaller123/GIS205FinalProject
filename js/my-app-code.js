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

 //health total popup template
  var template = {
    title: "Neighborhood Health Total: {HealthTot}",
    content: "<p>As of 2016, <b>{HealthTot}%</b> of the population in this neighborhood has a chronic disease.</p>",
  };   
    
    
 //health facility popup template
  var template2 = {
    title: "Health Facility: {FAC_NAME}"
    };  
    
 //my hosted feature layer 
  var featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/CityHealth/FeatureServer",
    popupTemplate: template
  });

  map.add(featureLayer);

    
 //cdphe locations 
  var featureLayer2 = new FeatureLayer({
    url: "https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/CDPHE_Health_Facilities/FeatureServer/", opacity: .5,
    popupTemplate: template2
  });

  map.add(featureLayer2);
  
  
  var view = new MapView({
  container: "viewDiv",
  map: map,
 
    
  center: [-104.99,39.7392],
  zoom: 10
  });
});
