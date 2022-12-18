// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useResponsive } from '../../hooks/useResponsive'

export const Banner = () => {

    const images = [
        'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059__340.jpg', 
        'https://cdn.pixabay.com/photo/2021/11/15/11/00/barber-shop-6797761__340.jpg',
        'https://cdn.pixabay.com/photo/2021/11/15/12/06/barber-shop-6797941__340.jpg',
        'https://cdn.pixabay.com/photo/2018/02/22/17/08/barber-3173419__340.jpg',
        'https://cdn.pixabay.com/photo/2018/10/22/13/43/scissors-3765408__340.jpg'
    ]

    const [ respWidth ] = useResponsive()
    
  return (
    <>
        <Swiper
            pagination={{
                type: "progressbar",
            }}
            navigation={ true }
            modules={[ Pagination, Navigation ]}
            className="mySwiper"
            style={{
                height: ( respWidth > 700 ) ? '91vh' : '83.3vh'
            }}
        >
            {
                images.map(img => (
                    <SwiperSlide>
                        <img key={ img } src={ img } alt="Imagen de barbería" />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    </>
  )
}
