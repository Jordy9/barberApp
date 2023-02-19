import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { FieldInputProps } from 'formik/dist/types';
import { FormikTouched, FormikErrors } from 'formik';

export interface CardInterface {
  condicion: Boolean
}

export interface CardInfoProps {
  title: CardInfoTitle;
  actual?: number;
  total?: number;
  backgroundImage: string
  titleService?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  image?: string;
  name?: string;
}

type CardInfoTitle = 'Citas completas' | 'Citas en espera' | 'Citas canceladas' | 'Servicio del mes'

export interface TextFieldProps {
  mb?: number;
  mt?: number;
  name: string;
  label: string;
  touched?: any
  errors?: any
  initialValue?: string;
  getFieldProps?: FieldInputProps<any>
  validations?: any;
  required: boolean;
  helperText?: string;
  type: TextFieldPropsType
  Adornment: boolean
  Icon?: TextFieldPropsAdornmentIcon
}

type TextFieldPropsAdornmentIcon = 'Eye' | 'Arroba'

type TextFieldPropsType = 'email' | 'password' | 'text' | 'number' | 'file' | 'date' | 'time' | 'datetime-local'