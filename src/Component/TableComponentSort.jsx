import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function TableComponentSort({columns,rows}) {

    var timeSet = new Set();
  const newGraph = rows.filter((i) => {
    if (!timeSet.has(i.id)) {
      timeSet.add(i.id);
      return i;
    }
  });


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={newGraph}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
