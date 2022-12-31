import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent } from 'react';

import { Autocomplete, Button, FormControlLabel, Grid, IconButton, MenuItem, TextField } from "@mui/material"
import { useResponsive } from "../../hooks/useResponsive"
import { Android12Switch, hoursSelect, top100Films } from "../../utils/Search"
import { SlideImage } from "./"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface FormBarberProps {
    count: number;
    setCont: Dispatch<SetStateAction<number>>;
    formCount: number
    hora: string;
    barbero: string;
    servicio: string[];
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
    handleChange: (i: number, e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleChangeAutoComplete: (i: number, e: string[]) => void
}

export const FormBarber = ({ count, setCont, formCount, hora, barbero, servicio, ninos, setNinos, addNino, deleteNino, handleChange, handleChangeAutoComplete }: FormBarberProps) => {

    const [ respWidth ] = useResponsive()

  return (
    <>
        <SlideImage />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } item xs = { 6 }>
                <TextField
                    id="outlined-select-currency"
                    select
                    name='hora'
                    value={ hora }
                    onChange = { ( e ) => handleChange(count, e) }
                    label="Hora"
                    defaultValue="3:00"
                    helperText={ ( respWidth < 700 ) ? 'Aproximada' : "Hora aproximada a la que será atendido"}
                >
                {hoursSelect.map((option) => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </TextField>
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
                    getOptionLabel={(option) => option}
                    defaultValue={[top100Films[13]]}
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