import React, {  useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";

const HomePageProduct = () => {
    const [productData, setProductData] = useState([]);
    




    useEffect(() => {
        axios.get('http://localhost:5555/api/product/get-all-products')
            .then((res) => {
                setProductData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="mt-10">
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.length > 0 ? (
                            productData.map((data) => (
                                <ProductCard key={data._id} data={data} />
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProduct;
