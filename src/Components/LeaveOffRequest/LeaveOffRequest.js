import React, { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";
import { useStateContext } from "../../context/StateContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-activity";

const CreateLeaveOffRequest = () => {
  const [newRequest, setNewRequest] = useState({
    leaveType: "Leave",
    startDate: "",
    endDate: "",
  });

  const { config, baseUrl, getDashboardDetails, getAllLeaveReq,isLoading } = useStateContext(); 

  const handleInputChange = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseUrl}/create-leave-request`,
        {
          request_type: newRequest.leaveType,
          leave_start_date: newRequest.startDate,
          leave_end_date: newRequest.endDate,
        },
        config()
      );
      getDashboardDetails()
      getAllLeaveReq()

      if (response.data.status) {
        // Handle success
        console.log("Leave submitted successfully");
        toast.success("Leave submitted successfully", {
          autoClose: 5000 // 5000 milliseconds = 5 seconds
        });
        // Optionally, reset form here or navigate away
      } else {
        // Handle failure
        console.error("Failed to submit leave");
      }
        // Delay navigation to allow the toast to be displayed
    setTimeout(() => {
      navigate('/home/leaverequest');
    }, 2000);
    } catch (error) {
      console.error("Error submitting leave request:", error);
    }
    // Reset form after submission
    setNewRequest({
      leaveType: "Leave",
      startDate: "",
      endDate: "",
    });
  };
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-0 p-4 bg-white">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-6 mb-5 ">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]">Leave/Off Request</p>
        </div>
      </div>

      <form
        className="flex justify-center pt-14"
        onSubmit={handleCreateRequest}
      >
        <div className="flex flex-col w-full md:w-[60%] gap-5">
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-2">
              Select Request Type
            </label>
            <select
              name="leaveType"
              value={newRequest.leaveType}
              onChange={handleInputChange}
              className="px-4 py-3 border-2 border-grey-300 rounded"
            >
              <option value="Leave">Leave</option>
              <option value="Off">Off</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={newRequest.startDate}
              onChange={handleInputChange}
              className="px-4 py-2 border-2 border-grey-300 rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={newRequest.endDate}
              onChange={handleInputChange}
              className="px-4 py-2 border-2 border-grey-300 rounded"
              required
            />
          </div>

          <Button
            type="submit"
            className="bg-[#049005] text-white rounded px-4 py-2 hover:bg-green-700 flex justify-center"
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateLeaveOffRequest;
