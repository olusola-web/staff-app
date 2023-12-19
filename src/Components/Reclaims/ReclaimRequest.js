import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";
import ReclaimRequestTable from "./ReclaimRequestTable";

const ReclaimRequest = () => {
  const [form, setForm] = useState({
    details: "",
    dateOfExpenses: "",
    amount: "",
    fileUpload: "",
  });

  const { details, dateOfExpenses, amount, fileUpload } = form;

  // Function to update form data
  const handleFormChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  const handleDateChange = (e) => {
    handleFormChange("dateOfExpenses", e.target.value);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="bg-white p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5">
            <FaHome className="m-0" />
            <p className="text-black">Home</p>
            <FaChevronRight className="m-1 text-[#049805]" />
            <p className="text-[#049805]"> Reclaim</p>
          </div>
        </div>
      </div>
      <div className="py-5 mx-7">
        <p className="text-2xl font-bold">Reclaim</p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
        <div>
          <label htmlFor="details">Details</label>
          <input
            type="text"
            id="details"
            name="details"
            value={details}
            onChange={(e) => handleFormChange("details", e.target.value)}
            className="w-full p-4 bg-gray-100 rounded-md"
            placeholder="Give details on expenses spent"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => handleFormChange("amount", e.target.value)}
            className="w-full p-4 bg-gray-100 rounded-md"
            placeholder="Enter the amount of the item"
          />
        </div>
        <div>
          <label htmlFor="dateOfExpenses">Select a Date</label>
          <input
            type="date"
            id="dateOfExpenses"
            name="dateOfExpenses"
            value={dateOfExpenses}
            onChange={handleDateChange}
            className="w-full p-4 bg-gray-100 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="fileUpload">Kindly Upload a Receipt</label>
          <input
            type="file"
            id="fileUpload"
            name="fileUpload"
            value={fileUpload}
            onChange={(e) => handleFormChange("fileUpload", e.target.value)}
            className="w-full p-4 bg-gray-100 rounded-md"
          />
        </div>
      </form>
      <div className="w-full flex justify-center items-center p-7">
        <Button className="w-full md:w-[27rem] h-12">Submit</Button>
      </div>

      <ReclaimRequestTable />
    </div>
  );
};

export default ReclaimRequest;

