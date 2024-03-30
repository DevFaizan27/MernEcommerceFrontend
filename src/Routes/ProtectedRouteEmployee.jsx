import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import EmployeeLayout from "../Pages/Employee/layout/EmployeeLayout";

const ProtectedRouteEmployee = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user || user.userRole !== "employee"){
      navigate('/unauthorized');
    }
  }, [token, user, navigate]);

  if (!token || !user || user.userRole !== "employee") {
    return <Navigate to="/unauthorized"/>;
  }

  return <EmployeeLayout />;
};

export default ProtectedRouteEmployee;
