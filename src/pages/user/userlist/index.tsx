import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';

const UserList = () => {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', headerClassName: 'super-app-theme--header', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            headerClassName: 'super-app-theme--header',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            headerClassName: 'super-app-theme--header',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            headerClassName: 'super-app-theme--header',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            headerClassName: 'super-app-theme--header',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <React.Fragment>
            <h1>UserList</h1>
            <Box sx={{
                height: '100%', width: '100%', '& .super-app-theme--header': {
                    backgroundColor: 'primary.main',
                },
            }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    autoHeight
                    disableRowSelectionOnClick
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            </Box>
        </React.Fragment>
    );
};

export default UserList;