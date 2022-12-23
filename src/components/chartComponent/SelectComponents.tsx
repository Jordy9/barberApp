import { SelectFilters } from "./"
import { useResponsive } from '../../hooks/useResponsive';
import { Button } from "@mui/material";

export const SelectComponents = () => {

  const arreglo: number[] = [ 1, 2, 3 ]

  const [ respWidth ] = useResponsive()

  return (
    <>
      {
        ( respWidth > 991 )
          ?
        arreglo.map( e => (
          <SelectFilters />
        ))
          :
        <Button variant="contained" color={ 'inherit' }>Filtros</Button>
      }
    </>
  )
}
