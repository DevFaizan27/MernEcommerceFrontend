import { createSlice } from "@reduxjs/toolkit";
import { addCategoryAsync, addSubCategory, getCategoriesAsync, getCategoryByIdAsync } from "../Actions/categoryAction";


const initialState = {
    categories: [],
    category: null,
    productVariants: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
       reset:(state)=>{
        state.isSuccess=false
        state.isLoading = false
        state.isError = false
        state.message = ''
       }
    },
    extraReducers:(builder)=>{
        builder
        //----------[user] end build case for all category--------------
        .addCase(getCategoriesAsync.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getCategoriesAsync.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
        })
        .addCase(getCategoriesAsync.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })
        //----------[user] end build case for single category--------------
        .addCase(getCategoryByIdAsync.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getCategoryByIdAsync.fulfilled,(state,action)=>{
            state.category=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
        })
        .addCase(getCategoryByIdAsync.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })
        //----------[admin] end builder to add Category--------------
        .addCase(addCategoryAsync.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addCategoryAsync.fulfilled,(state,action)=>{
            state.message=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
        })
        .addCase(addCategoryAsync.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })
        //----------[admin] end builder to add sub Category--------------
        .addCase(addSubCategory.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addSubCategory.fulfilled,(state,action)=>{
            state.message=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
        })
        .addCase(addSubCategory.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })

    }
})

export const {reset}=categorySlice.actions;
export default categorySlice.reducer;