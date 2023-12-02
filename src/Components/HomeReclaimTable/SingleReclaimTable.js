const SingleReclaimTable = ({ item, index }) => {
    const { ReclaimNumber, Amount, Date, Status } = item || {};
    return (
      <div className="grid text-sm grid-cols-3 gap-2">
        <h2>{index + 1}</h2>
        <h2>{ReclaimNumber}</h2>
            <h2>{Amount}</h2>
            <h2>{Date}</h2>
            <h2>{Status}</h2>
            
      </div>
    );
  };
  
  export default SingleReclaimTable;