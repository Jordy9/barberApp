import { Dispatch, SetStateAction, useEffect } from 'react';

import { Button, FormControlLabel, Grid, IconButton, MenuItem, TextField, FormControl, InputLabel, Select, ListItemText } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { Android12Switch } from "../../utils/Search"
import { SlideImage } from "./"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createServiceCitaForm, updateServiceCita } from '../../store/socket/thunk';
import Typography from '@mui/material/Typography';
import { FormikTouched } from 'formik';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import { citaHoraType, EstadoType } from '../../interfaces/citasInterface';
import { onGetCitaActiva } from '../../store/citas/CitasSlice';
import { motion, useIsPresent } from 'framer-motion';

type service = {
    servicio: string;
    tiempo: string;
    minHor: string;
  }

interface formValuesProps {
    hora: citaHoraType;
    barberId: string;
    servicio: service[]
    estado: EstadoType
}

interface FormBarberProps {
    count: number;
    setCont: Dispatch<SetStateAction<number>>;
    formCount: number
    hora: citaHoraType;
    barberId: string;
    servicio: service[];
    ninos: boolean;
    setNinos: Dispatch<SetStateAction<boolean>>;
    addNino: () => void;
    deleteNino: (i: number) => void;
    handleChange: (i: number, e: citaHoraType) => void
    handleChangeAutoComplete: (i: number, e: service[], index: number) => void
    handleChangeBarber: (i: number, e: string) => void;
    setFormValues: Dispatch<SetStateAction<formValuesProps[]>>
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
    touchedServicio,
    errors,
    formValues,
    setFormValues
}: FormBarberProps) => {

    const dispatch = useAppDispatch();

    const { negocio } = useAppSelector( state => state.ng );

    const { citaActiva, cita } = useAppSelector( state => state.ct );

    const { usuarioActivo, usuarios } = useAppSelector( state => state.auth );

    const negocioFilt = negocio.find( neg => neg.barberId === barberId )

    const handleUpdateServiceCita = ( id: string, hora: string, fecha: number ) => {
        dispatch( createServiceCitaForm({ barberId: id, hora, usuarioId: ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count, estado: ( citaActiva ) ? 'Update' : 'Create', citaActId: citaActiva?._id || null, fecha: fecha }, ( citaActiva ) ? citaActiva._id : null, barberId) )
        // dispatch( updateServiceCita( id, hora, ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count, ( citaActiva ) ? citaActiva._id : null ) )
        handleChange(count, { hora, fecha })
    }

    const uid = ( count === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + count

    const validState = formValues[count].estado !== 'En-espera'

    const validCheckAndButton = formValues.some( e => e.estado === 'En-espera' || e.estado === 'Atendiendo' )

    const serviceMin = negocioFilt?.servicios.reduce(function(prev, curr) {
        return prev.tiempo < curr.tiempo ? prev : curr;
    });

    useEffect(() => {

        const [ citaTo ] = cita.filter( ct => ct.cita.some( e => e.estado !== 'Cancelada' && e.estado !== 'Finalizada' ) )

        if ( citaTo ) {
            dispatch( onGetCitaActiva(citaTo) )
        }
        
    }, [])

    const isPresent = useIsPresent();
    
    const [ horaAhora ] = negocioFilt?.horarioDia?.filter( e => e.selected === uid && e.hora ) || hora.hora
    
  return (
    <>
        {
            ( !barberId )
                &&
            <Typography my={ 2 } variant='h5' textAlign={ 'center' }>Seleccione su barbero</Typography>
        }

        <SlideImage barbero = { barberId } handleChangeBarber = { handleChangeBarber } count = { count } />

        <Grid item container p={ 2 }>

            <Grid px={ 1 } item xs = { ( !barberId ) ? 12 : 6 }>
                {
                    ( validState )
                        ?
                    <TextField
                        value={ barberId }
                        fullWidth
                        inputProps={{
                            readOnly: true
                        }}
                        label="Barbero"
                    />
                        :
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
                }
            </Grid>

            {
                ( barberId )
                    &&
                <>

                    <Grid px={ 1 } item xs = { 6 }>
                        <motion.div
                            initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                            animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                            exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
                            style={{ originX: isPresent ? 0 : 2 }}
                        >
                            {
                                ( validState )
                                    ?
                                <TextField
                                    value={ hora.hora }
                                    fullWidth
                                    inputProps={{
                                        readOnly: true
                                    }}
                                    label="Hora"
                                />
                                    :
                                <TextField
                                    error={ ( barberId && touchedHora && errors?.hora?.hora ) }
                                    helperText = { ( barberId && touchedHora && errors?.hora?.hora ) && errors?.hora?.hora }
                                    name='hora'
                                    value={ hora.hora }
                                    // onChange = { ( e ) => handleChange(count, { e, fecha }) }
                                    fullWidth
                                    id="outlined-select-currency"
                                    select
                                    label="Hora"
                                    // helperText="Barbero que te atenderá"
                                >
                                {negocioFilt?.horarioDia?.map((option) => (
                                    ( option.selected === false || option.selected === uid )
                                        &&
                                    <MenuItem disabled = { ( formValues.some( values => values.hora.hora === option.hora && option.selected === uid || option.selected !== false ) ) } onClick={ () => handleUpdateServiceCita( negocioFilt._id, option.hora, option.fecha ) } key={option.hora} value={option.hora}>
                                        {option.hora}
                                    </MenuItem>
                                ))}
                                </TextField>
                            }
                        </motion.div>
                    </Grid>

                    <Grid px={ 1 } mt={ 3 } item xs = { 12 }>
                        <motion.div
                            initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                            animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                            exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
                            style={{ originX: isPresent ? 0 : 2 }}
                        >
                            {
                                ( validState )
                                    ?
                                <TextField
                                    value={ servicio.map( ( e, index ) => ( servicio.length > 1 ) ? ( ( index ) ? ' ' : '' ) + e.servicio : e.servicio ) }
                                    fullWidth
                                    inputProps={{
                                        readOnly: true
                                    }}
                                    label="Servicios"
                                />
                                    :
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Servicios</InputLabel>
                                    <Select
                                        error={ ( barberId && touchedServicio && errors?.servicio ) }
                                        // helperText = { ( barberId && touchedHora && errors?.hora?.hora ) && errors?.hora?.hora }
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
                                        ( hora.hora.length > 8 )
                                            ?
                                        ( index === 0 )
                                            &&
                                        <MenuItem key={options.servicio} onClick = { () => handleChangeAutoComplete(count, [ serviceMin || options ], index) }>
                                            <Checkbox checked={ servicio.findIndex( e => e.servicio === serviceMin?.servicio ) > -1 } />
                                            <ListItemText primary={serviceMin?.servicio} />
                                        </MenuItem>
                                            :
                                        <MenuItem key={options.servicio} onClick = { () => handleChangeAutoComplete(count, [ options ], index) }>
                                            <Checkbox checked={ servicio.findIndex( e => e.servicio === options.servicio ) > -1 } />
                                            <ListItemText primary={options.servicio} />
                                        </MenuItem>
                                    ))}
                                    </Select>

                                    {
                                        ( barberId && touchedServicio && errors?.servicio )
                                            &&
                                        <FormHelperText sx={{ color: '#f44336' }}>{ errors?.servicio }</FormHelperText>
                                    }

                                </FormControl>
                            }
                        </motion.div>
                    </Grid>

                </>
            }

            <Grid item container display={ 'flex' } justifyContent = { 'space-between' }>
                {
                    ( count === 0 )
                        &&
                    <>
                        {
                            ( !validCheckAndButton )
                                ?
                            <FormControlLabel
                                sx={{ my: 2, px: 1 }}
                                control={<Android12Switch disabled checked = { ( citaActiva?.ninos || ninos ) ? true : false } />}
                                label={ ( citaActiva?.ninos || ninos ) ? 'Llevaste niños a ser atendidos' : "No llevaste niños a ser atendidos?"}
                            />
                                :
                            ( cita.filter( ct => ct.cita.some( e => e.estado !== 'Cancelada' && e.estado !== 'Finalizada' ) ).length > 0 )
                                ?
                            <FormControlLabel
                                sx={{ my: 2, px: 1 }}
                                control={<Android12Switch onChange={ ( e ) => setNinos(e.target.checked) } checked = { true } value={ ninos } />}
                                label="¿LLevas niños a ser atendidos?"
                            />
                                :
                            <FormControlLabel
                                sx={{ my: 2, px: 1 }}
                                control={<Android12Switch onChange={ ( e ) => setNinos(e.target.checked) } checked = { ( citaActiva?.ninos || ninos ) ? true : false } value={ ninos } />}
                                label="¿LLevas niños a ser atendidos?"
                            />
                        }

                    </>
                }

                {
                    ( ninos && count > 0 && !validState )
                        &&
                    <Grid mt={ ( count > 0 ) ? 2 : 0 } display={ 'flex' } alignItems = { 'center' } >
                        <Button onClick={ () => deleteNino(count) } variant="contained" color="inherit">Quitar niño</Button>
                    </Grid>
                }

                {
                    ( ninos && formCount === count + 1 && validCheckAndButton )
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
