const SingleHomeReclaim = ({ item, index }) => {
  const { reclaim_number, amount_to_reclaim, date, status } = item || {};

  // Determine the Tailwind class based on the status
  const statusClass = status === 'Not granted' 
    ? 'bg-red-500'   // Red background for 'not granted'
    : status === 'Successful' 
      ? 'bg-blue-500' // Blue background for 'Success'
      : 'bg-green-500';           // Default background for other statuses

  return (
    <div className="grid grid-cols-5 gap-2 font-medium text-sm">
      <div>{index + 1}</div>
      <div>{reclaim_number}</div>
      <div>{amount_to_reclaim}</div>
      <div>{date}</div>
      <div className={`text-white ${statusClass} p-2 rounded`}>{status}</div>
    
    </div>
  );
};

export default SingleHomeReclaim;
