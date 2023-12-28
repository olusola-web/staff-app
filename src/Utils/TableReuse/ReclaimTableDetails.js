import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { useNavigate } from 'react-router-dom';

const DataTable = ({ data }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const table = $("#myTable").DataTable({
      data: data,
      columns: [
        { title: "S/N", data: "serialNumber" },
        { title: "Staff Name", data: "staffName" },
        { title: "Reclaim Number", data: "ReclaimNumber" },
        { title: "Amount", data: "amount" },
        {
          title: "Action",
          data: null,
          render: function (data, type, row) {
            return `<button class='view-btn bg-blue-500 text-white rounded-md px-2 py-1' data-id='${row.id}'>View</button>`;
          },
        },
      ],
      // ... other DataTable options ...
    });

    // Event listener for the 'View' button click
    $('#myTable').on('click', 'button.view-btn', function () {
      const id = $(this).data('id');
      navigate(`/home/purchaserequest/view/${id}`);
    });

    return () => {
      table.destroy();
    };
  }, [data, navigate]);

  return <table id="myTable" className="display"></table>;
};

export default DataTable;
