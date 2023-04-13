public with sharing class WireAsFunction{
    @AuraEnabled(cacheable=true)
    public static list<Account> findAcc(){
    list<Account> acclist=[select Id,Name,Phone from Account];
        return acclist;
   }

}