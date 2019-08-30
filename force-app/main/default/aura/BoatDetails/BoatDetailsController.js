({
	onBoatSelected : function(component, event, helper) {
		component.set("v.id", event.getParam("boat").Id);
        component.set("v.boat", event.getParam("boat"));
	},
    
    init : function(component, event, helper) {
		if ($A.get("e.force:navigateToSObject")) {
            component.set("v.displayButton", true);
          }		
	},
    onRecordUpdated : function(component, event, helper) {
        
    },
    update : function(component, event, helper){
        component.find('service').reloadRecord();
    }
})