import { Layaout } from "../layout/Layaout"
import { CardBarber } from "../cardBarber";
import { FilterOptionsBarber } from "../filterOptionsBarber/FilterOptionsBarber";
import { useResponsive } from '../../hooks/useResponsive';
import { ButtonFilter } from "../filterOptionsBarber/ButtonFilter";

export const Barberos = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Layaout>
      <>
        {
          (respWidth > 991)
            ?
          <FilterOptionsBarber />
            :
          <ButtonFilter />
        }
        <CardBarber />
      </>
    </Layaout>
  )
}
