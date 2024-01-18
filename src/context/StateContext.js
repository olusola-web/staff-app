import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "jquery";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPurchaseReq, setAllPurchaseReq] = useState([]);
  const [profileDetails, setProfileDetails] = useState({});
  const [purchaseRequests, setPurchaseRequests] = useState([]);
  const [acctAllPurRequests, setAcctAllPurRequests] = useState([]);
  const [acctSinglePr, setAcctSinglePr] = useState([]);
  const [createPurchaseReq, setCreatePurchaseReq] = useState([]);
  const [singleReclaim, setSingleReclaim] = useState(null);
  const [acctSingleReclaim, setAcctSingleReclaim] = useState(null);
  const [singlePurchaseRequest, setSinglePurchaseRequest] = useState(null);
  const [allReclaim, setAllReclaim] = useState([]);
  const [acctAllReclaims, setAcctAllReclaim] = useState([]);
  const [allLeaveReq, setAllLeaveReq] = useState([]);
  const [allBanks, setAllBanks] = useState([]);
  // const [dashDetails, setDashdetails] = useState({});
  const [dashDetails, setDashdetails] = useState({
    reclaim_request: [],
    leave_request: [],
    purchase_request: [],
  });

  const addLeaveRequest = (newRequest) => {
    setAllLeaveReq((prevLeaveReq) =>
      Array.isArray(prevLeaveReq) ? [...prevLeaveReq, newRequest] : [newRequest]
    );
  };

  const [page, setPage] = useState(1);
  // const [profile, setProfile]

  // header authorization is commonly used in APIs to ensure that the request is coming from an authenticated user or service.
  const config = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  // Similar to the config function, but specifically tailored for uploading data, likely files.
  const uploadConfig = () => {
    // const token = await getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
  };
  // const baseUrl = "https://api.myafrimall.com.ng/api/staff/v1";
  const baseUrl = "https://sandbox.myafrimall.com.ng/api/staff/v1";
  // const imgUrl = "https://api.myafrimall.com.ng";
  const imgUrl = "https://sandbox.myafrimall.com.ng";

  const [formData, setFormData] = useState({});

  //
  const addPurchaseRequest = (newRequest) => {
    setPurchaseRequests((prev) => [...prev, newRequest]);
  };

  // Function to get a single purchase request
  const getSinglePurchaseRequest = async (id) => {
    const url = `${baseUrl}/single-purchase-request/${id}`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
     
      if (res.data && res.data.status) {
        return res.data.data; // Directly accessing the data object
      } else {
        console.error("No data found in the response");
        return null;
      }
    } catch (error) {
      console.error("Error fetching single purchase request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // get all banks 
  const getAllBanks = async () => {
    const url = `${baseUrl}/banks`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config());
      setAllBanks(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  

  // Function to get a single reclaim
  const getSingleReclaim = async (id) => {
    const url = `${baseUrl}/single-reclaim/${id}`;
    setIsLoading(true);
    try {
      const response = await axios.get(url, config(token));
      if (response.data && response.data.status) {
        setSingleReclaim(response.data.data);
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error("Error fetching single reclaim request:", error);
      toast.error("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to get acct single reclaim
  const getacctSingleReclaim = async (id) => {
    const url = `${baseUrl}/single-reclaim/${id}`;
    setIsLoading(true);
    try {
      const response = await axios.get(url, config(token));
      if (response.data && response.data.status) {
        setAcctSingleReclaim(response.data.data);
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error("Error fetching single reclaim request:", error);
      toast.error("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to get acct single purchase req
  const getacctSinglePr = async (id) => {
    const url = `${baseUrl}/single-purchase-request/${id}`;
    setIsLoading(true);
    try {
      const response = await axios.get(url, config(token));
      if (response.data && response.data.status) {
        setAcctSinglePr(response.data.data);
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error("Error fetching single reclaim request:", error);
      toast.error("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  const GetAllReclaims = async () => {
    const url = `${baseUrl}/get-all-reclaims`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      console.log(res.data);
      setAllReclaim(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  //  Acct All reclaim
  const getAcctAllReclaims = async () => {
    const url = `${baseUrl}/accountant-reclaim-request`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      console.log(res.data);
      setAcctAllReclaim(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Acct all pur req
  const getAcctAllPurRequests = async () => {
    const url = `${baseUrl}/accountant-purchase-request`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      console.log(res.data);
      setAcctAllPurRequests(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllPurchaseReq = async () => {
    const url = `${baseUrl}/get-purchase-requests`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      // console.log(res.data);
      setAllPurchaseReq(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllLeaveReq = async () => {
    const url = `${baseUrl}/get-all-leave-requests`;
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      setAllLeaveReq(res.data.data || []);
    } catch (error) {
      console.error("Error fetching leave requests:", error);
      toast.error("Error fetching leave requests");
    } finally {
      setIsLoading(false);
    }
  };

  const getDashboardDetails = async () => {
    // console.log(token)
    const url = `${baseUrl}/dashboard`;
    // console.log(url)
    setIsLoading(true);
    try {
      const res = await axios.get(url, config(token));
      // console.log('Reclaim Requests:', dashDetails); // Log to check data
      setDashdetails(res.data.data);
    } catch (error) {
      console.error("Error fetching dashboard details:", error);
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
  };

  // const GetAllReclaims = async () => {
  //   try {
  //     const url = `${baseUrl}/get-all-reclaims`;
  //     const res = await axios.get(url, config());
  //     console.log(res.data.data);
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  useEffect(() => {
    if (token !== null) {
      getDashboardDetails();
      handleGetProfile();
      GetAllReclaims();
      getAllPurchaseReq();
      getAllLeaveReq();
    }
  }, [isLoggedIn, token]);
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
        getSinglePurchaseRequest,
        setAcctSinglePr,
        getacctSinglePr,
        acctSinglePr,
        allReclaim,
        setAllReclaim,
        getDashboardDetails,
        setAllLeaveReq,
        allLeaveReq,
        getAllLeaveReq,
        addLeaveRequest,
        dashDetails,
        config,
        uploadConfig,
        imgUrl,
        handleGetProfile,
        profileDetails,
        GetAllReclaims,
        getAcctAllReclaims,
        acctAllReclaims,
        setAcctAllReclaim,
        formData,
        setFormData,
        purchaseRequests,
        addPurchaseRequest,
        setPurchaseRequests,
        createPurchaseReq,
        setCreatePurchaseReq,
        singlePurchaseRequest,
        setSinglePurchaseRequest,
        getAcctAllPurRequests,
        acctAllPurRequests,
        setAcctAllPurRequests,
        getSingleReclaim,
        singleReclaim,
        setSingleReclaim,
        getacctSingleReclaim,
        acctSingleReclaim,
        setAcctSingleReclaim,
        getAllBanks,
        setAllBanks,
        allBanks
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
