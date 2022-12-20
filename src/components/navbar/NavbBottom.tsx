import { ContentCut, Home, PhotoLibrary } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';

interface navigationProp {
    pathname: string;
}

const getPageIndex = ( pathname: string ) => {
    switch ( pathname ) {
        case '/Inicio': 
            return 0;
        case '/Galeria': 
            return 1;
        case '/Barberos': 
            return 2;
        default: 
            return 0;
    }
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

    const value = getPageIndex( pathname );

  return (
    <BottomNavigation
        sx={{ position: ( pathname === '/Inicio' ) ? 'absolute' : 'fixed', bottom: 0, left: 0, right: 0 }}
        showLabels
        value={ value }
    >
        <BottomNavigationAction component={ Link } to="/Inicio" label="Inicio" icon={ <Home /> } />
        <BottomNavigationAction component={ Link } to="/Galeria" label="Galería" icon={ <PhotoLibrary /> } />
        <BottomNavigationAction component={ Link } to="/Barberos" label="Barberos" icon={ <ContentCut /> } />
        <BottomNavigationAction label="Buscar" icon={ <SearchIcon /> } />
        <Fab sx={ StyledFab } size="large" color="inherit" aria-label="add">
            <AddIcon />
        </Fab>
    </BottomNavigation>
  )
}