// import productImage from '../assets/images/image-1.jpg'
import productImage2 from '../assets/images/image-2.jpg'
// import productImage3 from '../assets/images/image-3.jpg'

// PropTypes validation
import PropTypes from 'prop-types';

// // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/SliderStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductSliderDesktop = ({ image }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="Product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImage2} alt="Product" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

ProductSliderDesktop.propTypes = {
  image: PropTypes.string
};

export default ProductSliderDesktop;
