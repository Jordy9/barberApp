import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, top100Films } from '../../utils/Search';
import { Button, Grid, IconButton } from '@mui/material';
import { useState } from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { DialogListadoCita } from './';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const SearchComponent = () => {

    const [showDialog, setShowDialog] = useState(false)

    const [ respWidth ] = useResponsive()

  return (
    <Grid display={ 'flex' } justifyContent = { ( respWidth < 991 ) ? 'space-between' : 'inherit' } alignItems = { 'center' } pb = { 2 }>
        <Button variant='contained' color='inherit' onClick={ () => setShowDialog(true) }>
            {
                (  respWidth < 600 )
                    ?
                'Filtrar'
                    :
                'Filtrar por fecha'
            }
        </Button>

        {
            ( respWidth > 600 )
                &&
            <Grid container width={ 230 } mx = { 1 }>
                <Autocomplete
                    size='small'
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    fullWidth
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Barbero"
                            placeholder="Favorites"
                        />
                    )}
                />
            </Grid>
        }
        <DialogListadoCita showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </Grid>
  )
}
