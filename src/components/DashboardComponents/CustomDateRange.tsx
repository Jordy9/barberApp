import * as React from 'react';
import moment, { Moment } from 'moment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';

interface CustomPickerDayProps extends PickersDayProps<Moment> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  isWeek: number
//   endWeek: boolean
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme, dayIsBetween, isWeek, isFirstDay, isLastDay }) => ({
    backgroundColor: '#212529',
  ...(dayIsBetween && {
    borderRadius: '50%',
    backgroundColor: 'royalblue',
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export const CustomDateRange = () => {
  const [value, setValue] = React.useState<Moment | null>(moment());

  const [value2, setValue2] = React.useState<Moment | null>(moment());

  const renderWeekPickerDay = (
    date: Moment,
    selectedDates: Array<Moment | null>,
    pickersDayProps: PickersDayProps<Moment>,
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value.startOf('day');
    const end = value2!.endOf('day');

    const isStartEndWeek = date.isoWeekday()
    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (
      <CustomPickersDay
        {...pickersDayProps}
        // disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
        isWeek = { isStartEndWeek }
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={ AdapterMoment }>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}