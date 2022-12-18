import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#212529'
        }
    },

    components: {
        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    borderRadius: '10px'
                }
            }
        }
    }
})