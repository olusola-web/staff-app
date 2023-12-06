import React, { useState, useEffect, useCallback } from "react";
import DataTable from "../../Utils/TableReuse/TableDetails";
import $ from 'jquery';

const PurchaseRequestTable = () => {
  const initialData = [
    {
      id: 1,
      Description: "I would like to get a printer that can be used to print out documents in the office",
      Quantity: "1",
      Amount: "#40000",
      Action: "<button class='delete-btn' data-id='1'>Delete</button>"
    },
    {
      id: 2,
      Description: "I need a new ergonomic office chair for prolonged working hours",
      Quantity: "2",
      Amount: "#15000",
      Action: "<button class='delete-btn' data-id='2'>Delete</button>"
    },
    {
      id: 3,
      Description: "Request for high-quality HDMI cables for conference room setup",
      Quantity: "5",
      Amount: "#5000",
      Action: "<button class='delete-btn' data-id='3'>Delete</button>"
    }
  ].map((item, index) => ({ ...item, serialNumber: index + 1 }));

  const [data, setData] = useState(initialData);

  const calculateTotals = () => {
    let totalQuantity = 0;
    let totalAmount = 0;

    data.forEach(item => {
      totalQuantity += parseInt(item.Quantity, 10);
      totalAmount += parseInt(item.Amount.substring(1), 10); // Remove '#' and convert to number
    });

    return { totalQuantity, totalAmount };
  };

  const { totalQuantity, totalAmount } = calculateTotals();

  const handleDelete = useCallback((id) => {
    const updatedData = data
      .filter(item => item.id !== id)
      .map((item, index) => ({ ...item, serialNumber: index + 1 }));
    setData(updatedData);
  }, [data]);

  useEffect(() => {
    const table = $(`#myTable`).DataTable({
      // DataTables options here
    });

    $(`#myTable tbody`).on('click', 'button.delete-btn', function() {
      const itemId = $(this).data('id');
      handleDelete(itemId);
    });

    return () => {
      if (table) {
        table.destroy();
      }
    };
  }, [data, handleDelete]);

  const columns = [
    { header: "Serial No", key: "serialNumber" },
    { header: "Description", key: "Description" },
    { header: "Quantity", key: "Quantity" },
    { header: "Amount", key: "Amount" },
    { header: "Action", key: "Action" }
  ];

  return (
    <div className="p-6">
      <DataTable
        data={data}
        columns={columns}
        options={{}} // Your DataTable options here
      />

      <div className="totals mt-2">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: #{totalAmount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PurchaseRequestTable;
