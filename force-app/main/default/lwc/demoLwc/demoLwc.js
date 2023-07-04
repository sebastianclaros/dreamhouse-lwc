import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import PRICE_FIELD from '@salesforce/schema/Property__c.Price__c';
import constants from '@salesforce/resourceUrl/constants';
import getPictures from '@salesforce/apex/PropertyController.getPictures';

export default class DemoLwc extends LightningElement {
    state = constants.STATE_LOADING;
    @track recordObject;
    @api recordId;
    _fields = [NAME_FIELD, PRICE_FIELD];

    get isLoading() {
        return this.state === constants.STATE_LOADING;
    }
    get isError() {
        return this.state === constants.STATE_ERROR;
    }

    @wire(getPictures, { propertyId: '$recordId' }) pictures;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [NAME_FIELD, PRICE_FIELD]
    })
    getRecord({ data, error }) {
        if (data) {
            this.recordObject = data;
            this.state = constants.STATE_LOADED;
        } else if (error) {
            this.state = constants.STATE_ERROR;
        }
    }

    get recordWrap() {
        if (this.recordObject === undefined) {
            return [];
        }
        const retValue = this._fields.map(({ fieldApiName }) => {
            return {
                name: fieldApiName,
                value: this.recordObject.fields[fieldApiName].displayValue
                    ? this.recordObject.fields[fieldApiName].displayValue
                    : this.recordObject.fields[fieldApiName].value
            };
        });
        return retValue;
    }

    errorCallback() {
        this.state = constants.STATE_ERROR;
    }
}
