import React from 'react'
import DataTable from '../../Utils/TableReuse/TableDetails';

const userData = [
 
    { id: 1, ReclaimNumber: '1111', Amount: '2000', Date: '11/11/23', Status: 'Pending' },
    { id: 2, ReclaimNumber: '2222', Amount: '1500', Date: '11/11/23', Status: 'Not Granted' },
    { id: 3, ReclaimNumber: '3333', Amount: '3000', Date: '11/11/23', Status: 'Granted' },
   
  ];
  
const userColumns = [
  { header: 'Reclaim Number', key: 'ReclaimNumber' },
  { header: 'Amount', key: 'Amount' },
  { header: 'Date', key: 'Date' },
  { header: 'Status', key: 'Status' },

];
const ReclaimTable = () => {
  return (
    <div>
       <DataTable data={userData} columns={userColumns} />
    </div>
  )
}

export default ReclaimTable

