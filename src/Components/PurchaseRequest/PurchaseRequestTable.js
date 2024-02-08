import React, { useState} from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Table from "../../Utils/Table";
import Button from "../Button/ButtonReusable";
import SinglePurchaseRequest from "./SinglePurchaseRequest";
import { useStateContext } from "../../context/StateContext";
import { Spinner } from "react-activity";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';




const tableHeader = [
  <th className="py-3 px-6">S/N</th>,
  <th className="py-3 px-4">Description</th>,
  <th className="py-3 px-4">Quantity</th>,
  <th className="py-3 px-4">Unit Price</th>,
  <th className="py-3 px-6">Action</th>,
];

const PurchaseRequestTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { purchaseRequests, setPurchaseRequests, baseUrl, config, getDashboardDetails } = useStateContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newData = purchaseRequests.filter((item,index) => index !== id);
    setPurchaseRequests(newData);
    // console.log(newData)
  };

  const totalAmount = purchaseRequests.reduce((acc, item) => {
    return acc + (parseInt(item.quantity, 10) * parseInt(item.price, 10));
  }, 0);

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
  
    const details = purchaseRequests.map(item => ({
      description: item.description,
      quantity: item.quantity,
      price: item.price
    }));
  
    const data = {
      total_amount: totalAmount.toString(),
      details: details
    };
  
    try {
      const response = await axios.post(`${baseUrl}/create-purchase-request`, data, config());
      // console.log("Response Data:", response.data);
      setPurchaseRequests([]);
      getDashboardDetails() // auto update
      toast.success("Purchase request submitted successfully!", {
        autoClose: 5000 // 5000 milliseconds = 5 seconds
      });
      // Delay navigation to allow the toast to be displayed
    setTimeout(() => {
      navigate('/home/purchaserequest');
    }, 2000);
    } catch (error) {
      // console.error("Error submitting purchase request:", error);
      toast.error(error.response.data?.message);
    } finally {
      setIsLoading(false); // Stop loading regardless of the outcome
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"1200px"}
          cols={5}
          data={purchaseRequests}
          showSearch={false}
          searchKey=""
        >
          {purchaseRequests.map((item, index) => (
            <div key={item.id}>
              <SinglePurchaseRequest
                item={item}
                index={index}
                onDelete={handleDelete}
              />
              <hr className="my-4 border-green-50" />
            </div>
          ))}
          {/* Totals row */}
          <div className="grid text-sm grid-cols-5 gap-2 font-bold">
            <div></div> {/* Empty cell for description */}
            <div></div> {/* Empty cell for action */}
            <div className="px-6">Total</div>
            <div className="px-3">₦{totalAmount.toLocaleString()}</div>
            <div></div> {/* Empty cell for action */}
          </div>
        </Table>
      </div>
      {purchaseRequests.length > 0 && ( // Conditionally render the button
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-2">
          <Button
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full bg-[#049805] text-white rounded"
          >
            {isLoading ? <Spinner /> : "  Submit Purchase Request"}
          </Button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PurchaseRequestTable;
