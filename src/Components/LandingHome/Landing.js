import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import ReclaimTable from "../HomeReclaimTable/ReclaimTable";
import LeaveRequest from "../LeaveRequestTableHome/LeaveRequest";
import PendingPurchReqHome from "../PendingPurchaseReqHome/PendingPurchReqHome";
import ProgressBarTable from "../ProgressBarTable/ProgressBarTable";
import { useStateContext } from "../../context/StateContext";
import { useEffect } from "react";
import { CgHome } from "react-icons/cg";

const Landing = () => {
  const { getDashboardDetails, dashDetails, isLoading } = useStateContext();
  const {
    total_purchase_request,
    total_reclaim_request,
    total_leave_request,
    total_suggestion,
  } = dashDetails;
  useEffect(() => {
    getDashboardDetails();
  }, []);

  // for the counter
  const reclaimCount = dashDetails?.reclaim_request?.length || 0;
  const leaveCount = dashDetails?.leave_request?.length || 0;
  const prCount = dashDetails?.purchase_request?.length || 0;
  const totalPoint = dashDetails?.total_point?.length || 0;

  return (
    <div>
      <div className="p-3">
        <div className="flex justify-between">
          <div className="flex gap-2 text-[#049805] items-center">
            <CgHome />
            <h1>Home</h1>
          </div>
          <h1 className="text-[#049805]">Total Points : {totalPoint} Pt</h1>
        </div>

        {/* 1st card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center my-12 ">
          <div className=" bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Total Purchase Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">
                {total_purchase_request}
              </p>
              <FaRegMoneyBillAlt className="bg-[#049805]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Reclaim</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">{total_reclaim_request}</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Leave/Off Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">{total_leave_request}</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Complaints/Suggestions</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">{total_suggestion}</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
        </div>

        {/* 2nd card  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center my-12">
          <div className="">
            <div className="flex justify-around items-center pb-6 gap-2 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-20">
              <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl">
                Reclaim
                <span className="absolute top-0 -right-2 md:-right-8 bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
                  {reclaimCount}
                </span>
              </h2>
              <h2 className="text-[#049805] sm:hidden md:block">View all</h2>{" "}
              {/* Make "View all" visible on small screens */}
            </div>

            <div className="text-gray-600 font-bold overflow-x-auto w-full">
              <ReclaimTable />
            </div>
          </div>

          <div className="">
            <div className="flex justify-around items-center pb-6 gap-2 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-20">
              <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl">
                Leave/Off Requests
                <span className="absolute top-0 -right-2 md:-right-8 bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
                  {leaveCount}
                </span>
              </h2>
              <h2 className="text-[#049805] sm:hidden md:block">View all</h2>{" "}
              {/* Make "View all" visible on small screens */}
            </div>

            <div className="text-gray-600 font-bold overflow-x-auto w-full">
              <LeaveRequest />
            </div>
          </div>

          {/* chartjs */}
          <div className="bg-white p-2 rounded-lg shadow-md w-full h-full flex flex-col justify-center items-center">
            <div className="">
              {/* <img src={charts} alt="chart" className="w-[7rem] pb-[5rem]" /> */}
              <div class="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="201"
                  height="199"
                  viewBox="0 0 202 199"
                  fill="none"
                >
                  <path
                    d="M36.7335 104.6C36.7489 122.848 44.0125 140.342 56.9264 153.234C69.8403 166.126 87.3467 173.36 105.594 173.345C123.842 173.33 141.336 166.066 154.229 153.152C167.121 140.238 174.355 122.732 174.34 104.484L147.301 104.507C147.311 115.584 142.919 126.21 135.094 134.049C127.268 141.888 116.648 146.298 105.572 146.307C94.4949 146.316 83.8682 141.925 76.0292 134.099C68.1901 126.273 63.781 115.654 63.7717 104.577L36.7335 104.6Z"
                    fill="#049805"
                  />
                  <path
                    d="M36.7579 104.85C36.748 93.0023 39.3505 81.3232 44.3494 70.7833C49.3483 60.2434 56.5992 51.1469 65.4996 44.2496C74.4001 37.3523 84.6932 32.8533 95.5237 31.1265C106.354 29.3996 117.409 30.4947 127.771 34.3208L119.244 61.3757C112.861 59.0185 106.05 58.3438 99.3771 59.4077C92.7046 60.4716 86.3631 63.2434 80.8797 67.4927C75.3962 71.742 70.929 77.3463 67.8493 83.8398C64.7695 90.3333 63.1661 97.5286 63.1723 104.828L36.7579 104.85Z"
                    fill="#FF0036"
                  />
                  <path
                    d="M126.631 35.0553C140.885 41.3358 153.141 51.5831 161.706 64.3827C170.271 77.1822 174.723 91.9029 174.447 106.513L146.157 103.689C146.327 94.7064 143.589 85.6558 138.323 77.7863C133.058 69.9167 125.522 63.6164 116.758 59.755L126.631 35.0553Z"
                    fill="#FEAE0D"
                  />
                </svg>
              </div>

              <div className="grid gap-4 justify-start item-center ">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className=""
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#049805" />
                  </svg>
                  <p className="">Means you’re safe</p>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FEAE0D" />
                  </svg>
                  <p className="">Be careful! Your’e headed for probation</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#FF0036" />
                  </svg>
                  <p className="">Danger! Probation or Loose your job</p>
                </div>
              </div>
            </div>

            <div className="text-gray-600 font-bold overflow-x-auto w-full">
              {/* <LeaveRequest /> */}
            </div>
          </div>
        </div>
        {/* pending purchase request receipt table home */}

        <div className="flex justify-between items-center pb-6 gap-2 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-20">
          <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl">
            Pending Purchase Request
            <span className="absolute top-0 -right-2 md:-right-8 bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
              {prCount}
            </span>
          </h2>
          <h2 className="text-[#049805] sm:hidden md:block">View PR</h2>{" "}
          {/* Make "View all" visible on small screens */}
        </div>

        <div className="text-gray-600 font-bold overflow-x-auto w-full">
          <PendingPurchReqHome />
          {/* <ProgressBarTable/> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
