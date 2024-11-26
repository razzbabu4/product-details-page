import { FaFacebook, FaInstagram, FaPlus, FaShoppingBag, FaTwitter, FaYoutube } from 'react-icons/fa';
import ProductSlider from './ProductSlider';
import ProductSliderDesktop from './ProductSliderDesktop';
import 'animate.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetailsPage = () => {
  const [productData, setProductData] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch product details with GET method
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://ecom.coderorbit.com/public/api/product/63`,
        {
          headers: {
            Accept: "application/json",
            "App-Master-Key": import.meta.env.VITE_API_TOKEN,
          },
          params: {
            relative: "categories,createdBy,updatedBy,additional_media,additional,brand,vendor,country,district,police_station,referrals,feedbacks,bundles",
          },
        }
      );
      // console.log("Full Response:", response);
      // console.log("Response data:", response.data);
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  // Animation 
  useEffect(() => {
    // Set interval to repeat animation class every 6 seconds
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => { setIsAnimating(false) }, 1000) // Remove the animation class after the animation duration => 1s = 1000ms
    }, 6000);
    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  // set loading spinner for data fetching
  if (!productData) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-6xl animate-spin">⏳</div>
    </div>
  }

  return (
    <div className="w-full min-h-screen p-6 lg:py-14 max-w-7xl mx-auto mb-10">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="hidden md:w-1/2 md:flex">
          <ProductSliderDesktop image={productData?.gallery?.[0]} />
        </div>
        <div className="w-full md:hidden">
          <ProductSlider image={productData?.gallery?.[0]} />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex gap-2 md:gap-1 flex-col">
          <h1 className="text-4xl md:text-5xl font-semibold text-red-400">{productData.name}</h1>
          {/* Review or feedback section */}
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-400" defaultChecked />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-400" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-400" />
            </div>
            <span className="text-gray-700">(22 user reviews)</span>
          </div>
          <p className="text-2xl md:text-3xl font-semibold">${productData.regular_price}</p>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <label className="block text-red-400 font-medium">Color</label>
              <select className="border border-gray-300 rounded p-2 w-full">
                {productData.attributes.colors.split(',').map((color, index) =>
                  <option key={index}>{color}</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-red-400 font-medium">Size</label>
              <select className="border border-gray-300 rounded p-2 w-full">
                {productData.attributes.sizes.split(',').map((size, index) =>
                  <option key={index}>{size}</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-red-400 font-medium">Quantity</label>
              <input type="number" defaultValue={productData.minimum_order} className="border border-gray-300 rounded p-2 w-full" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            {productData.description.blocks[0].data.text}
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <button className={`${isAnimating ? 'animate__animated animate__tada' : ''} bg-red-400 text-white px-4 py-2 rounded font-medium hover:bg-red-500 uppercase flex items-center justify-center gap-2`}>
              <FaShoppingBag /> Add to Cart</button>
            {/* <button className={`animate__animated animate__tada bg-red-400 text-white px-4 py-2 rounded font-medium hover:bg-red-500 uppercase flex items-center justify-center gap-2`}>
              <FaShoppingBag /> Add to Cart</button> */}
            <button className="border border-gray-400 px-4 py-2 rounded font-medium hover:bg-gray-200 uppercase flex items-center justify-center gap-2">
              <FaPlus /> Add to Wishlist</button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <FaInstagram className="text-[#F56040]" />
            <FaFacebook className='text-blue-600' />
            <FaYoutube className='text-red-600' />
            <FaTwitter className='text-blue-500' />
          </div>

          {/* Category & Type */}
          <div className="text-gray-700 mt-4 flex gap-6">
            <p><span className='text-red-400 font-semibold uppercase'>Category:</span> {productData.categories[0].name}</p>
            <p><span className='text-red-400 font-semibold uppercase'>Type:</span> Leather</p>
          </div>
        </div>
      </div>


      {/* Additional Sections */}
      <div className="mt-10">
        <div className='flex flex-col md:flex-row gap-6'>
          {/* Description Section */}
          <div className='w-full md:w-1/2'>
            <h2 className="text-lg md:text-xl font-semibold text-red-400 uppercase">Description</h2>
            <p className="text-gray-600">
              {productData.description.blocks[0].data.text}
            </p>
          </div>

          {/* Shipping Section */}
          <div className='w-full md:w-1/2'>
            <h2 className="text-lg md:text-xl font-semibold text-red-400 uppercase">Shipping</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='my-8 relative'>
          <div className='flex items-center justify-between mb-2'>
            <span className="text-lg md:text-xl font-semibold text-red-400 uppercase">Reviews</span>
            <span className="text-gray-700 font-medium">(22 user reviews)</span>
          </div>
          <div className="border border-red-100 p-4 rounded-lg flex items-start space-x-4">
            {/* User Image */}
            <img src="https://via.placeholder.com/50" alt="User" className="rounded-full" />

            {/* Review Content */}
            <div className="w-full">
              {/* User Name */}
              <p className="font-semibold text-gray-800">User Name</p>
              {/* Review Input Field */}
              <input
                type="text"
                placeholder="Write your review here..."
                className="w-full mt-2 p-3 rounded focus:outline-none"
              />
            </div>
          </div>
          <div className='flex justify-between items-center border p-4 bg-red-400 rounded-md w-full absolute transform -translate-y-3'>
            <div className="rating rating-sm">
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-600" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-red-600" />
            </div>
            <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-red-500 hover:text-white">Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetailsPage;