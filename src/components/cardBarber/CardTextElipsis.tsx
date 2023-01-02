import { CardContent, Typography } from "@mui/material"

export const CardTextElipsis = ({ expanded = false }) => {
  return (
    <CardContent sx={{ paddingTop: ( expanded ) ? 0 : 1.5, paddingBottom: ( expanded ) ? 0 : 1.5, transition: 'padding .3s ease', }}>
      <Typography sx={{
        height: ( expanded ) ? 0 : 64,
        transition: 'height .3s ease',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
      }} 
      variant="body2" color="text.secondary"
      >
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
  )
}
