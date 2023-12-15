import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StateContext = createContext();
const token = localStorage.getItem("token");

export const StateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPurchaseReq, setAllPurchaseReq] = useState([]);
  const [page, setPage] = useState(1);

  const config = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
