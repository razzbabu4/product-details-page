import productImage from '../assets/images/nipple-set.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/SliderStyle.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const ProductSlider = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={productImage} alt="Product" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
