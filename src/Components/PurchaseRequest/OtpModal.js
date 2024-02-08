import React, {useState} from 'react'
import axios from "axios";
import { useStateContext } from "../../context/StateContext";
import { useNavigate} from "react-router-dom";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify";

const OtpModal = (props) => {
  const{setShowOtpCard, transferCode} = props

  const navigateTo = useNavigate();
  const {baseUrl, config} = useStateContext()
  const [isLoading, setIsLoading] = useState(false)
  const [otpValue, setOtpValue] = useState("")

  const HandleSubmitOtp = async () => {
    const url = `${baseUrl}/process-payment`;
    setIsLoading(true);
    try {
      const payload = {
        transfer_code: transferCode,
        otp: otpValue
      }
      const response = await axios.post(url, payload, config());
      // console.log(response.data)
      toast.success(response?.data.message);

      setTimeout(() => {
        navigateTo("/home/allpendingpurchasereq");
      }, 5000);
    } catch (error) {
      // console.error("Error fetching single reclaim request:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-screen" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
    <div className='bg-white w-1/3  mx-auto '>
    <div className='text-center p-5'>
    <ToastContainer/>
      <div className="flex justify-between items-center mb-2">
      <h3 className='font-bold'>Enter OTP</h3>
      <button onClick={()=>setShowOtpCard(false)} className='inline-block text-left text-lg'>x</button>
      </div>
        <input className='border-4 border-slate-200 w-full focus:outline-none' type="password" onChange={(e)=>setOtpValue(e.target.value)} />
              <button
              onClick={()=>HandleSubmitOtp()}
              type="submit"
              className="w-full flex items-center justify-center bg-[#049805] text-white p-3 focus:outline-none mx-auto mt-5"
            >
              {isLoading ? <Spinner /> : "Submit"}
            </button>
    </div>
    </div>
    </div>
  )
}

export default OtpModal