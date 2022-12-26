import { ContentCut, Timer } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface iconCondicionProps {
    Hora: number
}

export const IconCondicionBarber = ({ Hora }: iconCondicionProps ) => {
  return (
    <>
        {
            ( Hora === 1 )
                ?
            <IconButton>
                <ContentCut />
            </IconButton>
                :
            <IconButton color = 'warning'>
                <Timer />
            </IconButton>
        }
    </>
  )
}
