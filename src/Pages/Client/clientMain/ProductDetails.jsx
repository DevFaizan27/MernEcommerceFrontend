import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductBySlugAsync } from '../../../Redux/Actions/productAction.js';
import toast from 'react-hot-toast';
import Spinner from '../../../components/Spinner.jsx';

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate()

  //getting product data and other states from store
  const { productDetails, productVariants, isLoading, isError, isSuccess, message } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductBySlugAsync(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    if (isSuccess && productVariants && productDetails && productDetails.images.length > 0) {
      setActiveImage(productDetails.images[0].url);
      setSelectedColor(productDetails.color);
      setSelectedSize(productDetails.size);
    }
  }, [isSuccess, productDetails, productVariants]);


  //function to change color
  const handleColorChange = (color) => {
    // Check if the selected size is available for the newly selected color
    const selectedSizeAvailable = productVariants[color]?.[selectedSize]?.stock > 0;

    if (selectedSizeAvailable) {
      setSelectedColor(color); // Update the selected color state
      navigate(`/productDetail/${productDetails.name.replace(/\s+/g, '-')}-${color}-${selectedSize}`);
    } else {
      // Find the first available size for the newly selected color
      const sizes = ['s', 'm', 'l', 'xl', 'xxl']; // List of size keys in ascending order of priority
      for (const size of sizes) {
        if (productVariants[color]?.[size]?.stock > 0) {
          setSelectedSize(size); // Update the selected size state
          setSelectedColor(color); // Update the selected color state
          navigate(`/productDetail/${productDetails.name.replace(/\s+/g, '-')}-${color}-${size}`);
          break; // Exit the loop after finding the first available size
        }
      }
    }
  };


  //funtion to change size
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    navigate(`/productDetail/${productDetails.name.replace(/\s+/g, '-')}-${selectedColor}-${size}`);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return toast.error(message);
  }

  
  //function to get the image of the color weather the size is present or not
  const getDefaultImage = (colorVariant) => {
    const sizes = ['s', 'm', 'l', 'xl', 'xxl']; // List of size keys in ascending order of priority
    for (const size of sizes) {
      if (colorVariant[size] && colorVariant[size].image && colorVariant[size].image.length > 0) {
        return colorVariant[size].image[0].url; // Return the URL of the first image found in sizes
      }
    }
    return ''; // Return empty string if no image is found
  };


  return (
    <section className="text-gray-700 body-font overflow-hidden ">
      <div className="container mx-auto  flex p-8 flex-wrap  ">
        <div className="w-full  rounded-lg overflow-hidden shadow-lg">
          <div className="lg:flex lg:justify-between">

            {/*=========================================================================== 
          ---------------------------Product Images container-------------------------
          =========================================================================== */}
            <div className="lg:w-1/2">
              <div className="flex flex-row lg:h-full">
                <div className="flex flex-col p-4 items-center justify-center  rounded-b-lg lg:rounded-b-none lg:rounded-l-lg">
                  {productDetails?.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={`Product Image ${index + 1}`}
                      className="w-20 cursor-pointer mt-2"
                      onClick={() => setActiveImage(image.url)}
                    />
                  ))}
                </div>
                <img
                  src={activeImage}
                  alt="Active Product Image"
                  className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg"
                />
              </div>
            </div>


            {/*=========================================================================== 
          ---------------------------Product info container-------------------------------
          =========================================================================== */}
            <div className="lg:w-1/2 lg:pl-8">
              <div className="p-4 lg:p-8">
                <h2 className="text-sm text-gray-500 tracking-widest mb-2">{productDetails?.brand}</h2>
                <h1 className="text-3xl text-gray-900 font-medium mb-4">{productDetails?.name}</h1>

                {/* size */}
                <div className="flex items-center mb-4">
                  {selectedSize == '' ? <></> : <><span className='mr-3'>Size:</span>
                    <div className="flex space-x-2">
                      {['s', 'm', 'l', 'xl', 'xxl'].map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeChange(size)}
                          className={`w-10 h-10 rounded-full border-2 border-gray-300 focus:outline-none
                          ${size === selectedSize ? 'bg-gray-400 border-gray-500' : ''}
                         `}
                          hidden={!productVariants[selectedColor]?.[size]?.stock}
                        >
                          {size}
                        </button>
                      ))}
                    </div></>}
                </div>

                {/* colors variants */}

                <div className="flex items-center mb-4">
                  <span className="mr-3">Color:</span>
                  <div className="flex space-x-4">
                    {productVariants&&Object.keys(productVariants).map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorChange(color)}
                        className={`w-20 h-24 rounded-md  border-2 focus:outline-none ${color === selectedColor ? 'border-red-500' : ''
                          }`}
                        style={{
                          backgroundImage: `url(${getDefaultImage(productVariants[color]) || ''})`, // Get default image for the color
                          backgroundSize: 'cover',
                        }}
                      />
                    ))}
                  </div>
                </div>

                <p className="leading-relaxed mb-4">
                  {productDetails?.description}
                </p>
                <p className="leading-relaxed mb-4">
                  Stock:{productDetails?.stock}
                </p>
                <div className="flex items-center pb-5 border-b border-gray-200 mb-5">
                  {/* Add the rest of the product details */}
                </div>
              </div>
              <div className=" flex  justify-center">
                <div className="flex space-x-4   items-center">
                  <div className="flex items-center">
                    {/* Original Price with cut line */}
                    <span className="text-xl text-gray-500 line-through mr-2">
                      ₹{productDetails?.originalPrice}
                    </span>
                    {/* Discounted Price */}
                    <span className="text-2xl text-gray-900 font-medium">
                      ₹{productDetails?.discountedPrice}
                    </span>
                  </div>

                  <button className="flex ml-auto items-center text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                    Add to Cart
                  </button>
                  <button className="w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 rounded-full">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>







              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
