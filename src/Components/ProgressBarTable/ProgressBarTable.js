import React from "react";
import Table from "../../Utils/Table";
import Singletable from "./Singletable";

const tableHeader = ["Date", "Details", "Point"];

const ProgressBarTable = () => {

  const displayedData = [
    { id: 1, date: "2023-01-01", details: "Absent from work", point: 0.5 },
    { id: 2, date: "2023-01-02", details: "vey sick", point: 20 },
    { id: 3, date: "2023-01-03", details: "i no work again", point: 30 },
  ];

  return (
    <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
      <Table
        headerContent={tableHeader}
        minSize={"300px"}
        cols={3} 
        data={displayedData}
        showSearch={false}
        searchKey=""
      >
        {displayedData.map((item, index) => (
          <div key={item.id}>
            <Singletable
              item={item}
              index={index}
          
            />
            <hr className="my-4 border-green-50" />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default ProgressBarTable;
