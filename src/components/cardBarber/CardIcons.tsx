import { CardActions, IconButton, IconButtonProps } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LibraryAdd } from "@mui/icons-material";
import { styled  } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ExpandProps {
  expanded: boolean,
  handleExpandClick: () => void
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
  return (
    <CardActions disableSpacing>

        <IconButton title="Agregar a favoritos" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton title="Compartir" aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton title="Crear cita" aria-label="library add">
          <LibraryAdd />
        </IconButton>

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
