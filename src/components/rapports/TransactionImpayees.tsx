import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90, headerClassName: "custom-header-styling" },
  {
    field: 'pumpNumber',
    headerName: 'Pump Number',
    type: "number",
    headerClassName: "custom-header-styling",
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: "date",
    headerClassName: "custom-header-styling",
    width: 150,
    editable: true,
  },
  {
    field: 'amountUnpaid',
    headerName: 'Amount Unpaid',
    headerClassName: "custom-header-styling",
    type: 'number',
    width: 110,
    editable: true,
  },
];

//   {
//     field: 'dataGetter',
//     headerName: 'data Getter',
//     headerClassName: "custom-header-styling",
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (_value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },

const rows = [
  { id: 1, pumpNumber: 0, date: new Date('2024-02-02'), amountUnpaid: 14 },
  { id: 2, pumpNumber: 4, date: new Date('2024-08-04'), amountUnpaid: 31 },
  { id: 3, pumpNumber: 2, date: new Date('2024-03-03'), amountUnpaid: 31 },
  { id: 4, pumpNumber: 1, date: new Date('2024-07-02'), agamountUnpaide: 11 },
  { id: 5, pumpNumber: 1, date: new Date('2024-02-11'), amountUnpaid: 23 },
  { id: 6, pumpNumber: 3, date: new Date("2024-06-02"), amountUnpaid: 150 },
  { id: 7, pumpNumber: 5, date: new Date('2024-02-02'), amountUnpaid: 44 },
  { id: 8, pumpNumber: 2, date: new Date('2023-01-02'), amountUnpaid: 36 },
];


const TransactionsImpayees = () => {
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

export default TransactionsImpayees;