import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Reclaim = () => {
  const {  baseUrl, config } = useStateContext()
  const { allReclaim, GetAllReclaims } = useStateContext();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    GetAllReclaims();
  }, []);

  useEffect(() => {
    if (allReclaim.length > 0 && !$.fn.DataTable.isDataTable("#reclaimTable")) {
      $("#reclaimTable").DataTable({
        data: allReclaim.map((item, index) => [
          index + 1,
          `${item.user.firstname} ${item.user.lastname}`,
          item.reclaim_number,
          item.amount_to_reclaim,
          item.status || "Not Available", // Provide a default value if status is undefined
          `<button class='view-btn bg-blue-500 text-white rounded px-2 py-1' data-id='${item.id}'>View</button>`,
          `<button class='delete-btn bg-red-500 text-white rounded px-2 py-1' data-id='${item.id}'>Delete</button>`,
        ]),
        columns: [
          { title: "S/N" },
          { title: "Staff Name" },
          { title: "Reclaim Number" },
          { title: "Amount" },
          {
            title: "Status",

            render: function (data, type, row) {
              if (data === "Pending") {
                return `<span class="bg-green-500 text-white rounded-md px-2 py-1">${data}</span>`; // Using Tailwind CSS for "Pending"
              } else if (data === "Approved") {
                return `<span class="bg-blue-500 text-white rounded-md px-2 py-1">${data}</span>`; // Tailwind CSS for "Approved"
              } else {
                return `<span>${data}</span>`; // Default for other statuses
              }
            },
          },

          { title: "Action" },
          { title: "Delete" },
        ],
        searching: true,
        paging: true,
        pageLength: 10,
      });

      $("#reclaimTable tbody").on("click", "button.view-btn", function () {
        const id = $(this).data("id");
        navigate(`/home/reclaim/view/${id}`);
      });

      $("#reclaimTable tbody").on("click", "button.delete-btn", function () {
        const id = $(this).data("id");
        setSelectedId(id);
        setModalOpen(true);
      });
    }

    return () => {
      if ($.fn.DataTable.isDataTable("#reclaimTable")) {
        $("#reclaimTable").DataTable().destroy();
      }
    };
  }, [allReclaim, navigate]);

 // handle delete
  const handleDelete = () => {
    setLoading(true);
    setError('');

    axios.delete(`${baseUrl}/delete-reclaim/${selectedId}`, config())
      .then(response => {
        setLoading(false);
        if (response.data.status) {
          $("#reclaimTable")
            .DataTable()
            .row($(`button[data-id='${selectedId}']`).parents("tr"))
            .remove()
            .draw();
        } else {
          setError('Deletion failed: ' + response.data.message);
        }
      })
      .catch(error => {
        setLoading(false);
        setError('Error deleting reclaim: ' + error.message);
      });

    setModalOpen(false);
  };

  return (
    <div className="mx-auto mt-0 p-4 bg-white">
      {/* ... icon & create reclaim ... */}
      
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

      {/* table  */}
      <div className="p-6">
        <table id="reclaimTable" className="display"></table>
      </div>

      {isModalOpen && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: "blur(5px)",
              zIndex: 999,
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <p className="p-3">Are you sure you want to delete this item?</p>
            <div className="flex justify-around">
              <button
                onClick={handleDelete}
                className="bg-red-500 rounded-md p-2 text-white"
              >
                Yes
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-blue-500 rounded-md p-2 text-white"
              >
                No
              </button>
            </div>
          </div>
        </>
      )}
       {isLoading && <div>Loading...</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Reclaim;
