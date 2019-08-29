({
	onFormSubmit : function(component, event, helper) {
        component.find("results").search(event.getParam("formData").boatTypeId);
	}
})