import { Card } from "@mui/material"
import { CardHeaderTemplate, CardMediaTemplate } from "./"

export const CardTemplate = () => {
  return (
    <Card sx={{ height: '400px', width: '100%', borderRadius: '12px' }}>
      
      <CardMediaTemplate />
      
      <CardHeaderTemplate />

    </Card>
  )
}
