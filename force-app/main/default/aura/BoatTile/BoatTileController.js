({
	onBoatClick : function(component, event, helper) {
		var Clkevent = component.getEvent("BoatSelect");
            Clkevent.setParam("boatId", component.get("v.boat").Id);
            Clkevent.fire();
	}
})