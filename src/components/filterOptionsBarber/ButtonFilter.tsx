import { Button, Box } from '@mui/material';
import { useState } from 'react';

import { DialogFilter } from './DialogFilter';

export const ButtonFilter = () => {

  const [showDialog, setShowDialog] = useState(false)

  return (
    <Box px={ 1 }>
      <Button onClick={ () => setShowDialog(true) } variant='contained' color='inherit'>Filtros</Button>

      <DialogFilter showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </Box>
  )
}
