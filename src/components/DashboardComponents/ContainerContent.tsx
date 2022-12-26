import { Box } from "@mui/material"
import { ChartComponent } from "."
import { useResponsive } from '../../hooks/useResponsive';

export const ContainerContent = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Box mb={ ( respWidth < 991 ) ? 10 : 0 }>
      <ChartComponent />
    </Box>
  )
}
