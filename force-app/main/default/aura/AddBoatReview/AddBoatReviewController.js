({
    doInit : function(component, event, helper) {
        // Prepare a new record from template
        helper.onInit(component);
    },
	onSave : function(component, event, helper) {
			//check if show toast is supported
        let showToast = undefined;
        $A.get("e.force:showToast") ? showToast = true : showToast = false;
            component.find("service").saveRecord(function(saveResult) {
                if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                    // record is saved successfully
                    if(showToast){
                        var resultsToast = $A.get("e.force:showToast");
                        resultsToast.setParams({
                            "title": "Saved",
                            "message": "The record was saved."
                        });
                        resultsToast.fire();
                    } else {
                        alert("the record was saved");
                    }
                    
                    var Clkevent = component.getEvent("BoatReviewAdded");
                    Clkevent.fire();
                    helper.onInit(component);

                } else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                    console.log('Problem saving contact, error: ' + JSON.stringify(saveResult.error));
                } else {
                    console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
                }
            });
        
	},
    onRecordUpdated : function(component, event, helper){
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
        let showToast = undefined;
        $A.get("e.force:showToast") ? showToast = true : showToast = false;
        if(showToast){
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "changed",
                "message": "The record was changed."
            });
            resultsToast.fire();
        } else {
            alert("the record was changed");
        }
        }
    }
})