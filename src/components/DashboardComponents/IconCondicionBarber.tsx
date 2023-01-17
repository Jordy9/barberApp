import { ContentCut, Timer, Cancel, CheckCircle } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

type EstadoType = 'En-espera' | 'Cancelada' | 'Finalizada' | 'Atendiendo'

interface iconCondicionProps {
    estado: EstadoType;
}

export const IconCondicionBarber = ({ estado }: iconCondicionProps ) => {
  return (
    <>
        {
            ( estado === 'Atendiendo' )
                &&
            <Tooltip title="Atendiendo" placement='left' enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                <IconButton>
                    <ContentCut />
                </IconButton>
            </Tooltip>
        }
        
        {
            ( estado === 'En-espera' )
                &&
            <Tooltip title="En espera" placement='left' enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                <IconButton color = 'warning'>
                    <Timer />
                </IconButton>
            </Tooltip>
        }

        {
            ( estado === 'Cancelada' )
                &&
            <Tooltip title="Cancelada" placement='left' enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                <IconButton color = 'error'>
                    <Cancel />
                </IconButton>
            </Tooltip>
        }

        {
            ( estado === 'Finalizada' )
                &&
            <Tooltip title="Finalizada" placement='left' enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                <IconButton color = 'success'>
                    <CheckCircle />
                </IconButton>
            </Tooltip>
        }
    </>
  )
}
