({
    jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    PlotMapMarker: function(component, event, helper) {
        
        var location = {"lat": event.getParam("lat"),"long" : event.getParam("long")};
        component.set("v.location", location);
    }
})