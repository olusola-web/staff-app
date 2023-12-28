import React from "react";
import Table from "../../Utils/Table";
import SingleLeaveTable from "./SingleLeaveTable";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import Button from "../Button/ButtonReusable";

const tableHeader = ["S/N", "Request Type", "Start Date", "End Date"];

const LeaveTable = () => {
    const displayedData = [
        { id: 1, SN: "Leave", startDate: "2023-01-01", endDate: "2023-01-01" },
        { id: 2, SN: "Off", startDate: "2023-01-02", endDate: "2023-01-02" },
        { id: 3, SN: "Leave", startDate: "2023-01-03", endDate: "2023-01-03" },
    ];


    return (
      <div>
        <div className="p-2 flex flex-col md:flex-row justify-between items-center my-4">
          <div className="flex gap-2 items-center md:mb-0 pt-6 mb-5 ">
            <FaHome className="m-0" />
            <p className="text-black">Home</p>
            <FaChevronRight className="m-1 text-[#049805]" />
            <p className="text-[#049805]">Leave/Off Request</p>
          </div>
          <Link to="/home/leaverequestpage">
            <Button className="hover:bg-green-600 hover:font-bold mr-7">Create Leave/off request</Button>
          </Link>
        </div>

        <div className="w-full max-w-5xl my-14 overflow-x-auto table-responsive ml-5">
          <Table
            headerContent={tableHeader}
            minSize={"1000px"}
            cols={4}
            data={displayedData}
            showSearch={false}
            searchKey="">
            {displayedData.length === 0 ? (
              <p>You have 0 leave/off requests</p>
            ) : (
              displayedData.map((item, index) => (
                <div key={item.id}>
                  <SingleLeaveTable item={item} index={index} />
                  <hr className="my-4 border-green-50" />
                </div>
              ))
            )}
          </Table>
        </div>
      </div>
    );
}
export default LeaveTable;

//  {
//    displayedData.map((item, index) => (
//      <div key={item.id}>
//        <SingleLeaveTable item={item} index={index} />
//        <hr className="my-4 border-green-50" />
//      </div>
//    ));
//  }
