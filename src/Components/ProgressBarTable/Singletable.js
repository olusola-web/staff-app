const Singletable = ({ item, index }) => {
  const { Date, Details, Points } = item || {};

  return (
    <div className="grid grid-cols-5 gap-2 font-medium text-sm">
      <div className="">{index + 1}</div>
      <div className="">{Date}</div>
      <div>{Details}</div>
      <div className="">{Points}</div>
    </div>
  );
};

export default Singletable;
