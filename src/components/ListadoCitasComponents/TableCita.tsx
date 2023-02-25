import { ChangeEvent, useState } from 'react';

import { Box, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Paper, CircularProgress } from '@mui/material';

import { useResponsive } from '../../hooks/useResponsive';
import { TableCells, TableCitaSpreed } from './';
import { obtenerCitaList } from '../../store/citas/thunk';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const TableCita = () => {

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

    const { refElement, isLoading } = useInfiniteScroll( obtenerCitaList )

  return (
    <Box ref={refElement}>
        <TableContainer elevation = { 10 } component={ Paper } sx={{ width: 'auto', height: ( respWidth < 991 ) ? '60vh' : 'auto', borderTopLeftRadius: '20px', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <Table  component={'div'} aria-label="collapsible table" stickyHeader = {true}>
            <TableHead>
              <TableRow>
                <TableCells respWidth={ respWidth } />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCitaSpreed />
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
        {
          ( isLoading )
            &&
          <Box display={ 'flex' } justifyContent = { 'center' }>
            <CircularProgress color="inherit" />
          </Box>
        }
    </Box>
  )
}
