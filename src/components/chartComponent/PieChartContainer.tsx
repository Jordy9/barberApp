import { Box, Paper, Stack, Typography } from "@mui/material"

import { PieChartt } from "./"

import { useResponsive } from "../../hooks/useResponsive"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const PieChartContainer = () => {

    const [ respWidth ] = useResponsive()

  return (
    <Paper elevation={ 10 } sx = {{ width: '100%', height: 'auto', borderRadius: '12px', p: 4 }}>
        <PieChartt COLORS = { COLORS } respWidth = { respWidth } />
        {
        ( respWidth <= 600 )
            &&
        <Stack gap={ 2 }>
            <Typography variant='h6' textAlign={ 'center' }>Rooms Cost</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            { 
                COLORS.map(( color, index ) => (
                <>
                    <Box sx = {{ width: 20, height: 20, backgroundColor: color }}></Box>

                    <Typography variant='body2' sx={{ opacity: 0.7 }}>
                    'Hola'
                    </Typography>
                </>
                ))
            }
            </Box>
        </Stack>
        }
    </Paper>
  )
}
