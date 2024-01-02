import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../../context/StateContext";
import axios from 'axios'; 


const MyDataTable = ({ data }) => {
  const {  baseUrl, config } = useStateContext()
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

const handleDelete = (id) => {
  setSelectedId(id);
  setModalOpen(true);
};

const confirmDelete = async () => {
  setModalOpen(false);
  setIsLoading(true); // Start loading

  try {
    // Perform the DELETE request
    const response = await axios.delete(`${baseUrl}/delete-purchase-request/${selectedId}`, config());
    if (response.data.status) {
      // Remove row from DataTable
      $("#myTable").DataTable().row($(`button[data-id='${selectedId}']`).parents('tr')).remove().draw();
    } else {
      // Handle response with error
      setErrorMessage('Failed to delete the purchase request.');
    }
  } catch (error) {
    // Handle HTTP errors
    setErrorMessage('An error occurred while deleting the purchase request.');
  }

  setIsLoading(false); // End loading
};

  useEffect(() => {
    const table = $("#myTable").DataTable({
      data: data,
      columns: [
        { title: "S/N", data: "serialNumber" },
        { title: "Item Name", data: "itemName" },
        { title: "Purchase Request Number", data: "purchaseRequestNumber" },
        { title: "Amount", data: "amount" },
        {
          title: "Status",
          data: "status",
          render: function (data, type, row) {
            if (data === "Pending") {
              return `<span class="bg-green-500 text-white rounded-md px-2 py-1">${data}</span>`;
            } else if (data === "Approved") {
              return `<span class="bg-blue-500 text-white rounded-md px-2 py-1">${data}</span>`;
            } else {
              return data;
            }
          },
        },
        {
          title: "Action",
          data: null,
          render: function (data, type, row) {
            return `<button class='view-btn bg-blue-500 text-white rounded-md px-2 py-1' data-id='${row.id}'>View</button>`;
          },
        },
        {
          title: "Delete",
          data: null,
          render: function (data, type, row) {
            return `<button class='delete-btn bg-red-500 text-white rounded-md px-2 py-1' data-id='${row.id}'>Delete</button>`;
          },
        },
      ],
    });

    $('#myTable').on('click', 'button.view-btn', function () {
      const id = $(this).data('id');
      navigate(`/home/purchaserequest/view/${id}`);
    });

    $('#myTable').on('click', 'button.delete-btn', function () {
      const id = $(this).data('id');
      handleDelete(id);
    });

    return () => {
      table.destroy();
    };
  }, [data, navigate]);

  return (
    <>
    <table id="myTable" className="display"></table>
    {isModalOpen && (
      <>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(5px)', zIndex: 4000 }}></div>
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '30px', zIndex: 5000 }}>
          <p className="p-3">Are you sure you want to delete this item?</p>
          <div className="flex justify-around">
            <button onClick={confirmDelete} className="bg-red-500 rounded-md p-2 text-white">Yes</button>
            <button onClick={() => setModalOpen(false)} className="bg-blue-500 rounded-md p-2 text-white">No</button>
          </div>
        </div>
      </>
      )}
           {isLoading && <div>Loading...</div>} {/* Loading indicator */}
      {errorMessage && <div>{errorMessage}</div>} {/* Error message display */}
  </>
);
};

export default MyDataTable;
