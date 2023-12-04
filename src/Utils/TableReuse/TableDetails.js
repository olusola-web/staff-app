import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import { v4 as uuidv4 } from 'uuid';
import 'datatables.net-responsive';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';


const DataTable = ({ data, columns, options }) => {
  const tableRef = useRef(null);
  const tableId = `dataTable-${uuidv4()}`;


  

  useEffect(() => {
    // Initialize DataTable only once
    if (!tableRef.current) {
      tableRef.current = $(`#${tableId}`).DataTable(options);
    }

    return () => {
      // Destroy DataTable instance on component unmount
      if (tableRef.current) {
        tableRef.current.destroy();
        tableRef.current = null;
      }
    };
  }, [tableId, options]);

  useEffect(() => {
    // Update DataTable data
    if (tableRef.current) {
      tableRef.current.clear();
      data.forEach(row => {
        tableRef.current.row.add(columns.map(col => row[col.key]));
      });
      tableRef.current.draw();
    }
  }, [data, columns]);

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
