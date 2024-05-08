import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  addSubCategory, getCategoriesAsync } from '../../../Redux/Actions/categoryAction';
import toast from 'react-hot-toast'
import Spinner from '../../../components/Spinner';
import { reset } from '../../../Redux/Slices/categorySlice';


const AddCategory = () => {
  const [categoryId,setCategoryId]=useState("");
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    file: null, // Change from array to single file
  });

  // Destructuring from form data
  const { name, file } = formData;

  // Redux dispatch function
  const dispatch = useDispatch();

  // Navigate function from react-router-dom
  const navigate = useNavigate();

  const {categories,isLoading, isSuccess, isError, message } = useSelector((state) => state.category);

  // useEffect to handle success, error, and reset actions
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      // navigate('/admin-dashboard');
    }
    if (isError) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch, navigate]);

  useEffect(() => {
    dispatch(getCategoriesAsync());
}, [dispatch]);

  // Function to handle changes in the form inputs
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file if multiple files are selected
    setFormData((prevState) => ({
      ...prevState,
      file: file,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithFile = new FormData();
    formDataWithFile.append('name', name);
    formDataWithFile.append("file", file); // Append the single file
    dispatch(addSubCategory({formDataWithFile,categoryId}));
  };

  if(isLoading) {
    <Spinner/>
  }

  return (
    <div className='bg-slate-800 text-slate-100 p-8 shadow-lg'>
      <h2 className="text-2xl font-bold mb-4">Add Sub-Category</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="w-full">
        {/* ---input for product category--- */}
      <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium">
            Category:   
          </label>
          <select
            id="category"
            name="category"
            value={categoryId}
            onChange={(e)=>setCategoryId(e.target.value)}
            className='mt-1 p-2 block w-full rounded focus:outline-none text-purple-700  border-2 border-purple-700 bg-transparent'
          >
            <option value="">Select Category</option>
            {/* Populate options with fetched categories */}
            {categories?.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.categoryName}</option>
            ))}
          </select>
        </div>
        {/* Input for image */}
        <div className="mb-4">
          <label htmlFor="file-upload" className="custom-file-upload">
            {file ? (
              <img className="w-20" src={URL.createObjectURL(file)} alt="Uploaded File" />
            ) : (
              <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/14720/14720909.png" alt="" />
            )}
          </label>
          <input
            id="file-upload"
            className="custom-file-upload"
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        {/* Input for product name */}
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
        
        <div>
          <button
            type="submit"
            className={`py-2 px-4 rounded  bg-slate-400 text-whit`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
