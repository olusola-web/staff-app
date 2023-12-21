import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";

const MyDataTable = ({ data }) => {
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
        { title: "Action", data: "action" },
      ],
      columnDefs: [
        {
          targets: 1, // This targets the second column (zero-based index), i.e., "Item Name"
          width: "30%", // You can set this to the width you desire
        },
      ],
      // Other DataTable options...
    });

    return () => {
      table.destroy();
    };
  }, [data]);

  return <table id="myTable" className="display"></table>;
};

export default MyDataTable;
