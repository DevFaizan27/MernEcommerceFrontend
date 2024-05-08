import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../../Redux/Slices/productslice.js';
import { addProduct } from '../../../Redux/Actions/productAction.js';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../context/themeContext.jsx';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { getCategoriesAsync } from '../../../Redux/Actions/categoryAction.js';



const AddProduct = () => {
  const[value,setValue]=useState("")



  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    originalPrice: '',
    season: '',
    targetUser: '',
    brand: '',
    category: '',
    subCategory: '',
    color: '',
    size: '',
    stock: '',
    discountedPrice: '',
    files: [],
  });

  // Destructuring form data
  const {
    name,
    description,
    originalPrice,
    season,
    targetUser,
    brand,
    category,
    subCategory,
    color,
    size,
    stock,
    discountedPrice,
    files
  } = formData;

  // Redux dispatch function
  const dispatch = useDispatch();

  // Navigate function from react-router-dom
  const navigate = useNavigate();

//fetching categories
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategoriesAsync());
}, [dispatch]);

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

  // Function to handle file input change
  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFiles = new FormData();
    formDataWithFiles.append('name', name);
    formDataWithFiles.append('description', value);
    formDataWithFiles.append('originalPrice', originalPrice);
    formDataWithFiles.append('season', season);
    formDataWithFiles.append('targetUser', targetUser);
    formDataWithFiles.append('brand', brand);
    formDataWithFiles.append('category', category);
    formDataWithFiles.append('subCategory', subCategory);
    formDataWithFiles.append('color', color);
    formDataWithFiles.append('size', size);
    formDataWithFiles.append('stock', stock);
    formDataWithFiles.append('discountedPrice', discountedPrice);

    for (const file of files) {
      formDataWithFiles.append("files", file);
      // console.log(file);
    }

    // console.log(formDataWithFiles);

    dispatch(addProduct(formDataWithFiles));
  };

  return (
    <div className='bg-slate-800 text-slate-100 p-8 shadow-lg'>
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="w-full">

        {/* Input for images */}
        <div className="mb-4">
          <label htmlFor="file-upload" className="custom-file-upload">
            {formData.files == ""
              ?
              <div className="flex">
                {/* <div className=" bg-[#7d46d0] py-1 px-5 text-gray-200 rounded">Upload</div> */}
                <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/14720/14720909.png" alt="" />
              </div>
              :

              <div>
                <div className="flex flex-wrap ">
                  {formData.files.map((image, index) => {
                    return (
                      <div className="lg:w-1/5 w-1/3 flex justify-center lg:justify-start p-2 " key={index}>
                        <img
                          className=" w-40 h-36 lg:h-60 lg:w-60 rounded-lg"
                          src={image ? URL.createObjectURL(image) : ""} alt="img"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            }
          </label>
          <input
            id="file-upload"
            multiple
            className="custom-file-upload"
            type="file"
            name="files"
            onChange={(e) => {
              setFormData({
                ...formData,
                files: [...e.target.files]
              })
            }}
          />
        </div>

        {/* ---input for product name--- */}
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
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-800  border-2 border-purple-800 bg-transparent'

          />
        </div>


        {/* ---input for product description--- */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description:   
          </label>
          <ReactQuill
          className='border-red-500 text-white'
          theme='snow'
          value={value}
          onChange={setValue}
          />
        </div>

        {/* ---input for product original price--- */}
        <div className="mb-4">
          <label htmlFor="originalPrice" className="block text-sm font-medium">
            Original Price:   
          </label>
          <input
            type="Number"
            id="originalPrice"
            placeholder='Product Original Price'
            name="originalPrice"
            value={originalPrice}
            onChange={onChange}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
             
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
             
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
            Target User:   
          </label>
          <select
            id="targetUser"
            name="targetUser"
            value={targetUser}
            onChange={onChange}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
            Brand:   
          </label>
          <input
            type="text"
            id="brand"
            placeholder='Product brand'
            name="brand"
            value={brand}
            onChange={onChange}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
          />
        </div>

        {/* ---input for product category--- */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category:   
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={onChange}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
          >
            <option value="">Select Category</option>
            {/* Populate options with fetched categories */}
            {categories?.map((cat) => (
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
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
            Color:   
          </label>
          <input
            type="text"
            placeholder='Product Color'
            id="color"
            name="color"
            value={color}
            onChange={onChange}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
             
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
             
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
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
