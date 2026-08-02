import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Button,
    TextField,
    Paper,
    Box,
    Typography
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

import api from "../services/api";

import {
    confirmDelete,
    successAlert,
    errorAlert
} from "../utils/AlertService";

import { exportEmployees } from "../utils/ExportExcel";
import { exportEmployeesPDF } from "../utils/ExportPDF";

import "../styles/Employees.css";

function Employees() {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await api.get(
                "/employees",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setEmployees(response.data);

        } catch (error) {

            console.error(error);

            errorAlert("Unable to load employees.");

        } finally {

            setLoading(false);

        }

    };

    const deleteEmployee = async (id) => {

        const result = await confirmDelete();

        if (!result.isConfirmed) return;

        try {

            const token = localStorage.getItem("token");

            await api.delete(
                `/employees/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            successAlert("Employee deleted successfully.");

            fetchEmployees();

        } catch (error) {

            console.error(error);

            errorAlert("Unable to delete employee.");

        }

    };

    const filteredEmployees = employees.filter(employee =>

        employee.name.toLowerCase().includes(search.toLowerCase()) ||

        employee.email.toLowerCase().includes(search.toLowerCase()) ||

        employee.department.toLowerCase().includes(search.toLowerCase())

    );

    const rows = filteredEmployees.map(employee => ({

        id: employee.id,

        name: employee.name,

        email: employee.email,

        department: employee.department,

        salary: employee.salary

    }));

    const columns = [

        {
            field: "id",
            headerName: "ID",
            width: 80
        },

        {
            field: "name",
            headerName: "Name",
            flex: 1
        },

        {
            field: "email",
            headerName: "Email",
            flex: 1.5
        },

        {
            field: "department",
            headerName: "Department",
            flex: 1
        },

        {
            field: "salary",
            headerName: "Salary",
            flex: 1,
            renderCell: (params) => `₹ ${params.value}`
        },

        {
            field: "actions",
            headerName: "Actions",
            width: 230,
            sortable: false,

            renderCell: (params) => (

                <Box>

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<EditIcon />}
                        sx={{ mr: 1 }}
                        onClick={() =>
                            navigate(`/edit-employee/${params.row.id}`)
                        }
                    >
                        Edit
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={() =>
                            deleteEmployee(params.row.id)
                        }
                    >
                        Delete
                    </Button>

                </Box>

            )

        }

    ];

    if (loading) {

        return <LoadingSpinner />;

    }

    return (

        <div className="employee-layout">

            <Sidebar />

            <div className="employee-content">

                <Navbar />

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={2}
                    mb={3}
                >

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="primary"
                    >
                        Employees
                    </Typography>

                    <Box>

                                                <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{ mr: 2 }}
                            onClick={() => navigate("/add-employee")}
                        >
                            Add Employee
                        </Button>

                        <Button
                            variant="outlined"
                            color="success"
                            startIcon={<FileDownloadIcon />}
                            sx={{ mr: 2 }}
                            onClick={() => exportEmployees(filteredEmployees)}
                        >
                            Export Excel
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<PictureAsPdfIcon />}
                            onClick={() => exportEmployeesPDF(filteredEmployees)}
                        >
                            Export PDF
                        </Button>

                    </Box>

                </Box>

                <TextField
                    fullWidth
                    label="Search Employee"
                    variant="outlined"
                    margin="normal"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <Typography
                    sx={{
                        mt: 2,
                        mb: 2,
                        fontWeight: "bold",
                        color: "#555"
                    }}
                >
                    Total Employees : {filteredEmployees.length}
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        height: 550,
                        width: "100%",
                        borderRadius: 3
                    }}
                >

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 20]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5
                                }
                            }
                        }}
                        disableRowSelectionOnClick
                        sx={{
                            border: 0,
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#1976d2",
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "15px"
                            },
                            "& .MuiDataGrid-row:hover": {
                                backgroundColor: "#f5f9ff"
                            }
                        }}
                    />

                </Paper>

            </div>

        </div>

    );

}

export default Employees;