import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// ----------------------User Actions-----------------------------------------


//get all products
export const getProductsAsync=createAsyncThunk(
    'product/getProductsAsync',
    async(_,{rejectWithValue})=>{
        try {
        const response=await axios.get('http://localhost:5555/api/product/get-all-products');
        return response.data.data;
        } catch (error) {
            throw rejectWithValue(error.response.data.error)
        }
    }
)


//get product by slug

export const getProductBySlugAsync = createAsyncThunk(
    'products/getProductBySlugAsync',
    async (slug, {rejectWithValue}) => {
      try {
        const res = await axios.get(`http://localhost:5555/api/product/get-product/${slug}`);
        return res.data;
      } catch (error) {
        throw  rejectWithValue(error.response.data.error);
      }
    }
  );








//-----------------------------Admin Action--------------------------------------

//to add product
export const addProduct=createAsyncThunk(
    'admin/addProduct',
    async(formDataWithFiles,{rejectWithValue})=>{
        try {
            const response=await axios.post(`http://localhost:5555/api/product/employee/add-product`,formDataWithFiles,{ headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('token'),
            }})
            return response.data.success
        } catch (error) {
            throw rejectWithValue(error.response.data.error)
        }
    }
)


export const getEmployeeProductsAsync=createAsyncThunk(
    'product/getEmployeeProductsAsync',
    async(_,{rejectWithValue})=>{
        try {
        const res=await axios.get('http://localhost:5555/api/product/employee/getEmployeeProducts',{
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        });
        return res.data.data;
        } catch (error) {
            throw rejectWithValue(error.response.data.error)
        }
    }
)