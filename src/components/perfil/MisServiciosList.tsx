import { Dispatch, SetStateAction } from 'react';

import { Cancel, Edit } from '@mui/icons-material';
import { Chip, Grid, Typography } from "@mui/material"

interface ServiciosProps {
  setShowList: Dispatch<SetStateAction<string>>
}

export const MisServiciosList = ({ setShowList }: ServiciosProps) => {

  const handleClick = () => {
    null
  };

  const arreglo: number[] = [ 1, 2, 3, 4, 6, 7, 8, 4 ,8 ]

  return (
    <>
      <Typography textAlign={ 'center' }>Listado de servicios</Typography>
      <hr />

      <Grid display={ 'flex' } justifyContent = { 'space-between' } flexWrap = { 'wrap' }>
        {
          arreglo.map(e => (
            <Grid my={ 2 }>
              <Chip 
                label={ 'Recortada 300' } 
                variant="outlined" 
                onClick={handleClick} 
                icon = { 
                  <div onClick={ () => setShowList('') }>
                    <Edit />
                  </div> 
                } 
                onDelete = { handleClick } 
                deleteIcon = { <Cancel /> } 
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}
