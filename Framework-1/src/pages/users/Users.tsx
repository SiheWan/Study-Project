import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import './users.scss'
import { userRows } from '../../data';
import { useState } from 'react';
import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"img",headerName:"Avatar", width:100,
        renderCell:(params) =>{
            return <img src={params.row.img||"/noavatar.png"}/>
            
        },
    },
    {
        field:"actions",headerName:"Actions", width:100,
        renderCell:(params) =>{
            return <div className="action">
                <div className="view">View</div>
                <div className="delete">Delete</div>

                </div>;
            
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 150,
      },
      {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 150,
      },
      {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
      },
      {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 50,
      },
      {
        field: "createdAt",
        headerName: "Created At",
        width: 50,
        type: "string",
      },
      {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
      },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status:true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,status:true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


const Users = () =>{
  const [open,setOpen] = useState(false)
    return(
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
    )
}
export default Users


//<DataTable columns={columns} rows={}/>应该用数据库来导入文件，这里用他自己做好的数据文件

//https://mui.com/x/react-data-grid/getting-started/#installation 