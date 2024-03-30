import { createSlice } from "@reduxjs/toolkit";
import { addProduct, getProducts,getProductBySlugAsync } from "../Actions/productAction.js";



const initialState={
    productDetails:null,
    productVariants:null,
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}


// Create the product slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset:(state)=>{
            state.isSuccess=false
            state.isLoading=false
            state.isError=false
            state.message=''
        }
    },
    extraReducers: (builder) => {
             //------user end build case------------
      builder
      .addCase(getProducts.pending, (state) => {
          state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
        //   state.productDetails = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
      })
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
      //------admin build case------------
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
      });
    },
  });

  export const {reset}=productSlice.actions;  
  export default productSlice.reducer;