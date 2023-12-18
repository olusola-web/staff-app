const ReclaimTable = ({ item, index }) => {
  const { sn, name, description, date, quantity, amount, receipt, status } =
    item || {};

  return (
    <div className="grid text-sm grid-cols-8 gap-2">
      <h2 className="px-2">{sn}</h2>
      <h2 className="">{name}</h2>
      <h2 className="">{description}</h2>
      <h2 className="">{date}</h2>
      <h2 className="">{quantity}</h2>
      <h2 className="">{amount}</h2>
      <h2 className="">{receipt}</h2>
      <h2 className="">{status}</h2>
    </div>
  );
};

export default ReclaimTable;
