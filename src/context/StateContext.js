import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const StateContext = createContext();
const token = localStorage.getItem("token");

export const StateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const config = () => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const baseUrl = "https://sandbox.myafrimall.com.ng/api/staff/v1";

  return (
    <StateContext.Provider
      value={{ baseUrl, setIsLoggedIn, isLoading, setIsLoading }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => {
  return useContext(StateContext);
};
