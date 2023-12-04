import React from 'react'
import DataTable from '../../Utils/TableReuse/TableDetails';

const leaveRequestData = [
 
    { id: 1, RequestType: 'Leave Request', Date: '11/11/23', Status: 'successful' },
    { id: 2, RequestType: 'Leave Request', Date: '11/11/23', Status: 'Not Granted' },
    { id: 3, RequestType: 'Leave Request', Date: '11/11/23', Status: 'successful' },
   
  ];
  
const leaveRequestColumns = [
  { header: 'Request Type', key: 'RequestType' },
  { header: 'Date', key: 'Date' },
  { header: 'Status', key: 'Status' },

];
const LeaveRequest = () => {
  return (
    <div>
       <DataTable data={leaveRequestData} columns={leaveRequestColumns} />
    </div>
  )
}

export default LeaveRequest

