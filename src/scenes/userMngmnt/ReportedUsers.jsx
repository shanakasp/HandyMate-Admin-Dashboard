import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, IconButton, Tooltip, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleViewClick = (id, role) => {
    console.log(`View clicked for ${role} with id:`, id);
  };

  const handleEditClick = (id, role) => {
    console.log(`Edit clicked for ${role} with id:`, id);
  };

  const handleDeleteClick = (id, role) => {
    console.log(`Delete clicked for ${role} with id:`, id);
  };

  const renderNameCell = (params) => (
    <Box>
      <div>{params.row.name}</div>
      <div>{params.row.email}</div>
    </Box>
  );

  const columns = [
    { field: "id", headerName: "Reported ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Reported User",
      flex: 1.5,
      renderCell: renderNameCell,
    },
    {
      headerName: "Reporting User",
      flex: 1.5,
      renderCell: renderNameCell,
    },
    {
      field: "age",
      headerName: "Reason for Report",
      flex: 2,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    { field: "statusr", headerName: "Status", flex: 2 },
    { field: "action", headerName: "Action Taken", flex: 2 },
    {
      field: "Actions",
      headerName: "Actions",
      flex: 1.2,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/userMngmnt/reported-users/viewUser/${params.row.id}`}>
              <IconButton>
                <VisibilityIcon
                  onClick={() =>
                    handleViewClick(params.row.id, params.row.role)
                  }
                />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Edit">
            <Link to={`/userMngmnt/reported-users/editUser/${params.row.id}`}>
              <IconButton>
                <EditIcon
                  onClick={() =>
                    handleEditClick(params.row.id, params.row.role)
                  }
                />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => handleDeleteClick(params.row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box p={"20px"}>
      <Header
        title="User Management "
        subtitle="Reported Users"
        amount="05 users"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: "-25px",
        }}
      >
        <Button
          sx={{
            backgroundColor: colors.yellowAccent[400],
            color: colors.grey[100],
            fontSize: "13px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddIcon sx={{ marginRight: "5px" }}></AddIcon>
          Add New reported User
        </Button>
      </Box>
      <Box
        m="0 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "14px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[900],
          },
          "& .MuiDataGrid-row": {
            marginBottom: "10px",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rowHeight={70}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
