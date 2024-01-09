import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/ButtonReusable";
import logo from "../../Assets/Images/logo.png";

const AcctAllPrView = () => {
  const { acctSinglePr, setAcctSinglePr, getacctSinglePr } = useStateContext();
  const { id } = useParams();
  const baseUrl = "https://sandbox.myafrimall.com.ng";

  useEffect(() => {
    const fetchSinglePurchaseReq = async () => {
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
      fetchSinglePurchaseReq();
    }
  }, [id]);

  if (!acctSinglePr) {
    return <div className="text-center p-8">Loading...</div>;
  }

  const handlePrint = () => {
    window.print();
  };

  const getStatusBgClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-gree-500 text-white rounded px-1 py-1";
      case "approved":
        return "bg-blue-500 text-white rounded px-1 py-1";
      default:
        return "";
    }
  };

  const imageUrl = baseUrl + acctSinglePr?.proof_of_reclaim;

  return (
    <div>
      <div className="p-6 text-center flex justify-between item-center">
        <Link to="/home/allpendingpurchasereq">
          <FaArrowLeft />
        </Link>

        <p className="text-center font-bold">View Purchase Request</p>
        <Button
          onClick={handlePrint}
          type="button"
          className="bg-[#76413B] text-white rounded"
        >
          Print
        </Button>
      </div>
      <div className="px-4 sm:px-8 md:px-14">
        <img src={logo} alt="logo" className="w-40 md:w-60" />
      </div>
      <div className="flex flex-col md:flex-row justify-around p-12 leading-loose">
        <div className="md:text-left text-center">
          <div className="flex gap-2">
            Accountant Status:
            <Button>
              <span
                className={getStatusBgClass(acctSinglePr.accountant_decison)}
              >
                {acctSinglePr.accountant_decison}
              </span>
            </Button>
          </div>
          <p>
            Staff Name: {acctSinglePr.user?.firstname}{" "}
            {acctSinglePr.user?.lastname}
          </p>
          <p>PR Number: {acctSinglePr.Pr_Number}</p>
          {acctSinglePr.purchase_request_items &&
            acctSinglePr.purchase_request_items.map((item) => (
              <div key={item.id}>
                <p>Description: {item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₦{item.price}</p>
              </div>
            ))}
        </div>
        <div className="md:text-left text-center mt-4 md:mt-0">
          <div className="flex gap-2">
            Management Status:
            <Button>
              <span className={getStatusBgClass(acctSinglePr.mgt_decision)}>
                {acctSinglePr.mgt_decision}
              </span>
            </Button>
          </div>
          <p>Amount: ₦{acctSinglePr.total_amount}</p>
          <p>
            Date of Expense:{" "}
            {new Date(acctSinglePr.date_of_expenses).toLocaleDateString()}
          </p>
        </div>
        <div className="text-center">
          <p>Uploaded Receipt:</p>
          {acctSinglePr.proof_of_reclaim && (
            <img src={imageUrl} alt="Receipt" className="w-32 h-28 mx-auto" />
          )}
        </div>
      </div>
      <div className="flex justify-around items-center">
        <Button className={`bg-green-500`}>Approve Purchase Request</Button>
        <Button className={`bg-red-500`}>Reject Purchase Request </Button>
      </div>
    </div>
  );
};

export default AcctAllPrView;
