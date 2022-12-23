import { Paper } from "@mui/material"
import { BarChart } from "./"

export const BarChartContainer = () => {
  return (
    <Paper elevation={ 10 } sx = {{ width: '100%', height: '100%', borderRadius: '12px' }}>
      <BarChart />
    </Paper>
  )
}
