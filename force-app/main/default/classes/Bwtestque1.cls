public without sharing class Bwtestque1 {
  @AuraEnabled(cacheable=true)
 public static List<Account> getAccount(){
    List<Account> acclist=[select Id,Name  from Account ];
        return acclist;
  }
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccountdata(string accname){
       string searchkey='%'+accname+'%';
 
       List<Account> acclist1=[select Id, Name,Rating,Ownership,Industry from Account where Name Like 'searchkey'];
       return acclist1;
   }
   @AuraEnabled(cacheable=true)
   public static List<Contact> getContacts(string accname){
    string searchkey='%'+accname+'%';
    List<Contact> conlist=[select Id,Firstname, LastName,Email,Phone from Contact where Firstname Like 'searchkey'];
    return conlist;  
    }
}
