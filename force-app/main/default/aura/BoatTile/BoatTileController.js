({
	onBoatClick : function(component, event, helper) {
		var Clkevent = component.getEvent("BoatSelect");
            Clkevent.setParam("boatId", component.get("v.boat").Id);
            Clkevent.fire();
        
        var detailEvent = $A.get("e.c:BoatSelected");
            detailEvent.setParam("boat", component.get("v.boat"));
            detailEvent.fire();
	}
})