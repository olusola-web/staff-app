import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import RequestTable from "./RequestTable";
import RequestTab from "../Reclaim/RequestTable"
import { useStateContext } from "../../context/StateContext";
import axios from "axios";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify";

const ReclaimRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { baseUrl, uploadConfig } = useStateContext();

  const [form, setForm] = useState({
    details: "",
    date_of_expenses: "",
    amount_to_reclaim: "",
    proof_of_reclaim: "",
  });

  const { details, date_of_expenses, amount_to_reclaim, proof_of_reclaim } = form;

  // Function to update form data
  const handleFormChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleDateChange = (e) => {
    handleFormChange("date_of_expenses", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const url = `${baseUrl}/create-reclaim-request`;
    //   let formInput = new FormData();
    //   const payload =  formData;
    // for (const key in payload) {
    //   formInput.append(key, payload[key]);
    // }
      const res = await axios.post(url, form, uploadConfig());
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);  
    }
     setForm({
         details: "",
         date_of_expenses: "",
         amount_to_reclaim: "",
         proof_of_reclaim: "",
      });
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 items-center mb-4 md:mb-0">
            <FaHome className="m-1" />
            <p>Home</p>
            <FaChevronRight className="m-1" />
            <p className="text-[#049805]">Reclaim </p>
          </div>
        </div>
      </div>
      <div className="py-6 mx-10">
        <p className="text-2xl ">Reclaim</p>
      </div>

      <form onSubmit={handleSubmit} className="">
        <div className="ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="details">Details</label>
            <input
              type="text"
              id="details"
              name="details"
              value={details}
              onChange={(e) => handleFormChange("details", e.target.value)}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
              placeholder="Give details on expenses spent"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="calendar">Select a Date</label>
            <input
              type="date"
              id="date_of_expenses"
              name="date_of_expenses"
              value={date_of_expenses}
              onChange={handleDateChange}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount_to_reclaim"
              name="amount_to_reclaim"
              value={amount_to_reclaim}
              onChange={(e) => handleFormChange("amount_to_reclaim", e.target.value)}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
              placeholder="Enter the amount of the item"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="proof_of_reclaim">Kindly Upload a receipt</label>
            <input
              type="file"
              id="proof_of_reclaim"
              name="proof_of_reclaim"
              value={proof_of_reclaim}
              accept=".pdf, .doc, .docx"
              onChange={(e) => handleFormChange("proof_of_reclaim", e.target.value)}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <Button type="submit" className="w-full md:w-[27rem] h-12 flex justify-center items-center">
            {isLoading ? <Spinner/> : "Submit"}
            </Button>
        </div>
      </form>

      <RequestTable />
      <ToastContainer/>
    </div>
  );
};

export default ReclaimRequest;