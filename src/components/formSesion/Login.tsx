import { Dispatch, forwardRef, SetStateAction, useState, useEffect } from 'react';

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField, Typography, IconButton } from '@mui/material';
import { Registro, LoginForm, FormComponent } from "./";
import { TransitionProps } from "@mui/material/transitions";
import { NavLink } from "react-router-dom";
import { ArrowBackIos } from '@mui/icons-material';

import { useFormik } from 'formik';
import { object } from 'yup'
import { inputPropsLogin, inputPropsRegister } from "../../utils/Search";
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { createUsuario, loginUsuario } from '../../store/auth/thunk';
import { UsuarioPost, UsuarioLogin } from "../../interfaces/usuarios";

interface loginProps {
    showDialog: boolean;
    setShowDialog: Dispatch<SetStateAction<boolean>>
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const Login = ({ showDialog, setShowDialog }: loginProps) => {

    const dispatch = useAppDispatch();

    const [showRegister, setShowRegister] = useState(false)

    const { usuarioActivo } = useAppSelector( state => state.auth );

    const initialValuesLogin = Object.fromEntries(inputPropsLogin.map((field)=>[field.name, field.initialValue]))

    const initialValues = Object.fromEntries(inputPropsRegister.map((field)=>[field.name, field.initialValue]))

    const SchemaObject = Object.fromEntries(inputPropsRegister.map((field) => [field.name, field.validations]))

    const userSchema = object().shape(SchemaObject)

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues: ( !showRegister ) ? initialValuesLogin : initialValues,
        enableReinitialize: true,
        onSubmit: ({ name = '', lastName = '', email = '', password = '' }) => {

            if ( !showRegister ) {

                const usuario: UsuarioLogin = { email: email!.toLowerCase(), password }
                
                dispatch( loginUsuario(usuario) )
            } else {

                const usuario: UsuarioPost = { name, lastName, email: email!.toLowerCase(), password }
                
                dispatch( createUsuario(usuario) )
            }


        },
        validationSchema: ( showRegister ) && userSchema
    })

    const handleClose = () => {
        setShowDialog(false)
    }

    const handleButtonSubmit = () => {
        document.getElementById('buttonSubmitForm')?.click()
    }

    useEffect(() => {
        if ( usuarioActivo ) {
            setShowDialog(false)
        }
    }, [usuarioActivo])
    
  return (
    <Dialog
        open={showDialog}
        fullWidth
        TransitionComponent={Transition}
        maxWidth = 'xs'
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={'paper'}
        PaperProps = {{
            style: { borderRadius: '11px' }
        }}
    >
        <DialogTitle align="center">
            <IconButton onClick={ handleClose } sx={{ position: 'absolute', left: 24, top: 12.10 }}>
                <ArrowBackIos />
            </IconButton>
            {
                ( !showRegister )
                    ?
                'Iniciar sesión'
                    :
                'Crear cuenta'
            }
        </DialogTitle>
        <DialogContent>
            <Box
                component="form"
                p={ 1 }
                onSubmit={ handleSubmit }
                noValidate
                autoComplete="off"
            >
                {
                    (!showRegister)
                        ?
                    inputPropsLogin.map(( props ) => (
                        <FormComponent
                            key={ props.name }
                            { ...props }
                            getFieldProps = { getFieldProps(props.name) }
                            touched = { touched }
                            errors = { errors }
                        />
                    ))
                        :   
                    inputPropsRegister.map(( props ) => (
                        <FormComponent
                            key={ props.name }
                            { ...props }
                            getFieldProps = { getFieldProps(props.name) }
                            touched = { touched }
                            errors = { errors }
                        />
                    ))
                        
                }

                <button id="buttonSubmitForm" hidden></button>
            </Box>

            <Grid mb={ 1.5 } textAlign={ 'center' }>
                <Typography onClick={ () => setShowRegister(!showRegister) } component={ 'span' } variant="body1" className = { 'navLink' }>
                    {
                        ( !showRegister )
                            ?
                        '¿Aún no tienes una cuenta? ¡Crea una!'
                            :
                        '¿Ya tienes una cuenta? ¡Inicia sesión!'
                    }
                    
                </Typography>
            </Grid>

            <Grid mb={ -2 } textAlign={ 'center' }>
                <NavLink to = '/RecuperarContrasena' className = { 'navLink' }>¿Olvidaste tu contraseña?</NavLink>
            </Grid>

        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
            <Button type="submit" onClick={ handleButtonSubmit } fullWidth color = { 'inherit' } variant='contained'>Continuar</Button>
        </DialogActions>
    </Dialog>
  )
}
