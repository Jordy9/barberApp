import { Dispatch, SetStateAction } from 'react';

import { Cancel, Edit } from '@mui/icons-material';
import { Chip, Grid, Typography } from "@mui/material"

interface ServiciosProps {
  setShowList: Dispatch<SetStateAction<string>>
}

export const UbicacionList = ({ setShowList }: ServiciosProps) => {

  const handleClick = () => {
    null
  };

  const arreglo: number[] = [ 1, 2, 3, 4, 6, 7, 8, 4 ,8 ]

  return (
    <>
      <Typography textAlign={ 'center' }>Listado de ubicaciones</Typography>
      <hr />

      <Grid display={ 'flex' } justifyContent = { 'center' } flexWrap = { 'wrap' }>
        {
          arreglo.map(e => (
            <Grid my={ 2 }>
              <Chip 
                label={ '12 de julio esquina padre billini' } 
                variant="outlined" 
                onClick={handleClick} 
                icon = { 
                  <div onClick={ () => setShowList('') }>
                    <Edit />
                  </div> 
                } 
                onDelete = { handleClick } 
                deleteIcon = { <Cancel /> } />
            </Grid>
          ))
        }
      </Grid>

    </>
  )
}
