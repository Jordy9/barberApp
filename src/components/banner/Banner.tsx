// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useResponsive } from '../../hooks/useResponsive'
import { Box } from '@mui/material';

export const Banner = () => {

    const images = [
        'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg', 
        'https://cdn.pixabay.com/photo/2021/11/15/11/00/barber-shop-6797761_960_720.jpg',
        'https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765408_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/05/24/01/51/barber-5212044_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/11/23/13/47/barber-6818719_960_720.jpg'
    ]

    const [ respWidth ] = useResponsive()
    
  return (
    <Box sx={{ height: ( respWidth > 991 ) ? '91vh' : '86.3vh' }}>
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={ true }
            modules={[ Pagination, Navigation ]}
            className="mySwiper"
            style={{
                height: ( respWidth < 335 ) ? '100vh' : '100%'
            }}
        >
            {
                images.map(img => (
                    <SwiperSlide key={ img }>
                        <img key={ img } src={ img } alt="Imagen de barbería" />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </Box>
  )
}
