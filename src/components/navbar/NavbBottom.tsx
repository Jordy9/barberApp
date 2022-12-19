import { useState } from 'react';

import { ContentCut, Home, PhotoLibrary } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

interface navigationProp {
    pathname: string;
}

export const NavbBottom = ({ pathname }: navigationProp) => {

    const StyledFab = {
        position: 'fixed',
        zIndex: 1046,
        bottom: 30,
        left: 0,
        right: 0,
        margin: '0 auto',
    };

    const [ value, setValue ] = useState<number>(0);

    const navigate = useNavigate()

    // const navigation = ({ route, newValue }: navigationProp ) => {
    //     setValue( newValue );
    //     navigate( route )
    // }

  return (
    <BottomNavigation
        sx={{ position: (pathname === '/Inicio') ? 'absolute' : 'fixed', bottom: 0, left: 0, right: 0 }}
        showLabels
        value={ value }
        onChange={( event, newValue ) => {
            setValue(newValue)
        }}
    >
        <BottomNavigationAction label="Inicio" icon={ <Home /> } />
        <BottomNavigationAction label="Galería" icon={ <PhotoLibrary /> } />
        <BottomNavigationAction label="Barberos" icon={ <ContentCut /> } />
        <BottomNavigationAction label="Buscar" icon={ <SearchIcon /> } />
        <Fab sx={ StyledFab } size="large" color="inherit" aria-label="add">
            <AddIcon />
        </Fab>
    </BottomNavigation>
  )
}
