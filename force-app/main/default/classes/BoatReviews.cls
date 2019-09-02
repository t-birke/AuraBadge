public class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(String boatId){
        List<BoatReview__c> reviews = new List<BoatReview__c>();
        if(boatId != ''){
            reviews = [SELECT Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name, CreatedBy.SmallPhotoURL, CreatedBy.CompanyName FROM BoatReview__c WHERE Boat__c = :boatId];
        }
        return reviews;
    }
}