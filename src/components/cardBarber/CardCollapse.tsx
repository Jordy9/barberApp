import { CardContent, Collapse, Typography } from '@mui/material'

interface collapseProps {
  expanded: boolean;
  transitionEnd: () => void;
}

export const CardCollapse = ({ expanded, transitionEnd }: collapseProps ) => {
  return (
    <Collapse in={ expanded } timeout="auto" unmountOnExit onTransitionEnd={ () => ( expanded ) && transitionEnd }>
      <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
      </Typography>
      </CardContent>
    </Collapse>
  )
}
