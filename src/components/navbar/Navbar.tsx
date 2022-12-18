import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/icons-material'
import { Box } from '@mui/system'
import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/Search';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.1 }}>
            BarberApp
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" variant='contained'>Inicio</Button>
          </Box>

          <Box display={ 'flex' } justifyContent = { 'space-between' }>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Button sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
