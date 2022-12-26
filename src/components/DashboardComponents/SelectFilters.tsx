import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from "react";

interface SelectProps {
  title: string;
  Filtro?: string[] | number [];
  width: number
}

export const SelectFilters = ({ title, Filtro, width }: SelectProps) => {

  const arregloFiltro = Filtro

  const [filter, setFilter] = useState( '' );

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: width }} size="small">
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
