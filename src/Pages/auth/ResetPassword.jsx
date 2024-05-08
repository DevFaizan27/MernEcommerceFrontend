import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../Redux/Slices/authSlice";
import {  resetPasswordAction } from "../../Redux/Actions/authAction";

const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()
    const dispatch=useDispatch()

    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      );

   
      console.log(token);

      useEffect(() => {
        if (isError){
          toast.error(message);
          dispatch(reset());
        }
        if (isSuccess) {
          toast.success(message);
          navigate('/login');
          dispatch(reset());
        }
      }, [isError, isSuccess, message, navigate, dispatch]);





    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword){
            toast.error("Passwords not matched");
        }
        if (!newPassword && !confirmPassword){
            toast.error("All fields required");
        }
        dispatch(resetPasswordAction({token, newPassword}))
    };



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
  <h1 className="text-2xl font-semibold mb-6">Reset Password</h1>
  <div className="mb-4">
    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password:</label>
    <input
      type="password"
      id="newPassword"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
    <input
      type="password"
      id="confirmPassword"
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>
  <button
    onClick={handleSubmit}
    className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Reset Password
  </button>
</div>

    );
};

export default ResetPassword;
