import { Delete, Public, PublicOff, RemoveRedEye } from '@mui/icons-material';
import { ListItemText, Grid, Typography, IconButton } from '@mui/material';

import moment from 'moment';
import { useState } from 'react';

import { DialogVerActualizar } from './';

interface ListTextProps {
    title: string;
    description?: string;
    fecha: number;
    estado: boolean;
}

export const ListText = ({ title, description, fecha, estado }: ListTextProps) => {

    const [showDialog, setShowDialog] = useState(false)

  return (
    <>
        <ListItemText
            primary={
                <Grid display={ 'flex' }>
                    <Typography variant='h6'>{ title }</Typography>

                    <Grid sx={{ ml: 'auto' }}>
                        <IconButton onClick={ () => setShowDialog(true) } color='info' sx={{ p: 0 }}>
                            <RemoveRedEye />
                        </IconButton> 

                        <IconButton color={ ( estado ? 'success' : 'inherit' ) } sx={{ p: 0, mx: 1 }}>
                            {
                                ( estado )
                                    ?
                                <Public />
                                    :
                                <PublicOff />
                            }
                        </IconButton> 

                        <IconButton color='error' sx={{ p: 0 }}>
                            <Delete />
                        </IconButton> 
                    </Grid>
                </Grid>
            }
            secondary={
                <>
                    <Typography
                        sx={{ 
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        { description }
                    </Typography>

                    <Typography
                        sx={{ display: 'flex', justifyContent: 'end' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                    >
                        { moment(fecha).format('MMMM Do YYYY') }
                    </Typography>
                </>
            }
        />

        <DialogVerActualizar showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </>
  )
}
