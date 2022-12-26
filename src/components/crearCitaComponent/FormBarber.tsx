import { Autocomplete, FormControlLabel, Grid, MenuItem, TextField } from "@mui/material"
import { useResponsive } from "../../hooks/useResponsive"
import { Android12Switch, hoursSelect, top100Films } from "../../utils/Search"
import { SlideImage } from "./"

interface FormBarberProps {
    count: number
}

export const FormBarber = ({ count }: FormBarberProps) => {

    const [ respWidth ] = useResponsive()

  return (
    <>
        <SlideImage />

        <Grid item container p={ 2 }>

        <Grid px={ 1 } xs = { 6 }>
            <TextField
                id="outlined-select-currency"
                select
                label="Hora"
                defaultValue="3:00"
                helperText={ ( respWidth < 700 ) ? 'Aproximada' : "Hora aproximada a la que será atendido"}
            >
            {hoursSelect.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
            ))}
            </TextField>
        </Grid>

        <Grid px={ 1 } xs = { 6 }>
            <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Barbero"
                // helperText="Barbero que te atenderá"
            >
            {hoursSelect.map((option) => (
                <MenuItem key={option} value={option}>
                {option}
                </MenuItem>
            ))}
            </TextField>
        </Grid>
        
        <Grid px={ 1 } mt={ 3 } xs = { 12 }>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13]]}
                fullWidth
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Servicios"
                    placeholder="Favorites"
                    />
                )}
            />
        </Grid>

        {
            ( count === 0 )
                &&
            <>
                <FormControlLabel
                    sx={{ my: 2, px: 1 }}
                    control={<Android12Switch defaultChecked />}
                    label="¿LLevas niños a ser atendido?"
                />

                <Grid px={ 1 } xs = { 12 }>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Cantidad"
                        defaultValue="1"
                        helperText="Cantidad de niños que llevarás"
                    >
                    {[ 1, 2, 3, 4, 5 ].map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
            </>
        }
        </Grid>
    </>
  )
}
