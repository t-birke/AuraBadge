public class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        List<Boat__c> boats = new List<Boat__c>();
        if(boatTypeId == ''){
            boats = [SELECT Picture__c, Contact__r.Name FROM Boat__c];
        } else {
            boats = [SELECT Picture__c, Contact__r.Name FROM Boat__c WHERE BoatType__c = :boatTypeId];
        }
        return boats;
    }
}