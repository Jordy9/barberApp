import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import { SearchFilter, SearchIconWrapperFilter, StyledInputBaseFilter } from '../../utils/Search';

export const FilterOptionsBarber = () => {
  return (
    <Box py={ 1 } display={ 'flex' } justifyContent = { 'space-between' } width = { 500 }>
      <SearchFilter>
        <SearchIconWrapperFilter>
          <SearchIcon />
        </SearchIconWrapperFilter>
        <StyledInputBaseFilter
          placeholder="Buscar por nombre o barbería"
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchFilter>

      <Button variant='contained' color='inherit'>Mejor calificados</Button>
    </Box>
  )
}
