import React from "react";
import axios from "axios";
import Table from "../../Utils/Table";
import SingleLeaveTable from "./SingleLeaveTable";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";
import { useStateContext } from "../../context/StateContext";
import { useEffect, useState } from "react";

const tableHeader = [
  "S/N",
  "Request Type",
  "Start Date",
  "End Date",
  "Status",
  "Delete",
];

const LeaveTable = () => {
  const { getAllLeaveReq, allLeaveReq, isLoading, baseUrl, config } =
    useStateContext();
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await getAllLeaveReq();
      setLeaveRequests(allLeaveReq?.data || []); // Update local state with fetched data
    };
    fetchData();
  }, []); // here
  const handleDeleteRequest = async (id) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/delete-leave-request/${id}`,
        config()
      );
      if (response.status === 200) {
        setLeaveRequests((currentLeaveRequests) =>
          currentLeaveRequests.filter((request) => request.id !== id)
        );
        setSuccessMessage("leave/off  deleted successfully");
        setShowModal(true);
      } else {
        console.error("Failed to delete leave request");
      }
    } catch (error) {
      console.error("Error deleting leave request:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSuccessMessage("");
  };

  const displayedData = allLeaveReq?.data || [];

  return (
    <div>
      <div className="p-2 flex flex-col md:flex-row justify-between items-center my-3">
        <div className="flex gap-2 items-center md:mb-0 pt-6 mb-5 ">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]">Leave/Off Request</p>
        </div>
        <Link to="/home/leaverequestpage">
          <Button className="hover:bg-green-600 hover:font-bold mr-7 mt-4 px-5">
            Create Leave/off request
          </Button>
        </Link>
      </div>

      <div className="w-full max-w-5xl my-14 overflow-x-auto table-responsive ml-5">
        <Table
          headerContent={tableHeader}
          minSize={"1000px"}
          cols={6}
          data={leaveRequests}
          showSearch={false}
          searchKey=""
        >
          {leaveRequests.length === 0 ? (
            <p>You have 0 leave/off requests</p>
          ) : (
            leaveRequests.map((item, index) => (
              <SingleLeaveTable
                key={item.id}
                item={item}
                index={index}
                onDelete={handleDeleteRequest}
              />
            ))
          )}
        </Table>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="text-lg font-bold mb-4">{successMessage}</p>
            <button
              onClick={closeModal}
              className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-300 mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default LeaveTable;
