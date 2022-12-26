import { ChangeEvent, useState } from 'react';

import { Box, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';

import { useResponsive } from '../../hooks/useResponsive';
import { TableUserSpreed } from './TableUserSpreed';
import { TableCells } from './';

export const TableUsers = () => {

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangeRowsPerPage = ( event: ChangeEvent<HTMLInputElement> ) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    const [ respWidth ] = useResponsive()
  
    const handleChangePage = ( event: unknown, newPage: number ) => {
      setPage(newPage);
    };

  return (
    <Box>
        <TableContainer elevation = { 10 } component={ Paper } sx={{ width: 'auto', height: ( respWidth < 991 ) ? '350px' : '349px', borderTopLeftRadius: '20px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <Table aria-label="simple table" stickyHeader = {true}>
            <TableHead>
              <TableRow>
                <TableCells respWidth={ respWidth } />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableUserSpreed />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ width: 'auto', mx: 'auto', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: '20px' }}
          labelRowsPerPage = { ( respWidth > 991 ) ? 'Filas por página' : 'Filas'}
          labelDisplayedRows = {({ from, to, count }) => `${from}-${to} de ${count}`}
          rowsPerPageOptions={[10, 25, 100]}
          elevation = { 10 }
          component={ Paper }
          count={ 10 }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
    </Box>
  )
}
