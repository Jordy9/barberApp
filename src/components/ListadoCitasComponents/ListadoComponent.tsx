import { SearchComponent, TableCita } from './'
import { Box } from '@mui/material';

export const ListadoComponent = () => {
  return (
    <Box p={ 1 }>
      <SearchComponent />
      <TableCita />
    </Box>
  )
}
