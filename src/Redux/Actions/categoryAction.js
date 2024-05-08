import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//-------------------------User Actions[No authentication]------------------------

//get All Categories
export const getCategoriesAsync = createAsyncThunk(
    'categories/getCategoriesAsync',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5555/api/categories/get-all-categories`)
            return response.data.data
        } catch (error) {
            throw rejectWithValue(error.response.data.error)
        }
    }
)

//get  Category by id
export const getCategoryByIdAsync = createAsyncThunk(
    'categories/getCategoryByIdAsync',
    async (categoryId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5555/api/categories/getCategoryById/${categoryId}`)
            console.log(response);
            return response.data.data
        } catch (error) {
            throw rejectWithValue(error.response.data.error)
        }
    }
)

//add a category
export const addCategoryAsync = createAsyncThunk(
    'categories/addCategoryAsync',
    async (formDataWithFiles, { rejectWithValue }) => {
        try {
            const response = axios.post(`http://localhost:5555/api/categories/add-category`, formDataWithFiles, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token'),
                }
            })
            return response.data.success
        } catch (error) {
           throw rejectWithValue(error.response.data.error)
        }
    }
)


//add a sub category
export const addSubCategory = createAsyncThunk(
    'categories/addSubCategory',
    async ({formDataWithFile,categoryId}, { rejectWithValue }) => {
       console.log("categoryId: " + categoryId);
        try {
            const response = axios.post(`http://localhost:5555/api/categories/add-subCategory/${categoryId}`, formDataWithFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': localStorage.getItem('token'),
                }
            })
            return response.data.success
        } catch (error) {
           throw rejectWithValue(error.response.data.error)
        }
    }
)