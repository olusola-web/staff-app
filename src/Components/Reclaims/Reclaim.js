import React, { useEffect, useContext } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContext"; 
import { useNavigate } from 'react-router-dom';

const Reclaim = () => {
  const { allReclaim, GetAllReclaims } = useStateContext();
  const navigate = useNavigate();
  useEffect(() => {
    GetAllReclaims();
  }, []);

  useEffect(() => {
    if (allReclaim.length > 0 && !$.fn.DataTable.isDataTable('#reclaimTable')) {
      const table = $('#reclaimTable').DataTable({
        data: allReclaim.map((item, index) => ([
          index + 1,
          `${item.user.firstname} ${item.user.lastname}`,
          item.reclaim_number,
          item.amount_to_reclaim,
          `<button class='view-btn bg-blue-500 text-white rounded px-2 py-1' data-id='${item.id}'>View</button>` // Button with data-id
        ])),
        columns: [
          { title: 'S/N' },
          { title: 'Staff Name' },
          { title: 'Reclaim Number' },
          { title: 'Amount' },
          { title: 'Action' }
        ],
        // Other DataTable options
        searching: true,
        paging: true,
        pageLength: 10
      });
       // Event listener for the 'View' button click
       $('#reclaimTable tbody').on('click', 'button.view-btn', function() {
        const id = $(this).data('id');
        navigate(`/home/reclaim/view/${id}`);
      });
    
    }

    return () => {
      if ($.fn.DataTable.isDataTable('#reclaimTable')) {
        $('#reclaimTable').DataTable().destroy();
      }
    };
  }, []); // Depend on allReclaim to reinitialize DataTable

  return (
    <div className="mx-auto mt-0 p-4 bg-white min-h-screen flex flex-col justify-between">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]">Reclaim</p>
        </div>
        <div>
          <Link
            to="/home/reclaim/reclaimrequest"
            className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center"
          >
            Create Reclaim Request
          </Link>
        </div>
      </div>

      <div className="p-4">
        <table id="reclaimTable" className="display"></table>
      </div>
    </div>
  );
};

export default Reclaim;
