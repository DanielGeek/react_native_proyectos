/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
export const getDateString = (date) => {

    if (Platform.OS === 'ios') {

        return date.toLocaleDateString('en-US', {

            weekday: 'short',

            day: 'numeric',

            month: 'long',

            year: 'numeric',

        });
    } else {

        let dayOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
            monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            utc = date.getTime() + date.getTimezoneOffset() * 60000,
            US_time = utc + (3600000 * -4),
            US_date = new Date(US_time);

        return dayOfWeek[US_date.getDay() - 1] + ', ' + US_date.getDate() +
            ' de ' + monthName[US_date.getMonth()] + ', del ' + US_date.getFullYear();
    }

};
