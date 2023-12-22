import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPurchaseReq, setAllPurchaseReq] = useState([]);
  const [profileDetails, setProfileDetails] = useState({})
  const [purchaseRequests, setPurchaseRequests] = useState([]);
  // const [createPurchaseReq, setCreatePurchaseReq] =useState([])
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
  const imgUrl = "https://sandbox.myafrimall.com.ng"

  const [formData, setFormData] = useState({});

  // 
  const addPurchaseRequest = newRequest => {
    setPurchaseRequests(prev => [...prev, newRequest]);
  };

  const getAllPurchaseReq = async () => {
    const url = `${baseUrl}/get-purchase-requests`;
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
    console.log(token)
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
  
  const handleGetProfile = async () => { 
    try {
      const url = `${baseUrl}/get-profile`;
      const res = await axios.get(url, config());
      setProfileDetails(res.data.data);
    } catch (error) {
      toast.error(error);
    }
  }

  const GetAllReclaims = async () => {
    try {
      const url = `${baseUrl}/get-all-reclaims`;
      const res = await axios.get(url, config());
      console.log(res.data.data);
    } catch (error) {
      toast.error(error);
    }
  };

  // const createPurchaseRequest = async (totalAmount, details) => {
  //   const url = `${baseUrl}/create-purchase-request`;
  //   try {
  //     await axios.post(url, { total_amount: totalAmount, details }, config());
  //     toast.success("Purchase request created successfully!");
  //   } catch (error) {
  //     toast.error("Failed to create purchase request.");
  //   }
  // };
  
useEffect(()=>{
  if(token !== null){
    getDashboardDetails()
    handleGetProfile()
    GetAllReclaims()
  }
}, [isLoggedIn, token])

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
        uploadConfig,
        imgUrl,
        handleGetProfile,
        profileDetails,
        GetAllReclaims,
        formData,
        setFormData,
        purchaseRequests,
        addPurchaseRequest,
        setPurchaseRequests
        // createPurchaseRequest,
        // setCreatePurchaseReq
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
