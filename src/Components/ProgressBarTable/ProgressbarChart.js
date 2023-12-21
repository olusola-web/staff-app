const ProgressBar = ({ value, max, color }) => {
  const widthPercentage = (value / max) * 100;
  const backgroundColorClass = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500"
  }[color] || "bg-green-500";

  return (
    <div className="progress-bar-background">
      <div
        className={`progress-bar-fill ${backgroundColorClass} rounded-3xl p-1`}
        style={{ width: `${widthPercentage}%` }}
      >
        {`${value}`} {/* Display the point value */}
      </div>
    </div>
  );
};
export default ProgressBar;
