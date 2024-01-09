import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import logo from "../../Assets/Images/logo.png";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-activity";

const AcctViewReclaim = () => {
  const { acctSingleReclaim, getacctSingleReclaim, baseUrl, config, token } =
    useStateContext();
  const { id } = useParams();
  // const baseUrl = "https://api.myafrimall.com.ng";
  const printComp = useRef();

  // Print
  const handlePrint = useReactToPrint({
    content: () => printComp.current,
  });
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = useState();

  const approveRequest = async (id, payload) => {
    const url = `${baseUrl}/accountant-reclaim-request/${id}`;
    setIsLoading(true);
    try {
      const response = await axios.put(url, payload, config(token));
      toast.success(response?.data.message);
      setTimeout(() => {
        navigateTo("/home/allpendingreclaimreq");
      }, 3000);
    } catch (error) {
      console.error("Error fetching single reclaim request:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchSingleReclaim = async () => {
      try {
        const data = await getacctSingleReclaim(id);
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

  if (!acctSingleReclaim) {
    return <div className='text-center p-8'>Loading...</div>; // Handle loading state
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
  const imageUrl = baseUrl + acctSingleReclaim?.proof_of_reclaim;

  return (
    <div ref={printComp}>
      <div className='p-6 text-center flex justify-between item-center'>
        <Link to='/home/allpendingreclaimreq'>
          <FaArrowLeft />
        </Link>

        <p className='text-center font-bold'>View Reclaim Request</p>
        <Button
          onClick={handlePrint}
          type='button'
          className='bg-[#76413B] text-white rounded'
        >
          Print
        </Button>
      </div>
      <div className='px-4 sm:px-8 md:px-14'>
        <img src={logo} alt='logo' className='w-40 md:w-60' />
      </div>
      <div className='flex flex-col md:flex-row justify-around p-12 leading-loose'>
        {/* Accountant status */}
        <div className='md:text-left text-center'>
          <div className='flex gap-2'>
            Accountant Status:
            <Button>
              <span
                className={getStatusBgClass(
                  acctSingleReclaim.accountant_status
                )}
              >
                {acctSingleReclaim.accountant_status}
              </span>
            </Button>
          </div>
          <p>
            Staff Name: {acctSingleReclaim.user.firstname}{" "}
            {acctSingleReclaim.user.lastname}
          </p>
          <p>Reclaim Number: {acctSingleReclaim.reclaim_number}</p>
          <p>Details: {acctSingleReclaim.details}</p>
        </div>
        {/* Management status */}
        <div className='md:text-left text-center mt-4 md:mt-0'>
          <div className='flex gap-2'>
            Management Status:
            <Button>
              <span className={getStatusBgClass(acctSingleReclaim.mgt_status)}>
                {acctSingleReclaim.mgt_status}
              </span>
            </Button>
          </div>
          <p>Amount: ₦{acctSingleReclaim.amount_to_reclaim}</p>
          <p>
            Date of Expense:{" "}
            {new Date(acctSingleReclaim.date_of_expenses).toLocaleDateString()}
          </p>
        </div>
        <div className='text-center'>
          <p>Uploaded Receipt:</p>
          {acctSingleReclaim.proof_of_reclaim && (
            <img src={imageUrl} alt='Receipt' className='w-32 h-28 mx-auto' />
          )}
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <Button
          onClick={() =>
            approveRequest(acctSingleReclaim?.id, { status: "approved" })
          }
          className={`bg-green-500`}
        >
          Approve Purchase Request
        </Button>
        {isLoading && <Spinner />}
        <Button
          onClick={() =>
            approveRequest(acctSingleReclaim?.id, { status: "rejected" })
          }
          className={`bg-red-500`}
        >
          Reject Purchase Request{" "}
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AcctViewReclaim;
