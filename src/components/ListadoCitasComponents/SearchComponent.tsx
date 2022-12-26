import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/Search';
import { Button, Grid, IconButton } from '@mui/material';
import { useState } from 'react';
import { DialogDateRange } from '../chartComponent';
import { useResponsive } from '../../hooks/useResponsive';

export const SearchComponent = () => {

    const [showDialog, setShowDialog] = useState(false)

    const [ respWidth ] = useResponsive()

  return (
    <Grid display={ 'flex' } justifyContent = { ( respWidth < 991 ) ? 'space-between' : 'inherit' } alignItems = { 'center' } pb = { 2 }>
        <Button onClick={ () => setShowDialog(true) }>Filtrar por fecha</Button>

        {
            ( respWidth > 991 )
                ?
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Barbero"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
                :
            <IconButton>
                <SearchIcon />
            </IconButton>
        }
        <DialogDateRange showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </Grid>
  )
}
