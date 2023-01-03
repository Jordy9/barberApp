import { forwardRef, Dispatch, SetStateAction } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos, CopyAllSharp } from '@mui/icons-material';

import { toast } from 'react-hot-toast';

import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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

export const DialogShare = ({ showDialog, setShowDialog }: loginProps) => {

  const handleClose = () => {
    setShowDialog(false)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('https://www.npmjs.com/package/react-share')
    toast.success('Link copiado correctamente', {
        position: 'top-right'
    })
  }

  return (
    <Dialog
      open={ showDialog }
      fullWidth
      TransitionComponent={ Transition }
      maxWidth = 'xs'
      onClose={ handleClose }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll={ 'paper' }
      PaperProps = {{
        style: { borderRadius: '11px' }
      }}
    >
      <DialogTitle textAlign={ 'center' } sx = {{ position: 'relative' }}>
        <IconButton sx={{ position: 'absolute', left: 30, top: 12.10 }} onClick={ handleClose }>
          <ArrowBackIos />
        </IconButton>

        Compartir
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>

      <FacebookShareButton url={ 'https://www.npmjs.com/package/react-share' }>
        <Grid sx={{ mx: 'auto' }}>
            <FacebookIcon round  />
            <Typography>Facebook</Typography>
        </Grid>
      </FacebookShareButton>

      <WhatsappShareButton url={ 'https://www.npmjs.com/package/react-share' }>
        <Grid sx={{ mx: 'auto' }}>
            <WhatsappIcon round />
            <Typography>Whatsapp</Typography>
        </Grid>
      </WhatsappShareButton>

      <TwitterShareButton url={ 'https://www.npmjs.com/package/react-share' }>
        <Grid sx={{ mx: 'auto' }}>
            <TwitterIcon round />
            <Typography>Twitter</Typography>
        </Grid>
      </TwitterShareButton>

      <TelegramShareButton url={ 'https://www.npmjs.com/package/react-share' }>
        <Grid sx={{ mx: 'auto' }}>
            <TelegramIcon round />
            <Typography>Telegram</Typography>
        </Grid>
      </TelegramShareButton>

      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button endIcon = { <CopyAllSharp /> } fullWidth onClick={ handleCopyToClipboard } color = { 'inherit' } variant='contained'>Copiar link</Button>
      </DialogActions>
    </Dialog>
  )
}
