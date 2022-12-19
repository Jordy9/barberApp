import { createTheme } from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#212529'
        },
        text: {
            primary: '#fff',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)'
        },
        action: {
            hover: 'rgba(255, 255, 255, 0.08)'
        }
    },

    components: {
        MuiButton: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    backgroundColor: '#222426',
                    ":hover": {
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    }
                }
            }
        },

        MuiFab: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: '#222426',
                    ":hover": {
                        backgroundColor: 'rgba(0, 0, 0)',
                    }
                }
            }
        }
    }
})