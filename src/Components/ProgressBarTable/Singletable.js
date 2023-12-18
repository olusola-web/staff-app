const Singletable = ({ item, index }) => {
  const { date, details, point } = item || {};

  return (
    <div className="grid grid-cols-3 gap-2 font-medium text-sm">
      {/* <div className="">{index + 1}</div> */}
      <div className="">{date}</div>
      <div>{details}</div>
      <div className="">{point}</div>
    </div>
  );
};

export default Singletable;
