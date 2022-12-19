import { Avatar, CardHeader } from '@mui/material'
import { red } from '@mui/material/colors'

export const CardHeaderTemplate = () => {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      title="Shrimp and Chorizo Paella"
      subheader="☆ ☆ ☆ ☆ ☆"
    />
  )
}
