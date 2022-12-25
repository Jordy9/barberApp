import { Box, Grid, Paper, TextField, FormControl, InputLabel, Select, SelectChangeEvent, MenuItem, ListItemText } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from 'moment';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

export const FormContainer = () => {

    const [value, setValue] = useState<Moment | null>(
        moment('2018-01-01T00:00:00.000Z'),
    );

    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const { target: { value }} = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return (
    <Box display={ 'flex' } justifyContent = { 'center' } p = { 4 }>
        <Paper elevation={ 10 } sx = {{ borderRadius: '35px', p: 4, backgroundColor: 'inherit', width: '50%' }}>
          <Grid item container>
            <Grid xs = { 2 }>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <MobileTimePicker
                    label="For mobile"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> 
            </Grid>

            <Grid xs = { 4 }>
              <FormControl sx={{ minWidth: '100px', maxWidth: '300px' }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
                
            </Grid>
        </Grid>
        </Paper>
    </Box>
  )
}
