import { DATA } from "@data";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const { INITIAL_ALL_DATA } = DATA.initialData;

const columns: GridColDef[] = [
  { field: 'id', type: "string", headerName: 'ID', width: 90, headerClassName: "custom-header-styling" },
  {
    field: 'pumpID',
    headerName: 'Pump ID',
    type: "string",
    headerClassName: "custom-header-styling",
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: "string",
    headerClassName: "custom-header-styling",
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    headerClassName: "custom-header-styling",
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'paid',
    headerName: 'Paid',
    headerClassName: "custom-header-styling",
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'unpaid',
    headerName: 'Unpaid',
    headerClassName: "custom-header-styling",
    type: 'number',
    width: 110,
    editable: true,
  },
];


const TransactionsGeneral = () => {

  const rows = INITIAL_ALL_DATA;

    return (
        <Box sx={{ height: "80vh", width: '60vw' }}>
      <DataGrid
        sx={{ 
            backgroundColor: "white",
            '& .custom-header-styling': {
                backgroundColor: 'rgba(156, 156, 156, 0.55)',
            },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    )
}

export default TransactionsGeneral;