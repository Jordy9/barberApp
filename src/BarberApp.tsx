import { darkTheme } from "./theme"
import { ThemeProvider, CssBaseline } from '@mui/material'
import { AppRouter } from "./router/AppRouter"

export const BarberApp = () => {
  return (
    <ThemeProvider theme={ darkTheme }>
      
      <CssBaseline />
      
      <AppRouter />

    </ThemeProvider>
  )
}
