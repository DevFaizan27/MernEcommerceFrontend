import axios from "axios";
import toast from 'react-hot-toast'




export const handleSignupAction = async (email, password,dispatch, setDisable, setShowOTPField,setLoading) => {
    try {
        dispatch(setLoading(true))
      const response = await axios.post(
        `http://localhost:5555/api/user/signup`,
        { email, password }
      );
      dispatch(setDisable(true));
      dispatch(setShowOTPField(true));
      dispatch(setLoading(false))
      toast.success(response.data.success)
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.response.data.error);
    }
  };

export  const handleOTPVerificationAction = async (email ,otp,navigate,setLoading,dispatch) => {
    try {
        dispatch(setLoading(true))
      const response = await axios.post(
        `http://localhost:5555/api/user/verify-otp`,
        { email, otp }
      );
      dispatch(setLoading(false))
      toast.success(response.data.success)
      navigate('/login');
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.response.data.error);
    }
  };

export  const resendOtpAction = async (email,dispatch, setDisable) => {
    try {
        dispatch(setLoading(true))
      const response = await axios.post(
        `http://localhost:5555/api/user/resend-otp`,
        { email }
      );
      dispatch(setDisable(true));
      dispatch(setLoading(false))
      toast.success(response.data.success)
    } catch (error) {
      dispatch(setLoading(false));
      toast.error(error.response.data.error);
    }
  };
