import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { v4 as uuidv4 } from 'uuid';

const DataTable = ({ data, columns, options }) => {
  const [initialized, setInitialized] = useState(false);
  const tableId = useRef(`dataTable-${uuidv4()}`).current; 

  useEffect(() => {
    if (data.length && !initialized) {
      $(document).ready(() => {
        $(`#${tableId}`).DataTable(options);
        setInitialized(true);
      });
    }

    return () => {
      if (initialized) {
        $(`#${tableId}`).DataTable().destroy();
      }
    };
  }, [data, initialized, options, tableId]);

    return (
        <div className="overflow-x-auto">
        <table id={tableId} className="min-w-full display">
      <thead>
        <tr>
          {columns.map(({ header }, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(({ key }, colIndex) => (
              <td key={colIndex}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
            </table>
            </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired,
  options: PropTypes.object
};

DataTable.defaultProps = {
  options: {}
};

export default DataTable;