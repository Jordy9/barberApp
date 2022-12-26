import { Dispatch, SetStateAction } from 'react';

import { IconButton, Button, Box } from '@mui/material';

import { PersonPin } from '@mui/icons-material';

interface NavbarSesionProps {
    setShowDialog: Dispatch<SetStateAction<boolean>>;
    respWidth: number;
}

export const NavbarSesion = ({ setShowDialog, respWidth }: NavbarSesionProps ) => {
  return (
    <>
        {
            ( respWidth < 335 )
                ?
            <IconButton onClick={ () => setShowDialog(true) }>
                <PersonPin fontSize='large' />
            </IconButton>
                :
            <Box display={ 'flex' } justifyContent = { 'space-between' }>
                <Button onClick={ () => setShowDialog(true) } sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
            </Box>
        }
    </>
  )
}
