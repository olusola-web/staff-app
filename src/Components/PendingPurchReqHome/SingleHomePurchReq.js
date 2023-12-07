const SingleHomePurchReq = ({ item, index }) => {
  const { description, quantity, amount, status } = item || {};

  // Determine the Tailwind class based on the status
  const statusClass =
    status === "Not granted"
      ? "bg-red-500" // Red background for 'not granted'
      : status === "Success"
      ? "bg-blue-500" // Blue background for 'Success'
      : "bg-green-500"; // Default background for other statuses

  return (
    <div className="grid grid-cols-5 gap-2 font-medium text-sm">
      <div>{index + 1}</div>
      <div>{description}</div>
      <div>{quantity}</div>
      <div>{amount}</div>
      <div className={`text-white ${statusClass} p-1 rounded`}>{status}</div>
    </div>
  );
};

export default SingleHomePurchReq;
