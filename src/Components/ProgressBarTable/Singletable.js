const Singletable = ({ item, index }) => {
  const { created_at, reason_for_point, point } = item || {};

  return (
    <div className="grid grid-cols-3 gap-2 font-medium text-sm my-2">
      {/* <div className="">{index + 1}</div> */}
      <div className="">{created_at}</div>
      <div>{reason_for_point}</div>
      <div className="">{point}</div>
    </div>
  );
};

export default Singletable;
