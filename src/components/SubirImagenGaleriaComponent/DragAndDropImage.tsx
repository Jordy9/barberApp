import { Box, Grid, Typography } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const DragAndDropImage = () => {
  return (
    <Box sx={{ border: '1px dashed', width: '90%', height: '400px', cursor: 'pointer' }}>
        <Grid sx={{ height: '100%' }} display={ 'flex' } justifyContent={ 'center' } alignItems={ 'center' }>
            <Grid textAlign={ 'center' }>
                <CloudUploadIcon sx={{ fontSize: '70px' }} />
                <Typography>Arratra los archivos para subirlos</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}
