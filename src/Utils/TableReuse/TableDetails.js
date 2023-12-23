import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { useNavigate } from 'react-router-dom';



const MyDataTable = ({ data }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const table = $("#myTable").DataTable({
      data: data,
      columns: [
        { title: "S/N", data: "serialNumber" },
        { title: "Item Name", data: "itemName" },
        { title: "Purchase Request Number", data: "purchaseRequestNumber", className:""},
        { title: "Amount", data: "amount", className:"" },
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
          data: "null",
          render: function (data, type, row) {
           return `<button class='view-btn' data-id='${row.id}'>View</button>`; // Added button with a class 'view-btn' and data-id attribute
          },
        },
      ],
      columnDefs: [
        {
          targets: 1, // This targets the second column (zero-based index), i.e., "Item Name"
          width: "30%", // You can set this to the width you desire
        },
      ],
      // Other DataTable options...
    });

     // Event listener for the 'View' button click
     $('#myTable').on('click', 'button.view-btn', function () {
      const id = $(this).data('id');
      navigate(`/home/purchaserequest/view/${id}`);
    });

    return () => {
      table.destroy();
    };
  }, [data]);

  return <table id="myTable" className="display"></table>;
};

export default MyDataTable;
