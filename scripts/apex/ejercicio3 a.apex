/*
    Count por status de propiedades
*/
List<Broker__c> brokers = [Select Id, name, (SELECT Status__c FROM Properties__r) From Broker__c];

for( Broker__c b  :brokers) {
    Map<String, Integer> contadores =  new Map<String, Integer>();
    for( Property__c p  :b.Properties__r) {
        if ( contadores.containsKey(p.Status__c) ) {
            contadores.put( p.Status__c,  contadores.get(p.Status__c) + 1 );
        } else {
            contadores.put( p.Status__c,  1 );
        }
    }
    System.debug(b.name + ' tiene ' + b.Properties__r.size() + ' propiedades ');
    System.debug('Desglose por status ' + contadores );
}




