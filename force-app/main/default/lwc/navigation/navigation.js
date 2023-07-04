import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import constants from '@salesforce/resourceUrl/constants';
import listTemplate from './templates/list.html';
import cardsTemplate from './templates/cards.html';

export default class Navigation extends NavigationMixin(LightningElement) {
    _data = [];

    @api variant = constants.NAVIGATION_VARIANT_LIST;

    @api
    get menu() {
        return this._data;
    }
    set menu(data) {
        this._data = data.map((item, index) => {
            return {
                key: `menu-item-${index}`,
                ...item
            };
        });
    }

    render() {
        return this.variant === constants.NAVIGATION_VARIANT_LIST
            ? listTemplate
            : cardsTemplate;
    }
}
