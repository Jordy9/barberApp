import { TextField } from '@mui/material';

export const TextAreaAnuncio = () => {
  return (
    <TextField label = { 'Descripción' } variant="outlined" sx={{ width: '100%' }} multiline rows={ 5 } />
  )
}
