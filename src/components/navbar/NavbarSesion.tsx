import { Dispatch, SetStateAction } from 'react';

import { IconButton, Button, Box } from '@mui/material';

import { PersonPin } from '@mui/icons-material';
import { useAppSelector } from '../../store/hooks';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

interface NavbarSesionProps {
    setShowDialog: Dispatch<SetStateAction<boolean>>;
    respWidth: number;
}

export const NavbarSesion = ({ setShowDialog, respWidth }: NavbarSesionProps ) => {

    const { usuarioActivo } = useAppSelector( state => state.auth );

    const navigate = useNavigate()

  return (
    <>
        {
            ( usuarioActivo )
                ?
            <Avatar sx={{ cursor: 'pointer' }} onClick={ () => navigate('/Perfil') } component={ 'span' } />
                :
            <Condicion respWidth={ respWidth } setShowDialog = { setShowDialog } />
            
        }
    </>
  )
}

const Condicion = ({ respWidth, setShowDialog }: NavbarSesionProps) => {
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
