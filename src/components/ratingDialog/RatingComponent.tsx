import { Dispatch, SetStateAction } from 'react';

import { Rating } from "@mui/material"

import { handleChangeWithoutTarget } from "../../utils/utilsDynamicForm";

interface ratingProps {
  index: number;
  ratingValues: { usuarioId: string; barberId: string; calificacion: number; }[];
  setRatingValues: Dispatch<SetStateAction<{ usuarioId: string; barberId: string; calificacion: number; }[]>>
}

export const RatingComponent = ({ index, ratingValues, setRatingValues }: ratingProps) => {
  return (
    <Rating value={ ratingValues[index].calificacion } onChange = { (_, newValue ) => handleChangeWithoutTarget(index, 'calificacion', newValue, ratingValues, setRatingValues) } defaultValue={2} size="large" />
  )
}
