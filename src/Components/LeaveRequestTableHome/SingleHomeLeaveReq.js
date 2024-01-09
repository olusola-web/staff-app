const SingleHomeLeaveReq = ({ item, index }) => {
  const { request_type, created_at, status } = item || {};

  // Determine the Tailwind class based on the status
  const statusClass = status === 'Pending' 
    ? 'bg-green-500'   // Red background for 'not granted'
    : status === 'Successful' 
      ? 'bg-blue-500' // Blue background for 'Success'
      : 'bg-green-500';           // Default background for other statuses

  return (
    <div className="grid grid-cols-6 gap-2 font-medium text-sm">
      <div>{index + 1}</div>
      <div>{request_type}</div>
      {/* <div>{amount}</div> */}
      <div>{created_at}</div>
      <div className={`text-white ${statusClass} p-2 rounded`}>{status}</div>
    
    </div>
  );
};

export default SingleHomeLeaveReq;
