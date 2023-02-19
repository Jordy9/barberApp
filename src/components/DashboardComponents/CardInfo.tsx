import { Box, Card, CardContent, CircularProgress, Grid, Typography, IconButton } from '@mui/material';

import { CardInfoProps } from '../../interfaces/interfaces';
import { useResponsive } from '../../hooks/useResponsive';
import Avatar from '@mui/material/Avatar';
import { ContentCut } from '@mui/icons-material';

export const CardInfo = ({ title, actual, total, backgroundImage, Icon, image, name, titleService }: CardInfoProps) => {

  const props = { value: actual }

  const [ respWidth ] = useResponsive()

  return (
    <Card sx={{ borderRadius: '12px', height: '150px', backgroundImage: `url('${backgroundImage}')` }}>
      <CardContent sx = {{ height: '100%' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { title }
        </Typography>

        {
          ( !titleService )
            ?
          <Grid display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' }>
            <Typography variant="h5" component="div">
              { actual } / { total }
            </Typography>

              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <CircularProgress variant="determinate" { ...props } />
                  <Box
                      sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      }}
                  >
                      <Typography
                      variant="caption"
                      component="div"
                      color="text.secondary"
                      >{ props.value }</Typography>
                  </Box>
              </Box>
            </Grid>
            :
          <Grid display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' }>
            <Typography variant="h5" component="div">
              { titleService }
            </Typography>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <IconButton><ContentCut /></IconButton>
              </Box>
            </Grid>
        }

        {
          ( respWidth > 360 && image && name )
            &&
          ( respWidth < 600 && image && name || respWidth > 748 && image && name )
            &&
          <Grid mt={ ( respWidth >= 399 ) ? 2 : 0 } display = { 'flex' } justifyContent = { 'space-between' }>
            <Grid display = { 'flex' } alignItems = { 'center' }>
              <Avatar
                alt="Remy Sharp"
                src={ image }
                sx={{ width: 32, height: 32 }}
              />
              <Typography ml = { 1 }>{ name }</Typography>
            </Grid>
            <IconButton>
              <Icon fontSize='large' />
            </IconButton>
          </Grid>
        }

      </CardContent>
    </Card>
  )
}
