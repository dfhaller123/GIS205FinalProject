require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/layers/FeatureLayer",
  "esri/widgets/Home",
  "esri/widgets/Search",
    
  "dojo/domReady!"
    
], function(Map, MapView, Legend, LayerList, FeatureLayer, Home, Search,) {

// create the map    
  var map = new Map({
    basemap: "Streets"
  });

//health total popup template
  var template = {
    title: "Neighborhood Health Total: {HealthTot}",
    content: "<p>As of 2016, <b>{HealthTot}%</b> of the population in this neighborhood has a chronic disease.</p>",
  };   
    
    
 //health facility popup template
  var template2 = {
    title: "Facility Name: {FAC_NAME}" +
      "<li>{ADDRESS}, {CITY_STATE_ZIP}</li>" +
      "<li>{FACTYPE}</li>",
      
    };  
    
 //my hosted feature layer 
  var featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/CityHealth/FeatureServer",
    popupTemplate: template,

   });

  map.add(featureLayer);

    
 //cdphe locations 
  var featureLayer2 = new FeatureLayer({
    url: "https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/CDPHE_Health_Facilities/FeatureServer/",
    popupTemplate: template2
  });

  map.add(featureLayer2);
  
// create map view  
  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-104.99,39.7392],
    zoom: 10,
    padding: {
          right: 320 // Same value as the #sidebar width in CSS
     }
    
  });
    
    
//add legend here
    
    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "% Chronic Disease"
      }]
 });

    view.ui.add(legend, "bottom-left");
 
    
//add legend2 here
    
    var legend2 = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer2,
        title: "Health Care Facilities"
      }]
    });

    view.ui.add(legend2, "bottom-right");
    
//add layer list 
    var layerList = new LayerList({
        view: view
    });

// Adds widget below other elements in the top left corner of the view
    view.ui.add(layerList, {
        position: "bottom-left"
    });
    
//adds home button
     var homeBtn = new Home({
        view: view
      });
// Add the home button to the top left corner of the view
      view.ui.add(homeBtn, "top-left");
    
// add search widget
    var searchWidget = new Search({
        view: view
      });

// Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });
});
