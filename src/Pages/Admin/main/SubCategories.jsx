import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync, getCategoryByIdAsync } from '../../../Redux/Actions/categoryAction';
import Spinner from '../../../components/Spinner';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';


const SubCategories = () => {
    const dispatch = useDispatch();
    const {categoryId}=useParams();
    console.log(categoryId);
    const { category, isLoading, isSuccess } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategoryByIdAsync(categoryId));
    }, [dispatch]);
    
    console.log(category);
    return (
        <div className="bg-[#32353F] min-h-screen w-full p-4 overflow-x-auto">
            <h1 className="text-2xl font-semibold text-gray-200 mb-4">Category-{category?.categoryName}</h1>
            {isLoading ? <Spinner /> : isSuccess && (
                <div className="bg-gray-800 rounded-sm overflow-hidden">
                    <div className="table-container">
                        <table className="min-w-full divide-y divide-gray-900">
                            <thead className="bg-gray-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sub-Category Images</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sub-Category Name</th>
                                    <th className="px-6 py-3  text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-900">
                                {category?.subCategories?.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                                        <td className="px-6 py-4 text-gray-200 whitespace-nowrapw-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full">
                                            <img
                                                src={item.images[0].url}
                                                alt="img"
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-gray-200 whitespace-nowrap">{item.name}</td>
                                        <td className="px-6 py-4 text-gray-200 text-center">
                                            <div className="flex justify-center items-center">
                                                <FaTrash className="mr-2" />
                                                <FaEdit className="mr-2" />
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubCategories