import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StateContext = createContext();
const token = localStorage.getItem("token");

export const StateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPurchaseReq, setAllPurchaseReq] = useState([]);
  // const [allReclaim, setAllReclaim] = useState([]);
  const [allLeaveReq, setAllLeaveReq] = useState([]);
  // const [dashDetails, setDashdetails] = useState({});
  const [dashDetails, setDashdetails] = useState({
    reclaim_request: [],
    leave_request: [],
    purchase_request:[]
  });



  const [page, setPage] = useState(1);
  // const [profile, setProfile]

   const config = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };
  const uploadConfig = () => {
  // const token = await getToken();
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
};
  const baseUrl = "https://sandbox.myafrimall.com.ng/api/staff/v1";

  const getAllPurchaseReq = async () => {
    const url = `${baseUrl}/get-purchase-requests?page=${page}`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      console.log(res.data);
      setAllPurchaseReq(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllLeaveReq = async () => {
    const url = `${baseUrl}/get-all-leave-requests${page}`
    setIsLoading(true)
    try {
      const res = await axios.get(url, config(token))
      console.log(res.data)
      setAllLeaveReq(res.data.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  const getDashboardDetails = async () => {
    const url = `${baseUrl}/dashboard`;
    console.log(url)
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      console.log('Reclaim Requests:', dashDetails); // Log to check data
      setDashdetails(res.data.data);
    } catch (error) {
      console.error('Error fetching dashboard details:', error)
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <StateContext.Provider
      value={{
        baseUrl,
        setIsLoggedIn,
        isLoading,
        setIsLoading,
        setAllPurchaseReq,
        allPurchaseReq,
        getAllPurchaseReq,
        // allReclaim,
        getDashboardDetails,
        allLeaveReq,
        getAllLeaveReq,
        dashDetails,
        config,
        uploadConfig
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
