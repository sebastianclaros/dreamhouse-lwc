import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { NAVIGATION_VARIANT_LIST } from 'c/constants';

import listTemplate from './templates/list.html';
import cardsTemplate from './templates/cards.html';

export default class Navigation extends NavigationMixin(LightningElement) {
    _data = [];

    @api variant = NAVIGATION_VARIANT_LIST;

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
        return this.variant === NAVIGATION_VARIANT_LIST
            ? listTemplate
            : cardsTemplate;
    }
}
