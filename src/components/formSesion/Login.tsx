import { Dispatch, forwardRef, SetStateAction, useState } from "react";

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField, Typography } from "@mui/material"
import { Registro, LoginForm } from "./";
import { TransitionProps } from "@mui/material/transitions";
import { NavLink } from "react-router-dom";

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

    const handleClose = () => {
        setShowDialog(false)
    }

    const [showRegister, setShowRegister] = useState(false)

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
                noValidate
                autoComplete="off"
            >
                {
                    (!showRegister)
                        ?
                    <LoginForm />
                        :
                    <Registro />
                }
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
            <Button fullWidth onClick={handleClose} color = { 'inherit' } variant='contained'>Cerrar</Button>
            <Button fullWidth onClick={handleClose} color = { 'inherit' } variant='contained'>Continuar</Button>
        </DialogActions>
    </Dialog>
  )
}
