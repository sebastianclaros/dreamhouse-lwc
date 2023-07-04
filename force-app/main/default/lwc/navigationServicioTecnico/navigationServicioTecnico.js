import { LightningElement } from 'lwc';
import { NAVIGATION_VARIANT_LIST } from 'c/constants';

export default class NavigationServicioTecnico extends LightningElement {
    variant = NAVIGATION_VARIANT_LIST;

    get menu() {
        return [
            {
                title: 'Ingreso de reparacion',
                icon: 'utility:arrowdown',
                link: '?'
            },
            {
                title: 'Ejecutar reparacion',
                icon: 'utility:arrowup',
                link: '?'
            },
            {
                title: 'Recepcion de equipo reparado',
                icon: 'utility:back',
                link: '?'
            },
            {
                title: 'Entrega de equipo reparado',
                icon: 'utility:save',
                link: '?'
            }
        ];
    }
}
