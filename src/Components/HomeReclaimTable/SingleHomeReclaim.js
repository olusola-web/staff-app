const SingleHomeReclaim = ({ item, index }) => {
  const { reclaim_amount, amount, date, status } = item || {};

  // Determine the Tailwind class based on the status
  const statusClass = status === 'Not granted' 
    ? 'bg-red-500'   // Red background for 'not granted'
    : status === 'Success' 
      ? 'bg-blue-500' // Blue background for 'Success'
      : '';           // Default background for other statuses

  return (
    <div className="grid grid-cols-6 gap-2 font-medium text-sm">
      <div>{index + 1}</div>
      <div>{reclaim_amount}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <div className={`text-white ${statusClass} p-1 rounded`}>{status}</div>
    
    </div>
  );
};

export default SingleHomeReclaim;
