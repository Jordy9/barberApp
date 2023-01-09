import { ChangeEvent, Dispatch, SetStateAction, useState, useMemo } from 'react';

import { Autocomplete, Button, FormControlLabel, Grid, IconButton, MenuItem, TextField } from "@mui/material"
import { Android12Switch, hoursSelect, top100Films } from "../../utils/Search"
import { SlideImage } from "./"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateServiceCita } from '../../store/socket/thunk';
import Typography from '@mui/material/Typography';

type service = {
    servicio: string;
    tiempo: string;
    minHor: string
  }

interface formValuesProps {
    hora: string;
    barbero: string;
    servicio: service[]
}

interface FormBarberProps {
    count: number;
    setCont: Dispatch<SetStateAction<number>>;
    formCount: number
    hora: string;
    barbero: string;
    servicio: service[];
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
    handleChange: (i: number, e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleChangeAutoComplete: (i: number, e: service[]) => void
    handleChangeBarber: (i: number, e: string) => void;
    // handleChangeHora: (i: number, e:string ) => void
    // minTime: Moment | null;
    formValues: formValuesProps[];
}

export const FormBarber = ({ 
    count, 
    setCont, 
    formCount, 
    hora, 
    barbero, 
    servicio, 
    ninos, 
    setNinos, 
    addNino, 
    deleteNino, 
    handleChange, 
    handleChangeAutoComplete,
    handleChangeBarber,
    formValues
}: FormBarberProps) => {

    const dispatch = useAppDispatch();

    const { negocio } = useAppSelector( state => state.ng );

    const { usuarioActivo, usuarios } = useAppSelector( state => state.auth );

    const negocioFilt = negocio.find( neg => neg.barberId === barbero )

    // const handleUpdateServiceCita = ( id: string, hora: string ) => {
    //     dispatch( updateServiceCita( id, hora, usuarioActivo!._id ) )
    // }

  return (
    <>
        {
            ( !barbero )
                &&
            <Typography my={ 2 } variant='h5' textAlign={ 'center' }>Seleccione su barbero</Typography>
        }

        <SlideImage barbero = { barbero } handleChangeBarber = { handleChangeBarber } count = { count } />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } item xs = { 6 }>
                <TextField
                    name='barbero'
                    value={ barbero }
                    onChange = { ({ target }) => handleChangeBarber(count, target.value) }
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Barbero"
                >
                    <MenuItem value={ '' }>
                        <em>Ninguno</em>
                    </MenuItem>

                    {usuarios.map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid px={ 1 } item xs = { 6 }>
                <TextField
                    name='hora'
                    value={ hora }
                    onChange = { ( e ) => handleChange(count, e) }
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Hora"
                    // helperText="Barbero que te atenderá"
                >
                {negocioFilt?.horarioDia?.map((option) => (
                    <MenuItem disabled = { ( formValues.some( values => values.hora === option.hora || option.selected === true ) ) } /* onClick={ () => handleUpdateServiceCita( negocioFilt._id, option.hora ) } */ key={option.hora} value={option.hora}>
                        {option.hora}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            
            <Grid px={ 1 } mt={ 3 } item xs = { 12 }>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={negocioFilt?.servicios || []}
                    getOptionLabel={(option) => option?.servicio}
                    fullWidth
                    value={ servicio }
                    filterSelectedOptions
                    onChange = { ( _, newValue ) => handleChangeAutoComplete(count, newValue) }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            name='servicio'
                            value={ servicio }
                            label="Servicios"
                            placeholder="Servicio"
                        />
                    )}
                />
            </Grid>

            <Grid item container display={ 'flex' } justifyContent = { 'space-between' }>
                {
                    ( count === 0 )
                        &&
                    <>
                        <FormControlLabel
                            sx={{ my: 2, px: 1 }}
                            control={<Android12Switch onChange={( e ) => setNinos(e.target.checked) } value={ ninos } />}
                            label="¿LLevas niños a ser atendido?"
                        />

                    </>
                }

                {
                    ( ninos && count > 0 )
                        &&
                    <Grid mt={ ( count > 0 ) ? 2 : 0 } display={ 'flex' } alignItems = { 'center' } >
                        <Button onClick={ () => deleteNino(count) } variant="contained" color="inherit">Quitar niño</Button>
                    </Grid>
                }

                {
                    ( ninos && formCount === count + 1 )
                        &&
                    <Grid mt={ ( count > 0 ) ? 2 : 0 } display={ 'flex' } alignItems = { 'center' } >
                        <Button onClick={ addNino } variant="contained" color="inherit">Agregar niño</Button>
                    </Grid>
                }

            </Grid>

            {
                ( ninos && formCount > 1 )
                    &&
                <Grid mt={ 1 } item container display={ 'flex' } justifyContent = { 'space-between' }>

                    <IconButton disabled = { ( count === 0 ) } onClick={ () => setCont(prev => prev - 1) }>
                        <ArrowBackIos />
                    </IconButton>

                    <IconButton disabled = { formCount === count + 1 } onClick={ () => setCont(prev => prev + 1) }>
                        <ArrowForwardIos />
                    </IconButton>

                </Grid>
            }

        </Grid>
    </>
  )
}
