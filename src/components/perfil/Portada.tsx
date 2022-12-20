import { Box } from "@mui/material"

export const Portada = () => {
  return (
    <Box>
      <img 
        src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=400&fit=crop&auto=format" 
        alt="" 
        style = {{ width: '100%', height: '45vh', objectFit: 'cover', borderRadius: '12px' }}
        loading="lazy"
      />
    </Box>
  )
}