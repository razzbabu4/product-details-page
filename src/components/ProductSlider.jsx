import productImage from '../assets/images/image-1.jpg'
// import productImage2 from '../assets/images/image-2.jpg'
// import productImage3 from '../assets/images/image-3.jpg'

// PropTypes validation
import PropTypes from 'prop-types';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import '../components/SliderStyle.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const ProductSlider = ({ image }) => {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="Product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image || productImage} alt="Product" />
        </SwiperSlide>

      </Swiper>
    </>
  );
};

ProductSlider.propTypes = {
  image: PropTypes.string
};

export default ProductSlider;