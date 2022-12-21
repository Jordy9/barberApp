import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { TextFieldProps } from '../interfaces/interfaces';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#222426',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.06),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));

export const SearchFilter = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#222426',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.06),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '300px',
    },
  }));
  
export const SearchIconWrapperFilter = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
export const StyledInputBaseFilter = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch'
      },
    },
}));

export const inputPropsRegister: TextFieldProps[] = [
  {
    mb: 1.5,
    label: "Nombre",
    Adornment: false,
    required: true ,
    type: 'text',
},
{
    mb: 1.5,
    label: "Apellido",
    Adornment: false,
    required: true ,
    type: 'text',
},
{
    mb: 1.5,
    label: "Correo electrónico",
    Adornment: true,
    required: true ,
    type: 'email',
    helperText: 'Nunca compartas tu correo',
    Icon: 'Arroba'
},
  {
    mt: 1.5,
    label: "Contraseña",
    Adornment: true,
    required: true ,
    type: 'password',
    helperText: 'Nunca compartas tu contraseña',
    Icon: "Eye"
  },
  {
    mt: 1.5,
    label: "Confirmar contraseña",
    Adornment: true,
    required: true ,
    type: 'password',
    helperText: 'Nunca compartas tu contraseña',
    Icon: "Eye"
  },
]

export const inputPropsLogin: TextFieldProps[] = [
  {
      mb: 1.5,
      label: "Correo electrónico",
      Adornment: true,
      required: true ,
      type: 'email',
      helperText: 'Nunca compartas tu correo',
      Icon: 'Arroba'
  },
  {
    mt: 1.5,
    label: "Contraseña",
    Adornment: true,
    required: true ,
    type: 'password',
    helperText: 'Nunca compartas tu contraseña',
    Icon: "Eye"
  },
]