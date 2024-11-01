import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
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
                <div className="w-full md:w-1/2 flex gap-2 md:gap-0 flex-col justify-between">
                    <h1 className="text-4xl md:text-5xl font-semibold text-orange-400">Range Camera Bag</h1>
                    <div className="flex items-center gap-2">
                        <span>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </span>
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
                        <button className="bg-orange-400 text-black px-4 py-2 rounded font-semibold hover:bg-orange-500 uppercase">Add to Cart</button>
                        <button className="border border-gray-400 px-4 py-2 rounded font-semibold hover:bg-gray-200 uppercase">Add to Wishlist</button>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-4 text-2xl">
                        <FaInstagram className="text-[#F56040]"/>
                        <FaFacebook className='text-blue-600' />
                        <FaYoutube 	className='text-red-600'/>
                        <FaTwitter className='text-blue-500'/>
                    </div>

                    {/* Category & Type */}
                    <div className="text-gray-700 mt-4 flex gap-6">
                        <p><span className='text-orange-400 uppercase'>Category:</span> Bags</p>
                        <p><span className='text-orange-400 uppercase'>Type:</span> Leather</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;