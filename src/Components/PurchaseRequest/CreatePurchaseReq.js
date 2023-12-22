import React, { useState } from "react";
import Button from "../Button/ButtonReusable";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import PurchaseRequestTable from "./PurchaseRequestTable";
import { useStateContext } from "../../context/StateContext";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify"; 

const CreatePurchaseReq = () => {
  const {
    formData,
    setFormData,
    token,
    baseUrl,
    config,
    getAllPurchaseReq,
    setAllPurchaseReq,
    isLoading,
    setIsLoading
  } = useStateContext(); // Use useStateContext instead of useContext
  // const [purchaseReq, setPurchaseReq] = useState({
  //   description: "",
  //   Quantity: "",
  //   Amount: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = `${baseUrl}/create-purchase-request`;
    try {
      const res = await axios.post(url, formData, config(token));
      toast.success("created successfully");
      setAllPurchaseReq(prev => [...prev, res.data]);
      getAllPurchaseReq();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row justify-between">
        <div className="flex gap-2 items-center mb-4 md:mb-0">
          <FaHome className="m-1" />
          <p>Home</p>
          <FaChevronRight className="m-1" />
          <p className="text-[#049805]">Purchase Request</p>
        </div>

        <Link
          to="/home/purchaserequest"
          className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center"
        >
          All Purchase Request
              </Link>
            
          </div>
          <p className="flex justify-end items-center px-8">Date:21/11/2023</p>

      <div className="flex items-center justify-center p-3">
        <div className="flex flex-col md:flex-row justify-between"></div>
        <div className="bg-whit rounded shadow-m w-96">
          <div className="text-center p-3">
            <p className="text-2xl font-bold">Purchase Request</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Description:
              </label>
              <input
                type="text"
                id="description"
                value={formData.description}
                name="description"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="What do you want to buy and explain what it will be used for"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Quantity"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Quantity:
              </label>
              <input
                type="text"
                id="Quantity"
                value={formData.quantity}
                name="Quantity"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter the quantity of the item you need"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="Amount"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Amount:
              </label>
              <input
                type="number"
                id="Amount"
                value={formData.price}
                name="Amount"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter the amount of the item"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#049805] text-white p-2 rounded"
            >
              {isLoading ? <Spinner /> :  "Add More" }
            </Button>
          </form>
        </div>
          </div>
          <PurchaseRequestTable/>
    </div>
  );
};

export default CreatePurchaseReq;
