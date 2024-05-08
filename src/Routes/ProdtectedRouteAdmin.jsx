import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import AdminLayout from '../Pages/Admin/Layout/AdminLayout';


const ProdtectedRouteAdmin = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("userData"));
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token || !user || user.userRole !== "admin"){
        navigate('/unauthorized');
      }
    }, [token, user, navigate]);
  
    if (!token || !user || user.userRole !== "admin") {
      return <Navigate to="/unauthorized"/>;
    }
  
    return <AdminLayout/>;
  };

export default ProdtectedRouteAdmin