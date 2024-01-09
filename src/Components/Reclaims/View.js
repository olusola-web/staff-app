import React, { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import logo from "../../Assets/Images/logo.png";
import { useReactToPrint } from "react-to-print";

const View = () => {
  
  const { singleReclaim, getSingleReclaim } = useStateContext();
  const { id } = useParams();
  const baseUrl = "https://sandbox.myafrimall.com.ng";
  const printComp = useRef();
    //Print

const handlePrint = useReactToPrint({
  content: () => printComp.current,
});
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
  const imageUrl = baseUrl + singleReclaim?.proof_of_reclaim;

  return (
    <div ref={printComp}>
      <div className="p-6 text-center flex justify-between item-center"   >
      <Link to="/home/reclaim">
      <FaArrowLeft/>
        </Link>

        <p className="text-center font-bold">View Reclaim Request</p>
        <Button onClick={handlePrint} type="button" className="bg-[#76413B] text-white rounded">
          Print
        </Button>
      </div>
      <div className="px-4 sm:px-8 md:px-14">
        <img src={logo} alt="logo" className="w-40 md:w-60" />
      </div>
      <div className="flex flex-col md:flex-row justify-around p-12 leading-loose">
        {/* Accountant status */}
        <div className="md:text-left text-center">
          <div className="flex gap-2">
            Accountant Status:
            <Button>
              <span
                className={getStatusBgClass(singleReclaim.accountant_status)}
              >
                {singleReclaim.accountant_status}
              </span>
            </Button>
          </div>
          <p>
            Staff Name: {singleReclaim.user.firstname}{" "}
            {singleReclaim.user.lastname}
          </p>
          <p>Reclaim Number: {singleReclaim.reclaim_number}</p>
          <p>Details: {singleReclaim.details}</p>
        </div>
        {/* Management status */}
        <div className="md:text-left text-center mt-4 md:mt-0">
          <div className="flex gap-2">
            Management Status:
            <Button>
              <span className={getStatusBgClass(singleReclaim.mgt_status)}>
                {singleReclaim.mgt_status}
              </span>
            </Button>
          </div>
          <p>Amount: ₦{singleReclaim.amount_to_reclaim}</p>
          <p>
            Date of Expense:{" "}
            {new Date(singleReclaim.date_of_expenses).toLocaleDateString()}
          </p>
        </div>
        <div className="text-center">
          <p>Uploaded Receipt:</p>
          {singleReclaim.proof_of_reclaim && (
            <img src={imageUrl} alt="Receipt" className="w-32 h-28 mx-auto" />
          )}
        </div>
      </div>
    </div>
  );
};

export default View;