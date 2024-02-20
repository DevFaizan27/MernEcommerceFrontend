// import React from 'react'
// import { resetPasswordAction, resetPasswordOtpAction } from './authAction'
// import { setEmail, setOtp, setNewPassword,setShowOTPField,setLoading } from './authSlice';
// import { useNavigate } from 'react-router-dom';
// import Spinner from '../../components/Spinner';
// import { useDispatch, useSelector } from 'react-redux';


// const ForgotPassword = () => {
//     const dispatch = useDispatch()
  
//     const navigate = useNavigate();
  
//     //bring the state from store
//     const { email, newPassword, otp ,showOTPField,loading} = useSelector(
//       (state) => state.auth
//     );

//     const sendOtp=(e)=>{
//         e.preventDefault();
//         resetPasswordOtpAction(email,setLoading,setShowOTPField,dispatch);
//     }

//     const resetPassword=(e)=>{
//         e.preventDefault();
//         resetPasswordAction(email,newPassword,otp,setLoading,dispatch,navigate);
//     }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//     {loading?<Spinner/>:(
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//     <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Welcome to khareedo.com</h1>
//     <input
//       type="email"
//       value={email}
//       onChange={(e) => dispatch(setEmail(e.target.value))}
//       placeholder="Email"
//       disabled={showOTPField}
//       className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
//     />
//     <button
//       onClick={sendOtp}
//       disabled={showOTPField}
//       className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
//     >
//       Get OTP
//     </button>
//     {showOTPField && (
//       <>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => dispatch(setOtp(e.target.value))}
//           placeholder="OTP"
//           className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
//         />
//         <input
//       type="password"
//       value={newPassword}
//       onChange={(e) => dispatch(setNewPassword(e.target.value))}
//       placeholder="Password"
//       className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
//     />
//         <button
//           onClick={resetPassword}
//            //{/* Disable the Verify OTP button when countdown is running */}
//           className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
//         >
//           reset password
//         </button>
//       </>
//     )}
//   </div>

//     )}
  

// </div>
//   )
// }

// export default ForgotPassword