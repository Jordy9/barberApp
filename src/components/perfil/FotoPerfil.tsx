import { Avatar, Grid } from "@mui/material"

export const FotoPerfil = () => {
  return (
    <Grid container display={ 'flex' } alignItems = { 'center' } justifyContent = { 'center' } sx = {{ width: '100%' }}>
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 'auto', height: 'auto' }}
      />
    </Grid>
  )
}
