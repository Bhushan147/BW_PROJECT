public with sharing class WireAsPropertyClass {
    @AuraEnabled(cacheable=true)
    public static list<contact>getCon(){
        
            list<contact> conlist=[select Id,FirstName,LastName,Phone from contact];
            return conlist;
        
    }
}