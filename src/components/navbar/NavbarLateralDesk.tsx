import { Dispatch, SetStateAction } from "react";

import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/Search';
import { useAppSelector } from "../../store/hooks";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

interface Props {
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

export const NavbarLateralDesk = ({ setShowDialog }: Props) => {

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const navigate = useNavigate()

  return (
    <Box display={ 'flex' } justifyContent = { 'space-between' }>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscador"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {
        ( usuarioActivo )
          ?
        <Avatar onClick = { () => navigate('/Perfil') } sx={{ ml: 2, cursor: 'pointer' }} />
          :
        <Button onClick={ () => setShowDialog(true) } sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
      }
    </Box>
  )
}
