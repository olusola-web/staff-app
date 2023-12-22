import React, { useState, useEffect } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button/ButtonReusable";
import DeleteModal from "../../Assets/Images/deleteModal.png";

const LeaveOffRequest = () => {
  const [showForm, setShowForm] = useState(true);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    leaveType: "Leave",
    startDate: "",
    endDate: "",
    status: "Pending",
  });

  const [expandedRequest, setExpandedRequest] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    // Load leave requests from localStorage on component mount
    const storedLeaveRequests =
      JSON.parse(localStorage.getItem("leaveRequests")) || [];
    setLeaveRequests(storedLeaveRequests);
  }, []);

  useEffect(() => {
    // Save leave requests to localStorage whenever leaveRequests changes
    localStorage.setItem("leaveRequests", JSON.stringify(leaveRequests));
  }, [leaveRequests]);

  const handleInputChange = (e) => {
    setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
  };

  const handleCreateRequest = () => {
    if (!newRequest.startDate || !newRequest.endDate) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (new Date(newRequest.startDate) > new Date(newRequest.endDate)) {
      alert("End date must be after the start date.");
      return;
    }

    setLeaveRequests([{ ...newRequest, id: Date.now() }, ...leaveRequests]);

    setNewRequest({
      leaveType: "Leave",
      startDate: "",
      endDate: "",
      status: "Pending",
    });

    setShowForm(false);
  };


  const handleCancel = () => {
    setShowForm(true);
  };

  const handleDelete = (id, date) => {
    setDeleteConfirmation({ id, date });
  };

  const confirmDelete = () => {
    setLeaveRequests(
      leaveRequests.filter((request) => request.id !== deleteConfirmation.id)
    );

    // This Sets showForm to true after confirming the deletion
    setShowForm(true);

    setDeleteConfirmation(null);
  };

  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const getPendingRequestsCount = () => {
    return leaveRequests.filter((request) => request.status === "Pending")
      .length;
  };

  const getApprovedRequestsCount = () => {
    return leaveRequests.filter((request) => request.status === "Approved")
      .length;
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  const getDayPosition = (day) => {
    day = parseInt(day, 10);

    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const generateCardContent = (request) => {
    const leaveTypeText = request.leaveType === "Leave" ? "leave" : "off";
    const article = leaveTypeText === "off" ? "an" : "a";

    const startDate = new Date(request.startDate);
    const dayOfMonth = startDate.getDate();
    const position = getDayPosition(dayOfMonth);

    const formattedDate = `${startDate.toLocaleDateString("en-GB", {
      weekday: "long",
    })} ${position} ${startDate.toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
    })}`;

    return `You requested for ${article} ${leaveTypeText} on ${formattedDate}`;
  };

  const handleCardClick = (id) => {
    setExpandedRequest((prevExpandedRequest) =>
      prevExpandedRequest === id ? null : id
    );
  };

  return (
    <div className="mx-auto mt-0 p-4 bg-white">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-6 mb-5 ">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]">Leave/Off Request</p>
        </div>
      </div>

      {showForm && leaveRequests.length === 0 && (
        <form className="flex justify-center pt-14">
          <div className="flex flex-col w-full md:w-[60%] gap-5">
            <div className="flex flex-col">
              <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
                Select the Request you would like to apply for
              </label>
              <select
                className="w-full px-4 py-3 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-green-600 hover:border-green-400"
                name="leaveType"
                value={newRequest.leaveType}
                onChange={handleInputChange}>
                <option value="Leave">Leave</option>
                <option value="Off">Off</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
                Off Start Date
              </label>
              <input
                className="w-full px-4 py-2 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-green-600 hover:border-green-400"
                type="date"
                name="startDate"
                value={newRequest.startDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
                Off End Date
              </label>
              <input
                className="w-full px-4 py-2 text-md  text-gray-700 bg-white border-2 border-grey-300 rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white focus:border-green-600 hover:border-green-400"
                type="date"
                name="endDate"
                value={newRequest.endDate}
                onChange={handleInputChange}
                min={newRequest.startDate}
              />
            </div>

            <Button
              className="w-full px-4 py-2 text-md  bg-[#049005]  rounded transition ease-in-out outline-none focus:text-grey-700 focus:bg-white hover:bg-green-700 hover:font-bold"
              onClick={handleCreateRequest}>
              Submit
            </Button>
          </div>
        </form>
      )}

      {(!showForm || leaveRequests.length > 0) && (
        <div>
          <div className="p-4">
            <h2 className="text-2xl text-[#1F1E1E] font-semibold text-center mb-6">
              Leave/Off Request{" "}
              <span className="text-[#3771C8]">
                ({getPendingRequestsCount()})
              </span>
            </h2>
            {leaveRequests
              .filter((request) => request.status === "Pending")
              .map((request) => (
                <div
                  key={request.id}
                  className={`mb-4 p-4 bg-[#F8F8F8] ${
                    expandedRequest === request.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleCardClick(request.id)}>
                  <div className="flex justify-between items-center">
                    <p className="cursor-pointer font-semibold text-xl">
                      {generateCardContent(request)}
                    </p>
                    <div className="flex gap-5 items-center">
                      <RiDeleteBin6Line
                        onClick={() =>
                          handleDelete(request.id, request.startDate)
                        }
                        className="cursor-pointer text-[#E13535] text-lg"
                      />
                      <p className="bg-[#3771C8] text-white p-3 rounded-md">
                        {request.status}
                      </p>
                    </div>
                  </div>
                  {expandedRequest === request.id && (
                    <div>
                      <p>Type: {request.leaveType}</p>
                      <p>Start Date: {formatDate(request.startDate)}</p>
                      <p>End Date: {formatDate(request.endDate)}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className=" p-4">
            <h2 className="text-2xl text-[#1F1E1E] font-semibold text-center mb-6">
              Approved Requests{" "}
              <span className="text-[#049805]">
                ({getApprovedRequestsCount()})
              </span>
            </h2>
            {leaveRequests
              .filter((request) => request.status === "Approved")
              .map((request) => (
                <div
                  key={request.id}
                  className={`mb-4 p-4 bg-[#F8F8F8] ${
                    expandedRequest === request.id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleCardClick(request.id)}>
                  <div className="flex justify-between items-center">
                    <p className="cursor-pointer font-semibold text-xl">
                      {generateCardContent(request)}
                    </p>
                    <div className="flex gap-5 items-center">
                      <RiDeleteBin6Line
                        onClick={() =>
                          handleDelete(request.id, request.startDate)
                        }
                        className="cursor-pointer text-[#E13535] text-lg"
                      />
                      <p className="bg-[#049805] text-white p-3 rounded-md">
                        {request.status}
                      </p>
                    </div>
                  </div>
                  {expandedRequest === request.id && (
                    <div>
                      <p>Name: {request.name}</p>
                      <p>Type: {request.leaveType}</p>
                      <p>Start Date: {formatDate(request.startDate)}</p>
                      <p>End Date: {formatDate(request.endDate)}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div className="p-5 overflow-hidden fixed inset-0 z-10 flex flex-col items-center justify-center bg-white h-[100vh] gap-8">
          <img
            src={DeleteModal}
            alt="Delete Modal"
            className="w-[80%] md:w-[30%]"
          />
          <p className="text-[#1F1E1E] text-center text-lg font-medium">
            Do you want to delete the leave request you scheduled for{" "}
            {formatDate(deleteConfirmation.date)}?
          </p>
          <div className="flex md:gap-32 gap-14">
            <Button
              className="bg-[#D9D9D9] text-[black] font-medium"
              onClick={cancelDelete}>
              Cancel
            </Button>
            <Button
              className="bg-[#FF0036] font-medium"
              onClick={confirmDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaveOffRequest;

// TRYING IF I CAN SET IT UP FOR API CONSUMPTION

// import React, { useState, useEffect } from 'react';
// import { FaHome, FaChevronRight } from 'react-icons/fa';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import Button from '../Button/ButtonReusable';
// import DeleteModal from '../../Assets/Images/deleteModal.png';

// const LeaveOffRequest = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [leaveRequests, setLeaveRequests] = useState([]);
//   const [newRequest, setNewRequest] = useState({
//     name: '',
//     leaveType: 'Leave',
//     startDate: '',
//     endDate: '',
//     status: 'Pending',
//   });

//   const [expandedRequest, setExpandedRequest] = useState(null);
//   const [deleteConfirmation, setDeleteConfirmation] = useState(null);

//   const isAdmin = true;

//   useEffect(() => {
//     fetch('api_endpoint')
//       .then((response) => response.json())
//       .then((data) => setLeaveRequests(data))
//       .catch((error) => console.error('Error fetching leave requests:', error));
//   }, []);

//   const handleInputChange = (e) => {
//     setNewRequest({ ...newRequest, [e.target.name]: e.target.value });
//   };

//   const sendLeaveRequest = async () => {
//     try {
//       const response = await fetch('api_endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newRequest),
//       });

//       if (response.ok) {
//         setLeaveRequests([...leaveRequests, newRequest]);
//         setShowForm(false);

//       } else {
//         console.error('Failed to create leave request');
//       }
//     } catch (error) {
//       console.error('Error creating leave request:', error);
//     }
//   };

//   const handleCreateRequest = () => {
//     if (!newRequest.name || !newRequest.startDate || !newRequest.endDate) {
//       alert('Please fill in all fields before submitting.');
//       return;
//     }

//     if (new Date(newRequest.startDate) > new Date(newRequest.endDate)) {
//       alert('End date must be after the start date.');
//       return;
//     }

//     sendLeaveRequest();
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//   };

//   const handleDelete = (id, date) => {
//     setDeleteConfirmation({ id, date });
//   };

//   const confirmDelete = () => {
//     fetch(`api_endpoint/${deleteConfirmation.id}`, {
//       method: 'DELETE',
//     })
//     .then(() => {
//       // Update local state
//       setLeaveRequests(leaveRequests.filter((request) => request.id !== deleteConfirmation.id));
//       // Close confirmation modal
//       setDeleteConfirmation(null);
//     })
//     .catch((error) => {
//       console.error('Error deleting request:', error);
//     });
//   };

//   const cancelDelete = () => {
//     // Close the delete confirmation
//     setDeleteConfirmation(null);
//   };

//   const approveRequest = async (id) => {
//     try {
//       const response = await fetch(`api_endpoint/${id}`, {
//         method: 'POST',
//       });

//       if (response.ok) {

//         setLeaveRequests(
//           leaveRequests.map((request) =>
//             request.id === id ? { ...request, status: 'Approved' } : request
//           )
//         );

//       } else {
//         console.error('Failed to approve leave request');
//       }
//     } catch (error) {
//       console.error('Error approving leave request:', error);
//     }
//   };

//   const getPendingRequestsCount = () => {
//     return leaveRequests.filter((request) => request.status === 'Pending').length;
//   };

//   const getApprovedRequestsCount = () => {
//     return leaveRequests.filter((request) => request.status === 'Approved').length;
//   };

//   const formatDate = (dateString) => {
//     const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB', options);
//   };

//   const getDayPosition = (day) => {
//     day = parseInt(day, 10);

//     if (day >= 11 && day <= 13) {
//       return `${day}th`;
//     }

//     const lastDigit = day % 10;
//     switch (lastDigit) {
//       case 1:
//         return `${day}st`;
//       case 2:
//         return `${day}nd`;
//       case 3:
//         return `${day}rd`;
//       default:
//         return `${day}th`;
//     }
//   };

//   const generateCardContent = (request) => {
//     const leaveTypeText = request.leaveType === 'Leave' ? 'leave' : 'off';
//     const article = leaveTypeText === 'off' ? 'an' : 'a';

//     const startDate = new Date(request.startDate);
//     const dayOfMonth = startDate.getDate();
//     const position = getDayPosition(dayOfMonth);

//     const formattedDate = `${startDate.toLocaleDateString('en-GB', { weekday: 'long' })} ${position} ${startDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}`;

//     return `You requested for ${article} ${leaveTypeText} on ${formattedDate}`;
//   };

//   const handleCardClick = (id) => {
//     setExpandedRequest((prevExpandedRequest) =>
//       prevExpandedRequest === id ? null : id
//     );
//   };

//   return (
//     <div className="mx-auto mt-0 p-4 bg-white">
//       <div className="p-2 flex flex-col md:flex-row justify-between items-center">
//         <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5">
//           <FaHome className="m-0" />
//           <p className="text-black">Home</p>
//           <FaChevronRight className="m-1 text-[#049805]" />
//           <p className="text-[#049805]">Leave/Off Request</p>
//         </div>
//         <button
//           className="bg-[#049005] text-white rounded-md p-2"
//           onClick={() => setShowForm(true)}
//         >
//           Create New Request
//         </button>
//       </div>

//       {showForm && (
//         <form className="flex justify-center pt-5">
//           <div className="flex flex-col w-full md:w-[60%] gap-5">
//             <div className="flex flex-col">
//               <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
//                 Select the Request you would like to apply for
//               </label>
//               <select
//                 className="p-2 bg-[#D9D9D933] rounded-lg text-lg"
//                 name="leaveType"
//                 value={newRequest.leaveType}
//                 onChange={handleInputChange}
//               >
//                 <option value="Leave">Leave</option>
//                 <option value="Off">Off</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
//                 Enter your Name
//               </label>
//               <input
//                 className="p-2 bg-[#D9D9D933] rounded-lg text-lg"
//                 type="text"
//                 name="name"
//                 value={newRequest.name}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
//                 Off Start Date
//               </label>
//               <input
//                 className="p-2 bg-[#D9D9D933] rounded-lg text-lg"
//                 type="date"
//                 name="startDate"
//                 value={newRequest.startDate}
//                 onChange={handleInputChange}
//                 min={new Date().toISOString().split('T')[0]}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="font-semibold text-lg md:text-xl text-[#1f1e1e] mb-2">
//                 Off End Date
//               </label>
//               <input
//                 className="p-2 bg-[#D9D9D933] rounded-lg text-lg"
//                 type="date"
//                 name="endDate"
//                 value={newRequest.endDate}
//                 onChange={handleInputChange}
//                 min={newRequest.startDate}
//               />
//             </div>

//             <Button onClick={handleCreateRequest}>Submit</Button>
//             <Button onClick={handleCancel}>Cancel</Button>
//           </div>
//         </form>
//       )}

//       {!showForm && leaveRequests.length > 0 && (
//         <div>
//           <div className="p-4">
//             <h2 className="text-2xl text-[#1F1E1E] font-semibold text-center mb-6">
//               Leave/Off Request{' '}
//               <span className="text-[#3771C8]">
//                 ({getPendingRequestsCount()})
//               </span>
//             </h2>
//             {leaveRequests
//               .filter((request) => request.status === 'Pending')
//               .map((request) => (
//                 <div
//                   key={request.id}
//                   className={`mb-4 p-4 bg-[#F8F8F8] ${
//                     expandedRequest === request.id ? 'bg-gray-200' : ''
//                   }`}
//                   onClick={() => handleCardClick(request.id)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <p className="cursor-pointer font-semibold text-xl">
//                       {generateCardContent(request)}
//                     </p>
//                     <div className="flex gap-5 items-center">
//                       <RiDeleteBin6Line
//                         onClick={() => handleDelete(request.id, request.startDate)}
//                         className="cursor-pointer text-[#E13535] text-lg"
//                       />
//                       <p className="bg-[#3771C8] text-white p-3 rounded-md">
//                         {request.status}
//                       </p>
//                     </div>
//                   </div>
//                   {expandedRequest === request.id && (
//                     <div>
//                       <p>Name: {request.name}</p>
//                       <p>Type: {request.leaveType}</p>
//                       <p>Start Date: {formatDate(request.startDate)}</p>
//                       <p>End Date: {formatDate(request.endDate)}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//           </div>

//           <div className=" p-4">
//             <h2 className="text-2xl text-[#1F1E1E] font-semibold text-center mb-6">
//               Approved Requests{' '}
//               <span className="text-[#049805]">
//                 ({getApprovedRequestsCount()})
//               </span>
//             </h2>
//             {leaveRequests
//               .filter((request) => request.status === 'Approved')
//               .map((request) => (
//                 <div
//                   key={request.id}
//                   className={`mb-4 p-4 bg-[#F8F8F8] ${
//                     expandedRequest === request.id ? 'bg-gray-200' : ''
//                   }`}
//                   onClick={() => handleCardClick(request.id)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <p className="cursor-pointer font-semibold text-xl">
//                       {generateCardContent(request)}
//                     </p>
//                     <div className="flex gap-5 items-center">
//                       <RiDeleteBin6Line
//                         onClick={() => handleDelete(request.id, request.startDate)}
//                         className="cursor-pointer text-[#E13535] text-lg"
//                       />
//                       <p className="bg-[#049805] text-white p-3 rounded-md">
//                         {request.status}
//                       </p>
//                     </div>
//                   </div>
//                   {expandedRequest === request.id && (
//                     <div>
//                       <p>Name: {request.name}</p>
//                       <p>Type: {request.leaveType}</p>
//                       <p>Start Date: {formatDate(request.startDate)}</p>
//                       <p>End Date: {formatDate(request.endDate)}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}

//       {!showForm && leaveRequests.length === 0 && (
//         <div className="flex justify-center items-center h-[40vh]">
//           <p className="text-[#00000080]">You have 0 leave/off requests</p>
//         </div>
//       )}

//       {deleteConfirmation && (
//         <div className="p-5 overflow-hidden fixed inset-0 z-10 flex flex-col items-center justify-center bg-white h-[100vh] gap-8">
//           <img
//             src={DeleteModal}
//             alt="Delete Modal"
//             className="w-[80%] md:w-[30%]"
//           />
//           <p className="text-[#1F1E1E] text-center text-lg font-medium">
//             Do you want to delete the leave request you scheduled for{' '}
//             {formatDate(deleteConfirmation.date)}?
//           </p>
//           <div className="flex md:gap-32 gap-14">
//             <Button
//               className="bg-[#D9D9D9] text-[black] font-medium"
//               onClick={cancelDelete}
//             >
//               Cancel
//             </Button>
//             <Button className="bg-[#FF0036] font-medium" onClick={confirmDelete}>
//               Delete
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LeaveOffRequest;
