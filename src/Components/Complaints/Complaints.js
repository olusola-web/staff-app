import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";

const Complaints = () => {
  const [formData, setFormData] = useState({
    requestType: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., API request)
    console.log("Form submitted:", formData);
    // Clear the form fields after submission
    setFormData({
      requestType: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="w-full mx-auto mt-0 p-4 bg-white">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5 ">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]"> Complaints/Suggestions</p>
        </div>
        <h3>Date:21/11/2023</h3>
      </div>
      <div className="flex justify-center pt-5">
        <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-[60%] gap-5">
          {/* Request Type */}
          <div className="mb-7">
            <label className="block text-sm font-medium">
              Select the Request you would like to lay
            </label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 rounded-md"
            >
              <option value="General Inquiry">Complaints</option>
              <option value="Support">Suggestion</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              Kindly type in your complaint here
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-100"
              rows="7"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#049805] text-white p-3 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaints;
