// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch,useSelector } from 'react-redux';
// import { setEmail , setPassword,setLoading } from './authSlice';
// import { loginAction } from './authAction';


// const Login = () => {

//   const dispatch=useDispatch()
//   const navigate = useNavigate();

//    //bring the state from store
//    const { email, password,loading} = useSelector(
//     (state) => state.auth
//   );



//   const login=(e)=>{
//     e.preventDefault();
//     loginAction(email,password,setLoading,navigate);
//   }


//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//         {loading?<Spinner/>:(
//           <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Welcome to khareedo.com</h1>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => dispatch(setEmail(e.target.value))}
//           placeholder="Email"
//           className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => dispatch(setPassword(e.target.value))}
//           placeholder="Password"
//           className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-indigo-500"
//         />
//         <button
//           onClick={login}
//           className="block w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-4"
//         >
//          login
//         </button>
//         <Link to={'/forgot-password'}><p>forgot password</p></Link>
//       </div>)
// }
//       </div>
    
//   );
// };

// export default Login;
