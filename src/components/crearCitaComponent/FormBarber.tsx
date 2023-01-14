import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Autocomplete, Button, FormControlLabel, Grid, IconButton, MenuItem, TextField, FormControl, InputLabel, Select, ListItemText } from '@mui/material';
import { Android12Switch } from "../../utils/Search"
import { SlideImage } from "./"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createServiceCitaForm, updateServiceCita } from '../../store/socket/thunk';
import Typography from '@mui/material/Typography';
import { FormikTouched } from 'formik';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';

type service = {
    servicio: string;
    tiempo: string;
    minHor: string
  }

interface formValuesProps {
    hora: string;
    barberId: string;
    servicio: service[]
}

interface FormBarberProps {
    count: number;
    setCont: Dispatch<SetStateAction<number>>;
    formCount: number
    hora: string;
    barberId: string;
    servicio: service[];
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
    handleChange: (i: number, e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleChangeAutoComplete: (i: number, e: service[], index: number) => void
    handleChangeBarber: (i: number, e: string) => void;
    // handleChangeHora: (i: number, e:string ) => void
    // minTime: Moment | null;
    touchedBarbero: string | boolean | undefined;
    touchedHora: string | boolean | undefined;
    touchedServicio: string | boolean | undefined | FormikTouched<service>[];
    errors: any;
    formValues: formValuesProps[];
}

export const FormBarber = ({ 
    count, 
    setCont, 
    formCount, 
    hora, 
    barberId, 
    servicio, 
    ninos, 
    setNinos, 
    addNino, 
    deleteNino, 
    handleChange, 
    handleChangeAutoComplete,
    handleChangeBarber,
    touchedBarbero,
    touchedHora,
    errors,
    formValues
}: FormBarberProps) => {

    const dispatch = useAppDispatch();

    const { negocio } = useAppSelector( state => state.ng );

    const { citaActiva } = useAppSelector( state => state.ct );

    const { usuarioActivo, usuarios } = useAppSelector( state => state.auth );

    const negocioFilt = negocio.find( neg => neg.barberId === barberId )

    const handleUpdateServiceCita = ( id: string, hora: string ) => {
        dispatch( updateServiceCita( id, hora, ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count ) )
        dispatch( createServiceCitaForm({ barberId: id, hora, usuarioId: ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count, estado: ( citaActiva ) ? 'Update' : 'Create' }) )
    }

    const uid = ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count
    
  return (
    <>
        {
            ( !barberId )
                &&
            <Typography my={ 2 } variant='h5' textAlign={ 'center' }>Seleccione su barbero</Typography>
        }

        <SlideImage barbero = { barberId } handleChangeBarber = { handleChangeBarber } count = { count } />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } item xs = { 6 }>
                <TextField
                    error={ ( touchedBarbero && errors?.barberId ) }
                    name='barbero'
                    value={ barberId }
                    onChange = { ({ target }) => handleChangeBarber(count, target.value) }
                    fullWidth
                    id="outlined-select-currency"
                    select
                    helperText = { ( touchedBarbero && errors?.barberId ) && errors?.barberId }
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
                    error={ ( barberId && touchedHora && errors?.hora ) }
                    helperText = { ( barberId && touchedHora && errors?.hora ) && errors?.hora }
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
                    ( option.selected === false || option.selected === uid )
                        &&
                    <MenuItem disabled = { ( formValues.some( values => values.hora === option.hora && option.selected === uid || option.selected !== false ) ) } onClick={ () => handleUpdateServiceCita( negocioFilt._id, option.hora ) } key={option.hora} value={option.hora}>
                        {option.hora}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            
            <Grid px={ 1 } mt={ 3 } item xs = { 12 }>

                <FormControl sx={{ width: '100%' }}>
                    <InputLabel id="demo-multiple-checkbox-label">Servicios</InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        sx={{ borderRadius: '12px', }}
                        value={servicio.map( e => e.servicio )}
                        input={<OutlinedInput label="Servicios" />}
                        renderValue={(selected) => selected.join(', ')}
                        // MenuProps={MenuProps}
                    >
                    {negocioFilt?.servicios.map((options, index) => (
                        <MenuItem key={options.servicio} onClick = { () => handleChangeAutoComplete(count, [ options ], index) }>
                            <Checkbox checked={ servicio.findIndex( e => e.servicio === options.servicio ) > -1 } />
                            <ListItemText primary={options.servicio} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                
            </Grid>

            <Grid item container display={ 'flex' } justifyContent = { 'space-between' }>
                {
                    ( count === 0 )
                        &&
                    <>
                        <FormControlLabel
                            sx={{ my: 2, px: 1 }}
                            control={<Android12Switch onChange={ ( e ) => setNinos(e.target.checked) } defaultChecked = { ( citaActiva?.ninos || ninos ) ? true : false } value={ ninos } />}
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
