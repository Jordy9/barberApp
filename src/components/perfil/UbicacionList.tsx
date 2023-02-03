import { Dispatch, SetStateAction } from 'react';

import { Cancel, Edit } from '@mui/icons-material';
import { Grid, Typography, Box } from '@mui/material';
import { onActiveUbicacion } from '../../store/negocio/negocioSlice';
import { useAppDispatch } from '../../store/hooks';
import IconButton from '@mui/material/IconButton';
import { Ubicacion } from '../../interfaces/negocioInterface';

interface ServiciosProps {
  setShowList: Dispatch<SetStateAction<string>>
  ubic: Ubicacion[]
}

export const UbicacionList = ({ setShowList, ubic }: ServiciosProps) => {

  const dispatch = useAppDispatch();

  const handleClick = ( e: any, index: number ) => {
    setShowList('')
    dispatch( onActiveUbicacion({ ...e, index }) )
  };

  return (
    <>
      <Typography textAlign={ 'center' }>Listado de ubicaciones</Typography>
      <hr />

      <Grid display={ 'flex' } justifyContent = { 'center' } flexWrap = { 'wrap' }>

        {
          ubic.map(( e, index ) => (
            <Grid my={ 2 }>
              <Box display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' } p={ 1.2 } sx={{ borderRadius: '20px', backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                <IconButton onClick={ () => handleClick( e, index ) }><Edit /></IconButton>
                  <Typography sx={{ mx: 1 }}>{ e.ubicacion }</Typography>
                <IconButton><Cancel color='error' /></IconButton>
              </Box>
            </Grid>
          ))
        }

      </Grid>

    </>
  )
}
