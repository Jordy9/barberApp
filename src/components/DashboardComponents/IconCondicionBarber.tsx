import { ContentCut, Timer } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { isOpenDialogConfirm } from '../../store/dialogConfirm/dialogConfirmSlice';
import { useAppDispatch } from '../../store/hooks';

interface iconCondicionProps {
    Hora: number
}

export const IconCondicionBarber = ({ Hora }: iconCondicionProps ) => {

    const dispatch = useAppDispatch();

  return (
    <>
        {
            ( Hora === 1 )
                ?
            <IconButton onClick={ () => dispatch( isOpenDialogConfirm(true) ) }>
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
