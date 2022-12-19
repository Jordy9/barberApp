import { Layaout } from "../layout/Layaout"
import { CardBarber } from "../cardBarber";
import { FilterOptionsBarber } from "../filterOptionsBarber/FilterOptionsBarber";
import { useResponsive } from '../../hooks/useResponsive';

export const Barberos = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Layaout>
      <>
        {
          (respWidth > 700)
            &&
          <FilterOptionsBarber />
        }
        <CardBarber />
      </>
    </Layaout>
  )
}
