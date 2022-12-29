import { Box, Grid, Typography } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface DragProps {
  respWidth: number;
}

export const DragAndDropImage = ({ respWidth }: DragProps) => {
  return (
    <Box sx={{ border: '1px dashed', width: '100%', height: ( respWidth > 991 ) ? '400px' : '100px', cursor: 'pointer', borderRadius: '12px' }}>
      <Grid sx={{ height: '100%' }} display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' }>
        {
          ( respWidth > 991 )
            ?
          <Grid textAlign={ 'center' }>
            <CloudUploadIcon sx={{ fontSize: '70px' }} />
            <Typography>Arratra los archivos para subirlos</Typography>
          </Grid>
            :
          <Grid textAlign={ 'center' }>
            <CloudUploadIcon sx={{ fontSize: '40px' }} />
            <Typography>Seleccione los archivos</Typography>
          </Grid>
        }
      </Grid>
    </Box>
  )
}
