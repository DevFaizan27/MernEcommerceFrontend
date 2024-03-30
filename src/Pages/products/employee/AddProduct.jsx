import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../Redux/Slices/productslice.js';
import { addProduct } from '../../../Redux/Actions/productAction.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../../../context/themeContext.jsx';
import toast from 'react-hot-toast';


const AddProduct = () => {
  // State for storing image data
  const [imageData, setImageData] = useState(null);

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stock: '',
    discount: '',
    price: '',
    category: '',
  });

  // Destructuring form data
  const { name, description, price, category, stock, discount } = formData;

  // State for the selected image
  const [image, setImage] = useState(null);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Navigate function from react-router-dom
  const navigate = useNavigate();

  // Redux state selectors
  const { isSuccess, isError, message } = useSelector((state) => state.product);

  // Theme context
  const { isDarkMode } = useTheme();

  // useEffect to handle success, error, and reset actions
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      navigate('/employee-dashboard');
      dispatch(reset());
    }
    if (isError) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch, navigate]);

  // Function to save the uploaded image
  const saveImage = async () => {
    if (!image) {
      return toast.error('Please upload an image');
    }

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'khareedoo');
    data.append('cloud_name', 'dolajkbv5');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dolajkbv5/image/upload', data);
      const { public_id, url } = res.data;

      // Set imageData state with the public_id and url of the uploaded image
      setImageData({ public_id, url });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  console.log(imageData);


  // Function to handle changes in the form inputs
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveImage(); // Wait for image upload to finish

    // Create product data object including the image data
    // if (!imageData) {
    //   return toast.error('Image upload failed');
    // }
  
    // Create product data object including the image data
    const productData = { name, description, price, category, stock, discount, imageData };
    dispatch(addProduct(productData));
  };

  return (
    <div className={`${isDarkMode ? 'bg-slate-800 text-slate-100':'bg-slate-300'} p-8  shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder='Product Name'
            name="name"
            value={name}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full  border-slate-900 rounded focus:outline-none ${isDarkMode ? ' bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description:
          </label>
          <textarea
            id="description"
            placeholder='Product Description'
            name="description"
            value={description}
            onChange={onChange}
            required
            rows="3"
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price:
          </label>
          <input
            type="number"
            placeholder='Product Price'
            id="price"
            name="price"
            value={price}
            onChange={onChange}
            min="0"
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            <option value="home">Home</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium">
            Stock:
          </label>
          <input
            type="number"
            placeholder='Product Stock'
            id="stock"
            name="stock"
            value={stock}
            onChange={onChange}
            min="0"
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="discount" className="block text-sm font-medium">
            Discount:
          </label>
          <input
            type="number"
            placeholder='Product Discount (If any else 0)'
            id="discount"
            name="discount"
            value={discount}
            onChange={onChange}
            min="0"
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium">
            Images:
          </label>
          <input
            type="file"
            placeholder='Product Image'
            required
            name="images"
            onChange={(e) => setImage(e.target.files[0])}
            id="file-upload"
            className={`mt-1 p-2 block w-full border-slate-900  rounded  ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`py-2 px-4 rounded ${isDarkMode ? 'bg-slate-400 text-white' : 'bg-slate-700 text-white'}`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
