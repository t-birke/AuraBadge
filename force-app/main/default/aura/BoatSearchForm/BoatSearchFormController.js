({
	init : function(component, event, helper) {
		// get boat types
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.BoatTypes", response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        // optionally set storable, abortable, background flag here

        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
        
        // check if we are allowed to render new button
        
  if ($A.get("e.force:createRecord")) {
    component.set("v.showNewButton", true);
  }
	},
    new : function(component, event, helper) { 
    	var createRecordEvent = $A.get("e.force:createRecord");
    createRecordEvent.setParams({
    "entityApiName": "Boat__c",
    
    });
	var boatTypeId = component.find("boatTypeSelector").get("v.value");
	console.log("boatTypeId=",boatTypeId)
	if(boatTypeId!=""){
            createRecordEvent.setParams({
                "defaultFieldValues": {'BoatType__c': boatTypeId}
           })
        }
    createRecordEvent.fire();
    },
        
        onFormSubmit : function(component,event,helper){
            var Formevent = component.getEvent("formsubmit");
            Formevent.setParam("formData", JSON.parse("{\"boatTypeId\":\"" + component.find("boatTypeSelector").get("v.value") + "\"}"));
            Formevent.fire();
        }
    
})