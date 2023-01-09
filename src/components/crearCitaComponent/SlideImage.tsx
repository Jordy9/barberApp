// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode } from "swiper";
import { ImageComponent } from "./ImageComponent";
import { Box } from '@mui/material';
import { useAppSelector } from "../../store/hooks";

interface Props {
  barbero: string;
  handleChangeBarber: (i: number, e: string) => void;
  count: number;
}

export const SlideImage = ({ barbero, handleChangeBarber, count }: Props) => {

  const { usuarios } = useAppSelector( state => state.auth );

  return (
    <Box>
      <Swiper
        slidesPerView={ 'auto' }
        spaceBetween={30}
        centerInsufficientSlides
        freeMode={ true }
        modules={ [ FreeMode ] }
        className="mySwiperBarber"
      >
        {
          usuarios.filter( usuario => ( barbero === '' ) ? usuario : ( usuario._id === barbero ) ).map( e => (
            <SwiperSlide onClick={ () => handleChangeBarber(count, e._id) } key={ e._id } style = {{ display: 'block', height: 'auto', width: 'auto', borderRadius: '50%', backgroundColor: 'transparent', cursor: 'pointer' }}>
              <ImageComponent />
              { e.name }
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}
