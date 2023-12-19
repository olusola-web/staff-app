import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import RequestTable from "./RequestTable";
import RequestTab from "../Reclaim/RequestTable"

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

      <form className="">
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
              id="dateOfExpenses"
              name="dateOfExpenses"
              value={dateOfExpenses}
              onChange={handleDateChange}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2"></div>
          </div>
          <div className="mb-4">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => handleFormChange("amount", e.target.value)}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
              placeholder="Enter the amount of the item"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fileUpload">Kindly Upload a receipt</label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              value={fileUpload}
              onChange={(e) => handleFormChange("fileUpload", e.target.value)}
              className="w-full h-12 px-4 py-2 text-md text-gray-700 bg-white border-2 border-gray-300 rounded transition ease-in-out outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <Button className="w-full md:w-[27rem] h-12">Submit</Button>
        </div>
      </form>

      <RequestTable />
    </div>
  );
};

export default ReclaimRequest;
