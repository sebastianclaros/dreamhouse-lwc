/*
    Count por status de propiedades
*/
List<Property__c> propiedades = [Select Id, Broker__r.name, Broker__c, Status__c From Property__c];

Map<String, Integer> contadores =  new Map<String, Integer>();
for( Property__c p :propiedades) {
    String key = p.broker__r.name + ' ' + p.Status__c;
    if ( contadores.containsKey(key) ) {
        contadores.put( key,  contadores.get(key) + 1 );
    } else {
        contadores.put( key,  1 );
    }
}

for( String key :contadores.keySet()) {
    System.debug(key + ' tiene ' + contadores.get(key) );
}




