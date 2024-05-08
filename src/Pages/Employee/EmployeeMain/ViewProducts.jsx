import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProductsAsync } from '../../../Redux/Actions/productAction';
import Spinner from '../../../components/Spinner';
import toast from 'react-hot-toast';
import ProductTable from './ProductTable';

const ViewProducts = () => {
  const dispatch=useDispatch();


  const{products,isLoading,isError,message}=useSelector((state)=>state.product)


  useEffect(()=>{
      dispatch(getEmployeeProductsAsync());
  },[dispatch])
  
  if (isLoading) {
      return <Spinner/>;
    }
  
    if (isError) {
      return toast.error(message);
    }
    console.log(products);

    
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <ProductTable products={products} />
    </div>
  )
}

export default ViewProducts