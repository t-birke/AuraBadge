({
	doInit : function(component, event, helper) {
        console.log("boat loaded to review component = ", JSON.stringify(component.get("v.boat")));
		helper.onInit(component);
	},
    refresh : function(component, event, helper) {
        if(event.getParam("oldValue").Id != event.getParam("value").Id){
            component.set("v.boatReviews", []);         
            helper.onInit(component);
        }
        
	},
    onUserInfoClick : function(component, event, helper){
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": event.currentTarget.dataset.userid,
          "slideDevName": "detail"
        });
        navEvt.fire();
    } 
})