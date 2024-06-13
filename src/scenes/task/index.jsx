import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
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
    { field: "registrarId", headerName: "Task ID", flex: 0.5 },
    {
      field: "name",
      headerName: "User",
      flex: 1.5,
      renderCell: renderNameCell,
    },
    {
      field: "td",
      headerName: "Task Description",
      flex: 2,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 2,
    },
    {
      field: "sp",
      headerName: "Service Provider",
      flex: 2,
    },
    {
      field: "cost",
      headerName: "Quotations / Price",
      flex: 1,
      renderCell: (params) => <Typography>${params.row.cost}</Typography>,
    },
    { field: "status", headerName: "Status", flex: 2 },

    {
      field: "Actions",
      headerName: "Actions",
      flex: 1.2,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <Link to={`/tasks/viewTasks/${params.row.registrarId}`}>
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
            <Link to={`/tasks/editTasks/${params.row.registrarId}`}>
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
      <Header title="Task Management" amount="11 Tasks" />
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
            fontSize: "11px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <AddIcon sx={{ marginRight: "5px" }}></AddIcon>
          Add New Tasks
        </Button>
      </Box>
      <Box
        m="0 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: "12px",
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
            marginBottom: "7px",
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rowHeight={60}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
