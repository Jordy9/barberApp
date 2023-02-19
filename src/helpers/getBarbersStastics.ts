import { Negocio } from '../interfaces/negocioInterface';
import { Rating } from '../interfaces/ratingForm';
import { CitasInterfaceCita } from '../interfaces/citasInterface';
import moment from 'moment';
import { Moment } from 'moment';

export const getStars = ( rating: Rating[] | null ) => {

    if ( !rating ) return 0
    
    let startsSum = 0

    rating?.forEach(element => {
        startsSum = startsSum + element.calificacion
    });

    const totalSumado = ( startsSum/rating!.length ) * 100

    const porcentage = totalSumado / 100

    return porcentage
}

interface serviceStarProps {
   title: string;
   count: number 
}

export const getServiceStars = ( negocio: Negocio | undefined, cita: CitasInterfaceCita[] ) => {

    if ( !negocio ) return []
    
    let startsSum: serviceStarProps[] = []

    cita?.forEach(element => {
        
        element.cita.forEach(element2 => {

            negocio.servicios.forEach(( element3, index ) => {
                
                if ( startsSum[index]?.title === undefined && !element2.servicio.some( e => e.servicio === element3.servicio) ) {
                    startsSum.push({ title: element3.servicio, count: 0})
                } else if ( startsSum[index]?.title === undefined && element2.servicio.some( e => e.servicio === element3.servicio) ) {
                    startsSum.push({ title: element3.servicio, count: 1})
                } else {
                    ( element2.servicio.some( e => e.servicio === startsSum[index].title ) ) ? { title: startsSum[index].title, count: startsSum[index].count++ } : startsSum[index]
                }
            });

        });
    });

    const sumSort = startsSum.sort(( a, b ) => a.count < b.count ? 1 : -1)

    return sumSort
}

export const getTimeEarly = ( cita: CitasInterfaceCita[] ) => {

    let newMinTime = ''

    cita.forEach(element => {
        
        const minTime = element.cita.reduce(function(prev, curr) {
            return moment(prev.hora.fecha).isBefore(moment(curr.hora.fecha)) ? prev : curr;
        });

        newMinTime = minTime.hora.hora

    });

    return newMinTime

}

export const getPreferTime = ( cita: CitasInterfaceCita[] ) => {

    let arrayTime: any[] = []

    let newPreferTime = ''

    cita.forEach(element => {

        element.cita.forEach(element2 => {
            arrayTime.push(moment(element2.hora.fecha).startOf('hour'))
        });

    });

    newPreferTime = busqueda(arrayTime)

    return newPreferTime

}

const busqueda = (arreglo: any[]) => {
    let resultTime = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo.map(firstTime => {
        cuenta = 0
        arreglo.map(secondTime => {
            if (firstTime == secondTime) { cuenta++ }
        })
        if (cuenta > contador) {

            contador = cuenta;
            resultTime = firstTime;
        }
    });
    return moment(resultTime).format('hh:mm a');

}

export const getCardsInfo = ( cita: CitasInterfaceCita[] ) => {

    let completas = 0
    let espera = 0
    let canceladas = 0

    let total = 0

    cita.forEach(element => {
        element.cita.forEach(element2 => {

            total++
            
            if ( element2.estado === 'Finalizada' ) completas++

            if ( element2.estado === 'En-espera' ) espera++

            if ( element2.estado === 'Cancelada' ) canceladas++
        });
    });

    return [ completas, espera, canceladas, total ]

}