import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { onGetDatePagination } from '../../store/citas/CitasSlice';
import { obtenerCitaNewDate } from '../../store/citas/thunk';
import { useAppDispatch } from '../../store/hooks';
import { timeFilters } from '../../utils/timeFilters';

interface SelectProps {
  title: string;
  Filtro?: string[] | number [];
  width: number;
}

export const SelectFilters = ({ title, Filtro, width }: SelectProps) => {

  const dispatch = useAppDispatch();

  const arregloFiltro = Filtro

  const [filter, setFilter] = useState( '' );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch( onGetDatePagination(timeFilters[event.target.value]) )
    setFilter(event.target.value);
    dispatch( obtenerCitaNewDate(1, 15, undefined, false, timeFilters[event.target.value]) )
  };

  return (
    <FormControl sx={{ mx: 1, mt: 1, width: width }} size="small">
      <InputLabel id="demo-select-small">{ title }</InputLabel>
      <Select
        sx={{ borderRadius: '12px' }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={ filter }
        label= { title }
        onChange={ handleChange }
      >
        <MenuItem value="">
          <em>Ninguna</em>
        </MenuItem>
        {
          arregloFiltro?.map( e => (
            <MenuItem key={ e } value={ e }>
              { e }
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}
