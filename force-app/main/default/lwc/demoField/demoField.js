import { LightningElement, api } from 'lwc';

export default class DemoField extends LightningElement {
    @api record;
    @api field;

    get fieldValue() {
        if ( this.record === undefined || this.record[this.field] === undefined) {
            return '';
        }

        return this.record[this.field].value;
    }
}