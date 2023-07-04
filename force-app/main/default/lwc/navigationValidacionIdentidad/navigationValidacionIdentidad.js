import { LightningElement } from 'lwc';
import { NAVIGATION_VARIANT_CARDS } from 'c/constants';

export default class NavigationValidacionIdentidad extends LightningElement {
    variant = NAVIGATION_VARIANT_CARDS;

    get menu() {
        return [
            { title: 'Foto Rostro DNI', image: '', link: '?' },
            { title: 'Validacion SMS/Mail', image: '', link: '?' },
            { title: 'Validacion en App', image: '', link: '?' }
        ];
    }
}
