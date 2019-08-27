public class BoatSearchController {

    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        List<BoatType__c> results = new List<BoatType__c>();
        results = [SELECT Name FROM BoatType__c];
        return results;
    }
}