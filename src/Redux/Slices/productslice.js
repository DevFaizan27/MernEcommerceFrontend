import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getEmployeeProductsAsync, getProductBySlugAsync, getProductsAsync } from "../Actions/productAction.js";



const initialState = {
    products: [],
    productDetails: null,
    productVariants: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


// Create the product slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false
            state.isLoading = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        //------user end build case------------
        builder
            //get all proucts
            .addCase(getProductsAsync.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getProductsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload; // Assuming the API returns an array directly
              })
              .addCase(getProductsAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
              })
            //   get Product By Slug
            .addCase(getProductBySlugAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductBySlugAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productVariants = action.payload.variants;
                state.productDetails = action.payload.product;
            })
            .addCase(getProductBySlugAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            //------employee build case------------

            //-------create a new Product------
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            //-------get all added products-------
            .addCase(getEmployeeProductsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployeeProductsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload;
            })
            .addCase(getEmployeeProductsAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;