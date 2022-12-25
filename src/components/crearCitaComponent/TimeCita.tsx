import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import TextField from '@mui/material/TextField';
import moment, { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from 'react';

export const TimeCita = () => {

  const [value, setValue] = useState<Moment | null>(moment('2022-04-07'));

  return (
    <LocalizationProvider dateAdapter={ AdapterMoment }>
      <MobileTimePicker
        label="Hora"
        ampmInClock
        showToolbar
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
