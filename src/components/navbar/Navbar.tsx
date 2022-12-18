import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Menu } from '@mui/icons-material'
import { Box } from '@mui/system'
import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/Search';
import { RespWidthProps } from '../../interfaces/interfaces';

export const Navbar = ({ respWidth }: RespWidthProps) => {

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
          <Typography variant="h6" component="div" sx={{ flexGrow: (respWidth > 700) ? 0.1 : 1 }}>
            BarberApp
          </Typography>

          {
            ( respWidth > 700 )
              &&
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" variant='contained'>Inicio</Button>
            </Box>
          }

          {
            ( respWidth > 700 )
              ?
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
              :
            <Box display={ 'flex' } justifyContent = { 'space-between' }>
              <Button sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
            </Box>

          }


        </Toolbar>
      </AppBar>
    </Box>
  )
}
