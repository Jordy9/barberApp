export interface RespWidthProps {
  respWidth: number
}

export interface CardInterface {
  condicion: Boolean
}

export interface TextFieldProps {
  mb?: number;
  mt?: number;
  label: string;
  required: boolean;
  helperText?: string;
  type: TextFieldPropsType
  Adornment: boolean
  Icon?: TextFieldPropsAdornmentIcon
}

type TextFieldPropsAdornmentIcon = 'Eye' | 'Arroba'

type TextFieldPropsType = 'email' | 'password' | 'text' | 'number' | 'file' | 'date' | 'time' | 'datetime-local'