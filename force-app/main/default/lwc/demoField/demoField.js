import { LightningElement, api } from 'lwc';

export default class DemoField extends LightningElement {
    @api record;
    @api field;

    get fieldValue() {
        if ( this.record === undefined || this.record[field] === undefined) {
            return '';
        }

        return this.record[field].value;
    }
}