import React from "react";
import TableHeader from "./header";
import TableBody from "./body";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
// import { useStateContext } from "../../pages/context/StateContext";
const Table = ({
  minSize,
  headerContent,
  loadingState,
  data,
  cols,
  children,
  notPaginated,
}) => {
  // const { setPage, page } = useStateContext();

  // const nextPage = () => {
  //   setPage((old) => old + 1);
  // };

  const prevpage = () => {
  //   setPage((old) => {
  //     if (old === 1) {
  //       return 1;
  //     } else return old - 1;
  //   });
   };

  return (
    <>
      <div className="bg-white shadow-md rounded-md">
        <div className="overflow-x-scroll">
          <TableHeader
            cols={cols}
            minSize={minSize}
            headerContent={headerContent}
          />
          <TableBody loadingState={loadingState} data={data} minSize={minSize}>
            {children}
          </TableBody>
        </div>
        {!notPaginated && (
          <div className="flex justify-between gap-4 items-center p-8">
            <button
              onClick={prevpage}
              disabled={loadingState}
              className="flex items-center gap-2 bg-green-50 rounded-full p-2 px-6 text-sm"
            >
              <GrChapterPrevious /> Prev
            </button>
            <span className="block bg-gray-100 rounded-full p-2 text-sm px-6">
              {/* Page {page} */}
            </span>
            <button
              disabled={loadingState}
              // onClick={nextPage}
              className="flex items-center gap-2 bg-green-50 rounded-full p-2 px-6 text-sm"
            >
              Next <GrChapterNext />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
