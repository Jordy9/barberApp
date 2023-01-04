import moment, { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export const MobileClock = () => {

    const [first, setfirst] = useState<Moment | null>(moment())

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
            label="Desde"
            // minTime={ minTimeNow2 }
            // value={ ( count > 0 ) ? minTimeNow2 : hora }
            value={ first }
            ampmInClock
            onChange={(newValue) => {
                setfirst(newValue)
                // handleChangeHora(count, newValue)
            }}
            renderInput={(params) => 
                <TextField 
                    name='hora' 
                    {...params} 
                    helperText={ "Hora aproximada a la que será atendido" }
                />
            }
        />
    </LocalizationProvider>
  )
}
