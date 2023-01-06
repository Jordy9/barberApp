import { useState } from 'react';

import { RemoveRedEye } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'

import { TextFieldProps } from '../../interfaces/interfaces';


export const FormComponent = ({ mb = 0, mt = 0, label, required = false, helperText, type = 'text', Adornment = false, Icon, getFieldProps, name, touched, errors }: TextFieldProps) => {

    const [showPassword, setShowPassword] = useState(type)

    const handleShowPassword = () => {
        (showPassword === 'password' ) 
            ?
        setShowPassword('text')
            :
        setShowPassword('password')
        
    }

    const validations = ( touched[name] && errors[name] )
    
  return (
    <Grid container mb = { mb } mt = { mt }>
        <TextField
            error = { !!validations }
            type = { showPassword }
            fullWidth
            required = { required }
            { ...getFieldProps }
            label = { label }
            helperText = { ( !!validations ) ? errors[name] :  helperText }
            InputProps={{
                endAdornment: ( Adornment ) && <InputAdornment position="end">
                    {
                        ( Icon === 'Eye' )
                            ?
                        <IconButton onClick={ handleShowPassword }>
                            {
                                ( showPassword === 'password' )
                                    ?
                                <RemoveRedEye />
                                    :
                                <VisibilityOffIcon />
                            }
                        </IconButton>
                            :
                        <IconButton>
                            <AlternateEmailIcon />
                        </IconButton>
                    }
                </InputAdornment>
            }}
        />
    </Grid>
  )
}
