import { LightningElement } from 'lwc';
import constants from '@salesforce/resourceUrl/constants';

export default class NavigationValidacionIdentidad extends LightningElement {
    variant = constants.NAVIGATION_VARIANT_CARDS;

    get menu() {
        return [
            { title: 'Foto Rostro DNI', image: '', link: '?' },
            { title: 'Validacion SMS/Mail', image: '', link: '?' },
            { title: 'Validacion en App', image: '', link: '?' }
        ];
    }
}
