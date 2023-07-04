import { LightningElement } from 'lwc';

const columns = [
    { label: 'Alumno', fieldName: 'name' },
    { label: 'Lunes', fieldName: 'lunes' },
    { label: 'Martes', fieldName: 'martes' },
    { label: 'Miercoles', fieldName: 'miercoles' },
    { label: 'Jueves', fieldName: 'jueves' },
    { label: 'Viernes', fieldName: 'viernes' }
];

export default class Asistencias extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        this.data = generateData({ amountOfRecords: 100 });
    }
}

function generateData({ amountOfRecords }) {
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: `Name (${index})`,
            lunes: 'No Asistio',
            martes: 'No Asistio',
            miercoles: 'No Asistio',
            jueves: 'No Asistio',
            viernes: 'No Asistio'
        };
    });
}
