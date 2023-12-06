import React from "react";
import DataTable from "../../Utils/TableReuse/TableDetails";

const PendingPurchaseRequestData = [
  {
    id: 1,
    Description:
      "I would like to get a printer that be used to print out documents in the office",
    Quantity: "1",
    Amount: "#40000",
    Status: "successful",
  },
  {
    id: 2,
    Description:
      "I would like to get a printer that be used to print out documents in the office",
    Quantity: "1",
    Amount: "#40000",
    Status: "successful",
  },
  {
    id: 3,
    Description:
      "I would like to get a printer that be used to print out documents in the office",
    Quantity: "1",
    Amount: "#40000",
    Status: "successful",
  },
];

const PendingPurchaseRequestColumns = [
    { header: 'Serial No', key: 'serialNumber', },
  { header: "Description", key: "Description", className: 'description-cell' },
  { header: "Quantity", key: "Quantity" },
  { header: "Amount", key: "Amount" },
  { header: "Status", key: "Status" },
];

const PendingPurchReqHome = () => {
  // Adding serial numbers to the data
  const dataWithSerialNumber = PendingPurchaseRequestData.map(
    (item, index) => ({
      ...item,
      serialNumber: index + 1,
    })
  );

  return (
    <div className="p-6">
      {/* Pass dataWithSerialNumber instead of PendingPurchaseRequestData */}
      <DataTable
        data={dataWithSerialNumber}
        columns={PendingPurchaseRequestColumns}
      />
    </div>
  );
};

export default PendingPurchReqHome;
