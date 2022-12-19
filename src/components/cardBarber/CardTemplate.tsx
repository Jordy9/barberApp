import { useState } from "react";

import { Card, CardActions, CardContent, Collapse, IconButton, Typography } from "@mui/material"
import { CardCollapse, CardHeaderTemplate, CardIcons, CardMediaTemplate, CardTextElipsis } from "./"

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

  return (
    <Card sx={{ height: ( isTransitionEnd ) ? 'auto' : '550px', width: '100%', borderRadius: '12px' }}>
      
      <CardMediaTemplate />
      
      <CardHeaderTemplate />

      <CardTextElipsis />

      <CardIcons expanded = { expanded } handleExpandClick = { handleExpandClick } />

      <CardCollapse expanded = { expanded } transitionEnd = { transitionEnd } />

    </Card>
  )
}
