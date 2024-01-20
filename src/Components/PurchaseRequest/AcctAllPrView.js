import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import logo from "../../Assets/Images/logo.png";
import Table from "../../Utils/Table";
import SingleAcctview from "./SingleAcctview";
import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Spinner } from "react-activity";
import OtpModal from "./OtpModal";

const AcctAllPrView = () => {
  const {
    acctSinglePr,
    setAcctSinglePr,
    getacctSinglePr,
    baseUrl,
    config,
    token,
  } = useStateContext();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [showOtpCard, setShowOtpCard] = useState(false);
  const [transferCode, setTransferCode] = useState("");
  
  const approveRequest = async (id, payload) => {
    const url = `${baseUrl}/accountant-purchase-request/${id}`;
    setIsLoading(true);
    try {
      const response = await axios.put(url, payload, config(token));
      setTransferCode(response.data.data.data.transfer_code)
      console.log(response.data.data.data.transfer_code)
      if(response.data.data.data.status === 'otp'){
        setShowOtpCard(true)
      }
      toast.success(response?.data.message);
    } catch (error) {
      console.error("Error fetching single reclaim request:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchAcctSinglePurchaseReq = async () => {
      try {
        const data = await getacctSinglePr(id);
        if (data) {
          setAcctSinglePr(data);
        }
      } catch (error) {
        console.error("Error fetching single purchase request:", error);
      }
    };

    if (id) {
      fetchAcctSinglePurchaseReq();
    }
  }, [id]);

  const printComp = useRef();
  //Print
  const handlePrint = useReactToPrint({
    content: () => printComp.current,
  });

  if (!acctSinglePr) {
    return <div className='text-center p-8'>Loading...</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Not Available";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const tableHeader = ["S/N", "Details", "Quantity", "Price"];

  // Calculate the total amount if purchaseRequest data is available
  const totalAmount =
    acctSinglePr && acctSinglePr.purchase_request_items
      ? acctSinglePr.purchase_request_items.reduce(
          (total, item) =>
            total + parseInt(item.quantity, 10) * parseInt(item.price, 10),
          0
        )
      : 0;

  return (
    <div className='relative container mx-auto' ref={printComp}>
      <div className='flex justify-between p-10'>
        <Link to='/home/allpendingpurchasereq'>
          <FaArrowLeft />
        </Link>

        <p className='text-base md:text-lg lg:text-xl'>View Purchase Request</p>

        <Button
          type='button'
          className='bg-[#76413B] text-white rounded'
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>

      {/* logo */}
      <div className='px-4 sm:px-8 md:px-14'>
        <img src={logo} alt='logo' className='w-40 md:w-60' />
      </div>

      {/* PR NO & Date */}
      <div className='flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-14 py-4 md:py-6'>
        <p className='mb-4 md:mb-0'>PR No : {acctSinglePr?.Pr_Number}</p>
        {/* Format date as needed */}
        <p>Date: {formatDate(acctSinglePr?.created_at)}</p>
      </div>

      {/* acct & mgt status */}
      <div className='flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-14 py-2'>
        <p className='mb-4 md:mb-0 flex gap-2 items-center'>
          Accountant Status :
          <Button
            type='button'
            className={`text-white rounded ${
              acctSinglePr?.accountant_decison === "Pending"
                ? "bg-[#3771C8]"
                : "bg-[#049805]"
            }`}
          >
            {acctSinglePr?.accountant_decison}
          </Button>
        </p>
        <p className='flex gap-2 items-center'>
          Mgt Status:
          <Button
            type='button'
            className={`text-white rounded ${
              acctSinglePr?.mgt_decision === "Approved"
                ? "bg-[#049805]"
                : "bg-[#3771C8]"
            }`}
          >
            {acctSinglePr?.mgt_decision}
          </Button>
        </p>
      </div>

      {/* Table */}
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full max-w-5xl mb-4 overflow-x-auto table-responsive'>
          <Table
            headerContent={tableHeader}
            minSize={"700px"}
            cols={4}
            showSearch={false}
          >
            {acctSinglePr?.purchase_request_items &&
              acctSinglePr.purchase_request_items.map((item, index) => (
                <div key={item.id}>
                  <SingleAcctview item={item} index={index} />
                  <hr className='my-4 border-green-50' />
                </div>
              ))}

            {/* Totals row */}
            <div className='grid text-sm grid-cols-4 gap-2 font-bold'>
              <div></div> {/* Empty cell for S/N */}
              <div></div> {/* Empty cell for Details */}
              <div className='px-'>Total</div>
              <div className='px-'>₦{totalAmount.toLocaleString()}</div>
            </div>
          </Table>
        </div>
      </div>
      <div className='flex justify-around items-center'>
        <Button
          onClick={() =>
            approveRequest(acctSinglePr?.id, { status: "approved" })
          }
          // onClick={()=>setShowOtpCard(true)}
          className={`bg-green-500`}
        >
          Approve Purchase Request
        </Button>
        {isLoading && <Spinner />}
        <Button
          onClick={() =>
            approveRequest(acctSinglePr?.id, { status: "rejected" })
          }
          // loadingState={isLoading}
          className={`bg-red-500`}
        >
          Reject Purchase Request{" "}
        </Button>
      </div>
      <ToastContainer />

      {showOtpCard ? <OtpModal setShowOtpCard={setShowOtpCard} transferCode={transferCode}/> : null}
    
    </div>
  );
};

export default AcctAllPrView;
