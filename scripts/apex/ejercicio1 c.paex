
List<AggregateResult> resultado = [Select Broker__r.name, Status__c, COUNT(ID) contador From Property__c GROUP BY Broker__r.name, Status__c];

for( AggregateResult r :resultado) {
    System.debug(r.get('name') + 'para ' + r.get('Status__c') + 'tiene ' + r.get('contador') ); 
}




