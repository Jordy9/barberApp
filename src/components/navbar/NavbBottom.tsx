import { Home } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

export const NavbBottom = () => {

    const StyledFab = {
        position: 'absolute',
        zIndex: 1,
        bottom: 30,
        left: 0,
        right: 0,
        margin: '0 auto',
    };

  return (
    <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
    >
        <BottomNavigationAction label="Inicio" icon={<Home />} />
        <BottomNavigationAction label="Buscar" icon={<SearchIcon />} />
        <Fab sx={ StyledFab } size="large" color="inherit" aria-label="add">
            <AddIcon />
        </Fab>
        {/* <BottomNavigationAction label="Nearby" icon={<HeartBroken />} /> */}
    </BottomNavigation>
  )
}
