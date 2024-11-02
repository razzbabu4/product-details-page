import { FaFacebook, FaInstagram, FaPlus, FaShoppingBag, FaTwitter, FaYoutube } from 'react-icons/fa';
import productImage from '../assets/images/nipple-set.jpg'

const ProductDetailsPage = () => {
    return (
        <div className="w-full max-h-screen p-6 lg:py-14 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img src={productImage} alt="Range Camera Bag" className="w-full h-auto md:h-[450px] rounded-lg object-cover" />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 flex gap-2 md:gap-0 flex-col justify-between">
                    <h1 className="text-4xl md:text-5xl font-semibold text-orange-400">Range Camera Bag</h1>
                    <div className="flex items-center gap-2">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span className="text-gray-700">(22 user reviews)</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-semibold">$95</p>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                        <div>
                            <label className="block text-orange-400">Color</label>
                            <select className="border border-gray-300 rounded p-2 w-full">
                                <option>Ocher</option>
                                <option>Blue</option>
                                <option>Black</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-orange-400">Size</label>
                            <select className="border border-gray-300 rounded p-2 w-full">
                                <option>44 (XL)</option>
                                <option>46 (L)</option>
                                <option>48 (M)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-orange-400">Quantity</label>
                            <input type="number" defaultValue="1" className="border border-gray-300 rounded p-2 w-full" />
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s.
                    </p>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <button className="bg-orange-300 text-black px-4 py-2 rounded font-medium hover:bg-orange-400 uppercase flex items-center justify-center gap-2">
                            <FaShoppingBag /> Add to Cart</button>
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
                        <p><span className='text-orange-400 uppercase'>Category:</span> Bags</p>
                        <p><span className='text-orange-400 uppercase'>Type:</span> Leather</p>
                    </div>
                </div>
            </div>


            {/* Additional Sections */}
            <div className="mt-8">
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* Description Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Description</h2>
                        <p className="text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s.
                        </p>
                    </div>

                    {/* Shipping Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Shipping</h2>
                        <p className="text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s.
                        </p>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className='mt-8'>
                    <h2 className="text-xl font-semibold text-gray-800">Reviews</h2>
                    <div className="border p-4 rounded-lg flex items-start space-x-4">
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
                    <div className='flex justify-between items-center border p-4 bg-orange-300 rounded-md'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-600" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-600" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-600" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-600" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-600" />
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-yellow-600">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;