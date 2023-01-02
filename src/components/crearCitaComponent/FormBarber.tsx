import { ChangeEvent, Dispatch, SetStateAction, useState, useMemo } from 'react';

import { Autocomplete, Button, FormControlLabel, Grid, IconButton, MenuItem, TextField } from "@mui/material"
import { useResponsive } from "../../hooks/useResponsive"
import { Android12Switch, hoursSelect, top100Films } from "../../utils/Search"
import { SlideImage } from "./"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import moment, { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

type service = {
    title: string;
    time: number;
}

interface formValuesProps {
    hora: Moment | null;
    barbero: string;
    servicio: service[]
}

interface FormBarberProps {
    count: number;
    setCont: Dispatch<SetStateAction<number>>;
    formCount: number
    hora: Moment | null;
    barbero: string;
    servicio: service[];
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
    handleChange: (i: number, e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleChangeAutoComplete: (i: number, e: service[]) => void
    handleChangeHora: (i: number, e: Moment | null) => void
    minTime: Moment | null;
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
    handleChangeHora, 
    minTime,
    formValues
}: FormBarberProps) => {

    const tiempoAdicional = servicio

    let suma = 0

    formValues[0].servicio.map( e => suma = suma + e.time )

    const [ respWidth ] = useResponsive()

    let minTimeNow2 = useMemo(() => ( count > 0 ) ? minTime?.clone()?.add(45, 'minutes') : minTime, [])

  return (
    <>
        <SlideImage />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } item xs = { 6 }>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <MobileTimePicker
                        label="Hora"
                        minTime={ minTimeNow2 }
                        value={ ( count > 0 ) ? minTimeNow2 : hora }
                        ampmInClock
                        onChange={(newValue) => {
                            handleChangeHora(count, newValue)
                        }}
                        renderInput={(params) => 
                            <TextField 
                                name='hora' 
                                {...params} 
                                helperText={ ( respWidth < 700 ) ? 'Hora aproximada' : "Hora aproximada a la que será atendido"}
                            />
                        }
                    />
                </LocalizationProvider>
            </Grid>

            <Grid px={ 1 } item xs = { 6 }>
                <TextField
                    name='barbero'
                    value={ barbero }
                    onChange = { ( e ) => handleChange(count, e) }
                    fullWidth
                    id="outlined-select-currency"
                    select
                    label="Barbero"
                    // helperText="Barbero que te atenderá"
                >
                {hoursSelect.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            
            <Grid px={ 1 } mt={ 3 } item xs = { 12 }>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
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
                            placeholder="Favorites"
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
