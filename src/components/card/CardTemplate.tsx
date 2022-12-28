import { Card } from "@mui/material"
import { CardHeaderTemplate, CardHeaderTemplateUser, CardMediaTemplate } from "./"

export const CardTemplate = ({ isUser = false }) => {
  return (
    <Card sx={{ height: '400px', width: '100%', borderRadius: '12px' }}>
      
      <CardMediaTemplate />

      {
        ( !isUser )
          ?
        <CardHeaderTemplate />
          :
        <CardHeaderTemplateUser />
      }
      
    </Card>
  )
}
