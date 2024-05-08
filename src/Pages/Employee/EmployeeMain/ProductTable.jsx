import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import VariantModel from './VariantModel'

const ProductTable = ({ products }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


    // Group products by name
    const groupedProducts = {};
    products.forEach(product => {
        const key = `${product.name}_${product.brand}`;
        if (!groupedProducts[key]) {
            groupedProducts[key] = [];
        }
        groupedProducts[key].push(product);
    });

   

    return (
      <>
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sizes</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Colors</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Price</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>

                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {Object.values(groupedProducts).map(products => {
                    const firstProduct = products[0]; // Assuming all products with the same name have the same brand
                    return (
                        <React.Fragment key={firstProduct._id}>
                            <tr>
                                <td rowSpan={products.length} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{firstProduct.name}</td>
                                <td rowSpan={products.length} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{firstProduct.brand}</td>
                                <td rowSpan={products.length} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{firstProduct.stock}</td>
                                <td rowSpan={products.length} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => handleCloseModal()}/>
                                </td>
                            </tr>
                            {products.slice(1).map(variant => (
                                <tr key={variant._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{variant.size}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{variant.color}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{variant.originalPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><img src={variant.images[0].url} className='w-6'/></td>
                                </tr>
                            ))}
                        </React.Fragment>
                    );
                })}
            </tbody>
        </table>
        <VariantModel 
         isOpen={isOpen}
         onClose={handleCloseModal}
        //  productId={firstProduct._id} // Replace with actual product ID
        />
        </>
    );
};

export default ProductTable;
