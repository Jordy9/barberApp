import { ContentCut, Timer } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type EstadoType = 'En-espera' | 'Cancelada' | 'Finalizada' | 'Recortando'

interface iconCondicionProps {
    estado: EstadoType;
}

export const IconCondicionBarber = ({ estado }: iconCondicionProps ) => {
  return (
    <>
        {
            ( estado === 'Recortando' )
                &&
            <IconButton>
                <ContentCut />
            </IconButton>
        }
        
        {
            ( estado === 'En-espera' )
                &&
            <IconButton color = 'warning'>
                <Timer />
            </IconButton>
        }
    </>
  )
}
