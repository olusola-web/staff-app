const SingleHomePurchReq = ({ item, index }) => {
  const { Pr_Number, total_amount, created_at, status } = item || {};

  // Determine the Tailwind class based on the status
  const statusClass =
    status === "Not granted"
      ? "bg-red-500 " // Red background for 'not granted'
      : status === "Successful"
      ? "bg-blue-500" // Blue background for 'Success'
      : "bg-green-500"; // Default background for other statuses

  return (
    <div className="grid grid-cols-5 gap-2 font-medium text-sm">
      <div className="">{index + 1}</div>
      <div className="">{Pr_Number}</div>
      <div>{total_amount}</div>
      <div className="">{created_at}</div>
      <div className={`text-white text-center ${statusClass} p-2 w-[6rem] rounded`}>{status}</div>
    </div>
  );
};

export default SingleHomePurchReq;
