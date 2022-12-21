import { Dispatch, SetStateAction } from "react";

import { Box } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/Search';

interface Props {
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

export const NavbarLateralDesk = ({ setShowDialog }: Props) => {
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
      <Button onClick={ () => setShowDialog(true) } sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
    </Box>
  )
}
