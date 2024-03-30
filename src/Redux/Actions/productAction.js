import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// ----------------------User Actions-----------------------------------------


//get all products
export const getProducts=createAsyncThunk(
    'user/getProducts',
    async(thunkAPI)=>{
        try {
            await axios.get('http://localhost:5555/api/product/get-all-products')
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error)
        }
    }
)


//get product by slug

export const getProductBySlugAsync = createAsyncThunk(
    'products/getProductBySlugAsync',
    async (slug, thunkAPI) => {
      try {
        const res = await axios.get(`http://localhost:5555/api/product/get-product/${slug}`);
        return res.data;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    }
  );
















//-----------------------------Admin Action--------------------------------------

//to add product
export const addProduct=createAsyncThunk(
    'admin/addProduct',
    async(productData,thunkAPI)=>{
        try {
            const response=await axios.post(`http://localhost:5555/api/product/employee/add-product`,productData,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            }})
            return response.data.success

        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.error)
        }
    }
)