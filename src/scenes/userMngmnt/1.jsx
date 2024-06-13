import DeleteIcon from "@mui/icons-material/Delete";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
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
  const MAX_EMAIL_LENGTH = 10;
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

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <Tooltip title={params.row.name}>
          <div>{params.row.name}</div>
        </Tooltip>
      ),
    },
    {
      field: "age",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Date of Registration",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      renderCell: (params) => (
        <Tooltip title={params.row.email}>
          <div>
            {params.row.email.length > MAX_EMAIL_LENGTH
              ? `${params.row.email.slice(0, MAX_EMAIL_LENGTH)}...`
              : params.row.email}
          </div>
        </Tooltip>
      ),
    },

    {
      field: "Actions",
      headerName: "Actions",
      flex: 1.5,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/careers/viewcareer/${params.row.id}`}>
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
            <Link to={`/careers/editcareer/${params.row.id}`}>
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
      <Header title="User Management" />
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
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Add New User
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
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
