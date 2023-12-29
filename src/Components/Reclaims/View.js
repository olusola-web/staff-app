import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { useParams } from "react-router-dom";
import Button from "../Button/ButtonReusable";

const View = () => {
  const { singleReclaim, getSingleReclaim } = useStateContext(); 
  const { id } = useParams();
  const baseUrl = "https://sandbox.myafrimall.com.ng"; 

  useEffect(() => {
    const fetchSingleReclaim = async () => {
      try {
        const data = await getSingleReclaim(id);
        if (data) {
          console.log("Fetched Data:", data);
        }
      } catch (error) {
        console.error("Error fetching single reclaim:", error);
      }
    };

    if (id) {
      fetchSingleReclaim();
    }
  }, []);

  if (!singleReclaim) {
    return <div className="text-center p-8">Loading...</div>; // Handle loading state
  }

  // Function to determine the background class for statuses
  const getStatusBgClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-green-500 text-white rounded px-1 py-1";
      case "Approved":
        return "bg-blue-500 text-white rounded px-1 py-1";
      default:
        return "";
    }
  };

  // Constructing the full image URL
  const imageUrl = baseUrl + singleReclaim.proof_of_reclaim;

  return (
    <div>
      <div className="p-6 text-center">
        <FaArrowLeft />
        <p className="text-center font-bold">View Reclaim Request</p>
      </div>
      <div className="flex flex-col md:flex-row justify-around p-12 leading-loose">
        {/* Accountant status */}
        <div className="md:text-left text-center">
            Accountant Status: 
          <Button>
            <span className={getStatusBgClass(singleReclaim.accountant_status)}>
              {singleReclaim.accountant_status}
            </span>
          </Button>
          <p>Staff Name: {singleReclaim.user.firstname} {singleReclaim.user.lastname}</p>
          <p>Reclaim Number: {singleReclaim.reclaim_number}</p>
          <p>Details: {singleReclaim.details}</p>
        </div>
        {/* Management status */}
        <div className="md:text-left text-center mt-4 md:mt-0">
            Management Status: 
          <Button>
            <span className={getStatusBgClass(singleReclaim.mgt_status)}>
              {singleReclaim.mgt_status}
            </span>
          </Button>
          <p>Amount: ₦{singleReclaim.amount_to_reclaim}</p>
          <p>Date of Expense: {new Date(singleReclaim.date_of_expenses).toLocaleDateString()}</p>
          <p>Uploaded Receipt: {singleReclaim.proof_of_reclaim && <img src={imageUrl} alt="Receipt" className="w-24 h-20 "/>}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
