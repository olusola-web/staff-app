import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Button from "../Button/ButtonReusable";
import logo from "../../Assets/Images/logo.png";
import SingleView from "./SingleView";
import Table from "../../Utils/Table";
import { useStateContext } from "../../context/StateContext";

const View = () => {
  const {
    getSinglePurchaseRequest,
    singlePurchaseRequest,
    setSinglePurchaseRequest,
  } = useStateContext();
  // const [purchaseRequest, setPurchaseRequest] = useState(null);
  const { id } = useParams();
  const baseUrl = "https://sandbox.myafrimall.com.ng";
  console.log(singlePurchaseRequest);
  console.log(id);
  useEffect(() => {
    const fetchSinglePurchaseRequest = async () => {
      const data = await getSinglePurchaseRequest(id);

      console.log("Fetched Data:", id);
      setSinglePurchaseRequest(data);
    };
    if (id) {
      fetchSinglePurchaseRequest();
    }
  }, []);

  // Function to format the date
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
    singlePurchaseRequest && singlePurchaseRequest.purchase_request_items
      ? singlePurchaseRequest.purchase_request_items.reduce(
          (total, item) =>
            total + parseInt(item.quantity, 10) * parseInt(item.price, 10),
          0
        )
      : 0;

  //Print
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between p-10">
        <Link to="/home/purchaserequest">
          <FaArrowLeft />
        </Link>

        <p className="text-base md:text-lg lg:text-xl">View Purchase Request</p>

        <Button type="button" className="bg-[#76413B] text-white rounded" onClick={handlePrint}>
          Print
        </Button>
      </div>

      {/* logo */}
      <div className="px-4 sm:px-8 md:px-14">
        <img src={logo} alt="logo" className="w-40 md:w-60" />
      </div>

      {/* PR NO & Date */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-14 py-4 md:py-6">
        <p className="mb-4 md:mb-0">
          PR No : {singlePurchaseRequest?.Pr_Number}
        </p>
        {/* Format date as needed */}
        <p>Date: {formatDate(singlePurchaseRequest?.created_at)}</p>
      </div>

      {/* acct & mgt status */}
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-14 py-2">
        <p className="mb-4 md:mb-0 flex gap-2 items-center">
          Accountant Status :
          <Button
            type="button"
            className={`text-white rounded ${
              singlePurchaseRequest?.accountant_decison === "Pending"
                ? "bg-[#3771C8]"
                : "bg-[#049805]"
            }`}
          >
            {singlePurchaseRequest?.accountant_decison}
          </Button>
        </p>
        <p className="flex gap-2 items-center">
          Mgt Status:
          <Button
            type="button"
            className={`text-white rounded ${
              singlePurchaseRequest?.mgt_decision === "Approved"
                ? "bg-[#049805]"
                : "bg-[#3771C8]"
            }`}
          >
            {singlePurchaseRequest?.mgt_decision}
          </Button>
        </p>
      </div>

      {/* Table */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
          <Table
            headerContent={tableHeader}
            minSize={"1000px"}
            cols={4}
            showSearch={false}
          >
            {singlePurchaseRequest?.purchase_request_items.map(
              (item, index) => (
                <div key={item.id}>
                  <SingleView item={item} index={index} />
                  <hr className="my-4 border-green-50" />
                </div>
              )
            )}
            {/* Totals row */}
            <div className="grid text-sm grid-cols-4 gap-2 font-bold">
              <div></div> {/* Empty cell for S/N */}
              <div></div> {/* Empty cell for Details */}
              <div className="px-">Total</div>
              <div className="px-">₦{totalAmount.toLocaleString()}</div>
            </div>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default View;
