import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";

const Complaints = () => {
  const [selectedOption, setSelectedOption] = useState('Complaint');
  const [message, setMessage] = useState('');
  const [labelName, setLabelName] = useState('Kindly type in your complaint here');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);

    // Change the label name for the message based on the selected option
    switch (e.target.value) {
      case 'Complaint':
        setLabelName('Kindly type in your complaint here');
        break;
      case 'Suggestion':
        setLabelName('Kindly type in your suggestion here');
        break;
      default:
        setLabelName('');
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Option:', selectedOption);
    console.log('Message:', message);
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
            <label className="block text-sm font-medium p-1">
              Select the Request you would like to lay
            </label>
            <select
              name="SelectedOption"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full p-3 bg-gray-100 rounded-md"
            >
              <option value="Complaint">Complaint</option>
              <option value="Suggestion">Suggestion</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium p-1 text-gray-600">
            {labelName}
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 rounded-md bg-gray-100"
              rows="10"
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


