import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";
import ReclaimRequestTable from "./ReclaimRequestTable";
import { useStateContext } from "../../context/StateContext";
import axios from "axios";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify";

const ReclaimRequest = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { baseUrl, uploadConfig, GetAllReclaims } = useStateContext();

  const [form, setForm] = useState({
    details: "",
    date_of_expenses: "",
    amount_to_reclaim: "",
    proof_of_reclaim: "",
  });

  const { details, date_of_expenses, amount_to_reclaim, proof_of_reclaim } = form;

  // Function to update form data
const handleFormChange = (e) => {
  const { name, value, type, files } = e.target;
    if (type === "file") {
    const selectedFile = files[0];
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: selectedFile,
    }));
  } else {
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const newErrors = { ...errors };
  delete newErrors[name];
  setErrors(newErrors);
};


const handleBlur = (e) => {
  const { name, value } = e.target;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() ? null : `${name.split('_').join(' ')} is required`,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();
        // form validation
const requiredFields = [
  "details",
  "date_of_expenses",
  "amount_to_reclaim",
  "proof_of_reclaim"
];
const newErrors = {};
requiredFields.forEach((field) => {
  if (!form[field]) {
    newErrors[field] = `${field.split('_').join(' ')} is required`;
  }
});
if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}
    setIsLoading(true);
    try {
      const url = `${baseUrl}/create-reclaim-request`;
      const res = await axios.post(url, form, uploadConfig());
      GetAllReclaims()
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
              onChange={handleFormChange}
              onBlur={handleBlur}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
              placeholder="Give details on expenses spent"
            />
            {errors.details && <p className="text-red-600 font-bold">{errors.details}</p>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="calendar">Select a Date</label>
            <input
              type="date"
              id="date_of_expenses"
              name="date_of_expenses"
              value={date_of_expenses}
              onChange={handleFormChange}
              onBlur={handleBlur}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
            {errors.date_of_expenses && <p className="text-red-600 font-bold">{errors.date_of_expenses}</p>}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount_to_reclaim"
              name="amount_to_reclaim"
              value={amount_to_reclaim}
              onChange={handleFormChange}
              onBlur={handleBlur}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
              placeholder="Enter the amount of the item"
            />
            {errors.amount_to_reclaim && <p className="text-red-600 font-bold">{errors.amount_to_reclaim}</p>}
          </div>
          <div className="mb-4">
           
            <label htmlFor="proof_of_reclaim">Kindly Upload a receipt</label>
            <input
              type="file"
              id="proof_of_reclaim"
              name="proof_of_reclaim"
              // value={proof_of_reclaim}
              accept=".pdf, .doc, .docx, image/*"
              onChange={handleFormChange}
              onBlur={handleBlur}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
            {errors.proof_of_reclaim && <p className="text-red-600 font-bold">{errors.proof_of_reclaim}</p>}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button type="submit" className="w-full md:w-[27rem] h-12 flex justify-center items-center">
            {isLoading ? <Spinner/> : "Submit"}
            </Button>
        </div>
      </form>

      <ReclaimRequestTable />
      <ToastContainer/>
    </div>
  );
};

export default ReclaimRequest;

