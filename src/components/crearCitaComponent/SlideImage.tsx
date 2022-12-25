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

export const SlideImage = () => {

  return (
    <Box>
      <Swiper
        slidesPerView={ 'auto' }
        spaceBetween={30}
        centerInsufficientSlides
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiperBarber"
      >
        {
          [1, 2, 3, 4, 5].map( e => (
            <SwiperSlide key={ e } style = {{ height: 'auto', width: 'auto', borderRadius: '50%' }}>
              <ImageComponent />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Box>
  )
}
