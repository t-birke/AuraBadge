({
	onBoatClick : function(component, event, helper) {
		var Clkevent = component.getEvent("BoatSelect");
            Clkevent.setParam("boatId", component.get("v.boat").Id);
            Clkevent.fire();
        
        var detailEvent = $A.get("e.c:BoatSelected");
            detailEvent.setParam("boat", component.get("v.boat"));
            detailEvent.fire();
        
        var mapEvent = $A.get("e.c:PlotMapMarker");
            mapEvent.setParam("lat", component.get("v.boat").Geolocation__Latitude__s);
            mapEvent.setParam("long", component.get("v.boat").Geolocation__Longitude__s);
            mapEvent.setParam("label", component.get("v.boat").Contact__r.Name + '\'s boat');
            mapEvent.setParam("sObjectId", component.get("v.boat").Id);
            mapEvent.fire();
	}
})