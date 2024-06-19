import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './users.scss';

import { useState } from 'react';
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
    type: 'string',
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 150,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    width: 200,
    type: 'string',
  },

  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 150,
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('http://localhost:8800/api/users').then((res) => res.json()),
  });
  return (
    <div className="users">
      <div className="info">
        <h1 className="Users">Users</h1>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      {isLoading ? (
        'Loading'
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default Users;
