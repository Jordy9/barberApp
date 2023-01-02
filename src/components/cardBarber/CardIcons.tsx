import { CardActions, IconButton, IconButtonProps, Tooltip  } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LibraryAdd } from "@mui/icons-material";
import { styled  } from '@mui/material/styles';
import { useAppDispatch } from "../../store/hooks";
import { isOpenCita } from "../../store/citas/CitasSlice";
import { useState } from 'react';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ExpandProps {
  expanded: boolean;
  handleExpandClick: () => void;
}
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const CardIcons = ({ expanded, handleExpandClick }: ExpandProps) => {

  const dispatch = useAppDispatch();

  const handleShare = () => {
    navigator.share({
      title: 'Probando compartir',
      text: 'Se esta probando',
      url: 'https://cdn.pixabay.com/photo/2020/05/24/01/50/barber-shop-5212042_960_720.jpg'
    })
  }

  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <CardActions disableSpacing>

      <Tooltip title="Agregar a favoritos" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
        <IconButton onClick={ () => setIsFavorite(!isFavorite) } aria-label="add to favorites">
          <FavoriteIcon color={ ( isFavorite ) ? 'error' : 'inherit' } />
        </IconButton>
      </Tooltip>

      <Tooltip title="Compartir" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
        <IconButton onClick={ handleShare } aria-label="share">
          <ShareIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Crear cita" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
        <IconButton onClick={ () => dispatch( isOpenCita(true) ) } aria-label="library add">
          <LibraryAdd />
        </IconButton>
      </Tooltip>

      <ExpandMore
        expand={ expanded }
        onClick={ handleExpandClick }
        aria-expanded={ expanded }
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>

    </CardActions>
  )
}
