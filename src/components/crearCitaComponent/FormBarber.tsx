import { Dispatch, SetStateAction } from 'react';

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
    servicio: string;
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
}

export const FormBarber = ({ count, setCont, formCount, hora, barbero, servicio, ninos, setNinos, addNino, deleteNino }: FormBarberProps) => {

    const [ respWidth ] = useResponsive()

  return (
    <>
        <SlideImage />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } xs = { 6 }>
                <TextField
                    id="outlined-select-currency"
                    select
                    name='hora'
                    value={ hora }
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

            <Grid px={ 1 } xs = { 6 }>
                <TextField
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
            
            <Grid px={ 1 } mt={ 3 } xs = { 12 }>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[13]]}
                    fullWidth
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                        {...params}
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
                ( ninos )
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
