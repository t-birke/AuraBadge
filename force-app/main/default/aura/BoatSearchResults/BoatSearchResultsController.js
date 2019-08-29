({
	init : function(component, event, helper) {
		helper.onSearch(component);
	},
    doSearch : function(component, event, helper){
        component.set("v.boatTypeId",event.getParam("arguments").boatTypeId);
        helper.onSearch(component);
    }
})