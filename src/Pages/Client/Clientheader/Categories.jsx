import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from '../../../Redux/Actions/categoryAction';
import SkeletonLoader from '../../../components/SkeletonLoader';
import { reset } from '../../../Redux/Slices/categorySlice';
import toast from "react-hot-toast";



const Categories = () => {
  const dispatch = useDispatch();
  
  const { categories, isLoading, isError, message, isSuccess } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesAsync());
}, [dispatch]);

useEffect(() => {
    if (isSuccess) {
        dispatch(reset());
    }

    if (isError) {
        toast.error(message);
        dispatch(reset());
    }
}, [isError, isSuccess, message, dispatch]);
 
if(isLoading){
  <SkeletonLoader/>
}

console.log(categories);

  return (
    <div className="relative overflow-hidden mt-5">
      <div
        id="categoriesContainer"
        className="flex lg:justify-center hide-scroll-bar"
      >
        {categories?.map((item, index) => (
          <div key={index} className="px-2 lg:px-3">
            <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-gray-500 transition-all hover:bg-gray-400 cursor-pointer mb-1">
              <div className="flex justify-center">
                <img
                  src={item.categoryImage[0].url}
                  alt="img"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
              {item.categoryName}
            </h1>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Categories;
