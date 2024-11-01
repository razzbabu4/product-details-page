// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import productImage from '../assets/images/nipple-set.jpg'

const ProductDetailsPage = () => {
    return (
        <div className="w-full min-h-screen p-6 lg:p-20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img src={productImage} alt="Range Camera Bag" className="w-full h-auto md:h-[500px] rounded-lg object-cover" />
                </div>

                {/* Product Info */}
                
            </div>
            
        </div>
    );
};

export default ProductDetailsPage;