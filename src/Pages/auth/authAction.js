import axios from "axios";
import toast from "react-hot-toast";

//------------------------------------------>>signup actions<<------------------------------------------

//action for signup
export const handleSignupAction = async (
  email,
  password,
  dispatch,
  setDisable,
  setShowOTPField,
  setLoading
) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(`http://localhost:5555/api/user/signup`, {
      email,
      password,
    });
    dispatch(setDisable(true));
    dispatch(setShowOTPField(true));
    dispatch(setLoading(false));
    toast.success(response.data.success);
  } catch (error) {
    dispatch(setLoading(false));
    toast.error(error.response.data.error);
  }
};

//action for otp verification
export const handleOTPVerificationAction = async (email,otp,navigate,setLoading,dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `http://localhost:5555/api/user/verify-otp`,
      { email, otp }
    );
    dispatch(setLoading(false));
    toast.success(response.data.success);
    navigate("/login");
  } catch (error) {
    dispatch(setLoading(false));
    toast.error(error.response.data.error);
  }
};

//action for resend otp verification
export const resendOtpAction = async (email, dispatch, setDisable) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `http://localhost:5555/api/user/resend-otp`,
      { email }
    );
    dispatch(setDisable(true));
    dispatch(setLoading(false));
    toast.success(response.data.success);
  } catch (error) {
    dispatch(setLoading(false));
    toast.error(error.response.data.error);
  }
};

// ------------------------------------------>>login action<<------------------------------------------

// action for signup
export const loginAction = async (email, password, setLoading, navigate) => {
  const data = { email, password };
  try {
    setLoading(true);
    const response = await axios.post(
      `http://localhost:5555/api/user/login`,
      data
    );
    localStorage.setItem("token", response.data.token);
    setLoading(false);
    toast.success(response.data.success);
    navigate("/");
  } catch (error) {
    setLoading(false);
    toast.error(error.response.data.error);
    console.error(error);
  }
};

//forgot password otp
export const resetPasswordOtpAction = async (email,setLoading,setShowOTPField,dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `http://localhost:5555/api/user/update-password-otp`,
      { email }
    );
    dispatch(setShowOTPField(true));
    dispatch(setLoading(false));
    toast.success(response.data.success);
  } catch (error) {
    dispatch(setLoading(false));
    toast.error(error.response.data.error);
  }
};

//reset password action
export const resetPasswordAction = async (email,newPassword,otp,setLoading,dispatch,navigate) => {
  try {
    dispatch(setLoading(true));
    const response=await axios.post(`http://localhost:5555/api/user/update-password`,{email,otp,newPassword});
    dispatch(setLoading(false));
    toast.success(response.data.success);
    localStorage.removeItem('token')
    navigate('/login')
  } catch (error) {
    toast.error(error.response.data.error);
  }
};
