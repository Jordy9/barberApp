import { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextField from '@mui/material/TextField';

import { Dispatch, SetStateAction } from 'react';

type label = 'Desde' | 'Hasta'

interface mobileClockProps {
    value: Moment | null;
    setValue: Dispatch<SetStateAction<Moment>>;
    minTime: Moment | null;
    error: boolean;
    label?: label;
}

export const MobileClock = ({ value, setValue, minTime, error, label = 'Desde' }: mobileClockProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileTimePicker
            label={ label }
            minTime={ minTime }
            value={ value }
            ampmInClock
            onChange={(newValue) => {
                setValue(newValue!)
            }}
            renderInput={(params) => 
                <TextField
                    error = { error }
                    name='hora'
                    defaultValue={ minTime }
                    { ...params } 
                    helperText={ ( error ) && "Verifique que no haya seleccionado una hora menor a la actual" }
                />
            }
        />
    </LocalizationProvider>
  )
}
