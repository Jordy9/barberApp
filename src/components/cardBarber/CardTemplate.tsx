import { useState } from "react";

import { Card, CardActionArea } from "@mui/material"
import { CardCollapse, CardHeaderTemplate, CardIcons, CardMediaTemplate, CardTextElipsis } from "./"
import { useNavigate } from "react-router-dom";

export const CardTemplate = () => {

  const [expanded, setExpanded] = useState(false);

  const [isTransitionEnd, setIsTransitionEnd] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setIsTransitionEnd(true)
  };

  const transitionEnd = () => {
    setIsTransitionEnd(false)
  }

  const navigate = useNavigate()

  return (
    <Card title=" Ir al perfil " sx={{ height: ( isTransitionEnd ) ? 'auto' : '544.9px', width: '100%', borderRadius: '12px' }}>
      
      <CardActionArea onClick={ () => navigate('/Perfil/name/:id') }>

        <CardMediaTemplate />

        <CardHeaderTemplate />
        
        <CardTextElipsis expanded = { expanded } />

      </CardActionArea>
      
      <CardIcons expanded = { expanded } handleExpandClick = { handleExpandClick } />

      <CardCollapse expanded = { expanded } transitionEnd = { transitionEnd } />

    </Card>
  )
}
