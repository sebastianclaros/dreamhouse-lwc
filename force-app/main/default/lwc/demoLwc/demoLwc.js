import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import PRICE_FIELD from '@salesforce/schema/Property__c.Price__c';

export default class DemoLwc extends LightningElement {
   @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PRICE_FIELD] }) wiredAction({data}) {
      this.recordObject = data;
   };
   
   @track recordObject;
   @api recordId;
   _fields = [NAME_FIELD, PRICE_FIELD];
      
   get recordWrap() {
      if(this.recordObject === undefined) {
         return [];
      }
      const retValue =  this._fields.map( ({fieldApiName}) => {
         return {
            name: fieldApiName,            
            value: this.recordObject.fields[fieldApiName].displayValue ? this.recordObject.fields[fieldApiName].displayValue : this.recordObject.fields[fieldApiName].value
         }
      })
      return retValue;
   }
}

