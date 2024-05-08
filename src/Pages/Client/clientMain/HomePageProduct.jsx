import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../../Redux/Actions/productAction";
import Spinner from "../../../components/Spinner";
import toast from "react-hot-toast";
import { reset } from "../../../Redux/Slices/productslice.js";

const HomePageProduct = () => {
    const dispatch = useDispatch();

 

    const { products, isLoading, isError, message, isSuccess } = useSelector((state) => state.product);


    useEffect(() => {
        dispatch(getProductsAsync());
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

    console.log("Products:", isLoading);
    
    return (
        <div className="mt-10">
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {isLoading ? (
                           <p>Loading......</p>
                        ) : (
                            products?.map((data) => (
                                <ProductCard key={data?._id} data={data} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProduct;
