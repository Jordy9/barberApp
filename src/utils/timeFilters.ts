import moment from "moment";

export const timeFilters: any = {
    'Ayer': {
      start: moment().subtract(1, 'day').startOf('day').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().subtract(1, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Hoy': {
      start: moment().startOf('day').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Semana pasada': {
      start: moment().subtract(1, 'week').startOf('week').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().subtract(1, 'week').endOf('week').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Esta semana': {
      start: moment().startOf('week').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().endOf('week').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Mes pasado': {
      start: moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Este mes': {
      start: moment().startOf('month').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().endOf('month').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Año pasado': {
      start: moment().subtract(1, 'year').startOf('year').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().subtract(1, 'year').endOf('year').format('YYYY-MM-DDTHH:mm:ss'),
    },
    'Este año': {
      start: moment().startOf('year').format('YYYY-MM-DDTHH:mm:ss'),
      end: moment().endOf('year').format('YYYY-MM-DDTHH:mm:ss'),
    }
  }
