/*import { DATA } from "@data";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const { INITIAL_UNPAID_TRANSACTIONS_DATA } = DATA.initialData;

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

const rows = INITIAL_UNPAID_TRANSACTIONS_DATA;


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

export default TransactionsImpayees;*/

import { DATA } from "@data";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { RowPumpUnpaidTransaction } from "@types";

const { INITIAL_UNPAID_TRANSACTIONS_DATA } = DATA.initialData;

const columns: GridColDef<RowPumpUnpaidTransaction>[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90, 
    headerClassName: "custom-header-styling" 
  },
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
    headerClassName: "custom-header-styling",
    width: 150,
    editable: true,
    renderCell: (params) => {
      try {
        return new Date(params.row.date).toLocaleDateString();
      } catch {
        return params.row.date;
      }
    }
  },
  {
    field: 'amountUnpaid',
    headerName: 'Amount Unpaid',
    headerClassName: "custom-header-styling",
    type: 'number',
    width: 110,
    editable: true,
    renderCell: (params) => {
      const amount = params.row.amountUnpaid;
      if (typeof amount === 'number') {
        return new Intl.NumberFormat('en-CA', {
          style: 'currency',
          currency: 'CAD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(amount);
      }
      return amount;
    }
  },
];

const rows = INITIAL_UNPAID_TRANSACTIONS_DATA;

const TransactionsImpayees = () => {
    return (
        <Box sx={{ height: "80vh", width: '60vw' }}>
          <DataGrid<RowPumpUnpaidTransaction>
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