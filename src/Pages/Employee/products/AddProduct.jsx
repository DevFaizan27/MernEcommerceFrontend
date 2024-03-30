import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../Redux/Slices/productslice.js';
import { addProduct } from '../../../Redux/Actions/productAction.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTheme } from '../../../context/themeContext.jsx';
import toast from 'react-hot-toast';


const AddProduct = () => {

  const[categories,setCategories]=useState([]);


  //fetching the categories
  useEffect(() => {
    axios.get('http://localhost:5555/api/categories/get-all-categories')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);





  // State for form data
  const [formData, setFormData] = useState({
    name:'', 
    description:'',
    originalPrice:'',
    season:'',
    targetUser:'',
    brand:'',
    category:'',
    subCategory:'',
    color:'',
    size:'',
    stock:'',
    discountedPrice:''
  });

  // Destructuring form data
  const {name, description, originalPrice,season,targetUser, brand,category,subCategory,color, size, stock, discountedPrice} = formData;



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
  
    // Create product data object including the image data
    const productData = { name, description, originalPrice,season,targetUser, brand,category,subCategory,color, size, stock, discountedPrice };
    dispatch(addProduct(productData));
  };

  return (
    <div className={`${isDarkMode ? 'bg-slate-800 text-slate-100':'bg-slate-300'} p-8  shadow-lg`}>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="w-full">

        {/* ---input for product name--- */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
             Name: <span className=' font-extrabold text-base text-red-600'>*</span>
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


       {/* ---input for product description--- */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description:  <span className=' font-extrabold text-base text-red-600'>*</span>
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

        {/* ---input for product original price--- */}
        <div className="mb-4">
          <label htmlFor="originalPrice" className="block text-sm font-medium">
            Original Price:  <span className=' font-extrabold text-base text-red-600'>*</span>
          </label>
          <input
            type="Number"
            id="originalPrice"
            placeholder='Product Original Price'
            name="originalPrice"
            value={originalPrice}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full  border-slate-900 rounded focus:outline-none ${isDarkMode ? ' bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>


       {/* ---input for product season--- */}
       <div className="mb-4">
              <label htmlFor="season" className="block text-sm font-medium">
                Season:
              </label>
              <select
                id="season"
                name="season"
                value={season}
                onChange={onChange}
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
            required
              >
                <option value="">Select Season</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                {/* Add more seasons as needed */}
              </select>
            </div>


       {/* ---input for product target user--- */}
        <div className="mb-4">
          <label htmlFor="targetUser" className="block text-sm font-medium">
            Target User:  <span className=' font-extrabold text-base text-red-600'>*</span>
          </label>
          <select
            id="targetUser"
            name="targetUser"
            value={targetUser}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full  border-slate-900 rounded focus:outline-none ${isDarkMode ? ' bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          >
                <option value="">Select user</option>
                <option value="mens">Mens</option>
                <option value="children">Children</option>
                <option value="women">Womens</option>
                <option value="girls">Girls</option>
                <option value="boys">Boys</option>
          </select>
        </div>

       {/* ---input for product brand--- */}
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium">
            Brand:  <span className=' font-extrabold text-base text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="brand"
            placeholder='Product brand'
            name="brand"
            value={brand}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full  border-slate-900 rounded focus:outline-none ${isDarkMode ? ' bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>

       {/* ---input for product category--- */}
       <div className="mb-4">
              <label htmlFor="category" className="block text-sm font-medium">
                Category:  <span className=' font-extrabold text-base text-red-600'>*</span>
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
                {/* Populate options with fetched categories */}
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.imageTitle}</option>
                ))}
              </select>
            </div>

       {/* ---input for product sub-category--- */}
        <div className="mb-4">
          <label htmlFor="special occasion" className="block text-sm font-medium">
            Sub-caetgory:
          </label>
          <select
            id="subCategory"
            name="subCategory"
            value={subCategory}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full  border-slate-900 rounded focus:outline-none ${isDarkMode ? ' bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          >
            <option value="">Select Category</option>
            <option value="holi">Holi Special</option>
            <option value="eid">Eid Special</option>
            <option value="diwali">Diwali Special</option>
            <option value="wedding">Wedding Special</option>
          </select>
        </div>

       {/* ---input for product color--- */}
        <div className="mb-4">
          <label htmlFor="color" className="block text-sm font-medium">
            Color:  <span className=' font-extrabold text-base text-red-600'>*</span>
          </label>
          <input
            type="text"
            placeholder='Product Color'
            id="color"
            name="color"
            value={color}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>

        {/* ---input for product size--- */}
        <div className="mb-4">
          <label htmlFor="size" className="block text-sm font-medium">
            Size:
          </label>
          <select
            id="size"
            name="size"
            value={size}
            onChange={onChange}
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          >
            <option value="">Select Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
            <option value="xxxl">XXXL</option>
          </select>
        </div>


        {/* ---input for product stock--- */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-sm font-medium">
            Stock:  <span className=' font-extrabold text-base text-red-600'>*</span>
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

        {/* ---input for product discouted price--- */}
        <div className="mb-4">
          <label htmlFor="discountedprice" className="block text-sm font-medium">
            Discounted Price:
          </label>
          <input
            type="number"
            placeholder='Product Discounted Price'
            id="discountedPrice"
            name="discountedPrice"
            value={discountedPrice}
            onChange={onChange}
            min="0"
            required
            className={`mt-1 p-2 block w-full border-slate-900 rounded focus:outline-none ${isDarkMode ? 'bg-slate-500' : 'text-gray-900 bg-slate-200'}`}
          />
        </div>
        
        
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium">
            Images:  <span className=' font-extrabold text-base text-red-600'>*</span>
          </label>
          <input
            type="file"
            placeholder='Product Image'
            // required
            name="images"
            // onChange={(e) => setImage(e.target.files[0])}
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
