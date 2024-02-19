import {createSlice} from '@reduxjs/toolkit';

const initialState={
    name:'',
    description:'',
    price:0,
    ratings:0,
    images:[],
    category:'',
    stock:0,
    numOfReviews:0,
    reviews:[],
}


const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setName(state,action){
            state.name=action.payload;
        },
        setDescription(state,action){
            state.description=action.payload;
        },
        setPrice(state,action){
            state.price=action.payload;
        },
        setRatings(state,action){
            state.ratings=action.payload;
        },
        setImages(state,action){
            state.images=action.payload;
        },
        setCategory(state,action){
            state.category=action.payload;
        },
        setStock(state,action){
            state.stock=action.payload;
        },
        setNumOfReviews(state,action){
            state.numOfReviews=action.payload;
        },
        setReviews(state,action){
            state.reviews=action.payload;
        }

    }
})


export const{setName,setDescription,setPrice,setRatings,setImages,setCategory,setStock,setNumOfReviews,setReviews}=productSlice.actions;

export default productSlice.reducer;