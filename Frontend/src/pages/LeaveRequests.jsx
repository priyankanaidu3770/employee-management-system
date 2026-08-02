import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import {
    Box,
    Button,
    Chip,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import {
    DataGrid
} from "@mui/x-data-grid";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import {
    successAlert,
    errorAlert
} from "../utils/AlertService";

import "../styles/LeaveRequests.css";

function LeaveRequests() {

    const [leaves, setLeaves] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchLeaves();

    }, []);

    const fetchLeaves = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/leave/all", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setLeaves(response.data);

        } catch (error) {

            console.error(error);

            errorAlert("Unable to load leave requests.");

        }

    };

    const approveLeave = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(

                `/leave/approve/${id}`,

                {},

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            successAlert("Leave Approved Successfully");

            fetchLeaves();

        } catch (error) {

            console.error(error);

            errorAlert("Unable to approve leave.");

        }

    };

    const rejectLeave = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(

                `/leave/reject/${id}`,

                {},

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            successAlert("Leave Rejected Successfully");

            fetchLeaves();

        } catch (error) {

            console.error(error);

            errorAlert("Unable to reject leave.");

        }

    };

    const filteredLeaves = leaves.filter(leave =>

        leave.employeeName.toLowerCase().includes(search.toLowerCase()) ||

        leave.reason.toLowerCase().includes(search.toLowerCase()) ||

        leave.status.toLowerCase().includes(search.toLowerCase())

    );

    const rows = filteredLeaves.map(leave => ({

        id: leave.id,

        employeeName: leave.employeeName,

        startDate: leave.startDate,

        endDate: leave.endDate,

        reason: leave.reason,

        status: leave.status

    }));

    const columns = [

        {

            field: "id",

            headerName: "ID",

            width: 80

        },

        {

            field: "employeeName",

            headerName: "Employee",

            flex: 1

        },

        {

            field: "startDate",

            headerName: "Start Date",

            flex: 1

        },

        {

            field: "endDate",

            headerName: "End Date",

            flex: 1

        },

        {

            field: "reason",

            headerName: "Reason",

            flex: 2

        },

        {

            field: "status",

            headerName: "Status",

            flex: 1,

            renderCell: (params) => {

                let color = "default";

                if (params.value === "APPROVED") color = "success";

                if (params.value === "REJECTED") color = "error";

                if (params.value === "PENDING") color = "warning";

                return (

                    <Chip

                        label={params.value}

                        color={color}

                    />

                );

            }

        },

        {

            field: "actions",

            headerName: "Actions",

            width: 240,

            sortable: false,

            renderCell: (params) => (

                <>

                    <Button

                        variant="contained"

                        color="success"

                        size="small"

                        startIcon={<CheckCircleIcon />}

                        sx={{ mr: 1 }}

                        disabled={params.row.status !== "PENDING"}

                        onClick={() => approveLeave(params.row.id)}

                    >

                        Approve

                    </Button>

                    <Button

                        variant="contained"

                        color="error"

                        size="small"

                        startIcon={<CancelIcon />}

                        disabled={params.row.status !== "PENDING"}

                        onClick={() => rejectLeave(params.row.id)}

                    >

                        Reject

                    </Button>

                </>

            )

        }

    ];

    return (

        <div className="employee-layout">

            <Sidebar />

            <div className="employee-content">

                <Navbar />

                <Typography

                    variant="h4"

                    color="primary"

                    fontWeight="bold"

                    mb={3}

                >

                    Leave Requests

                </Typography>

                <TextField

                    fullWidth

                    label="Search Leave Requests"

                    margin="normal"

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                <Paper

                    elevation={3}

                    sx={{

                        mt: 2,

                        height: 550,

                        width: "100%"

                    }}

                >

                    <DataGrid

                        rows={rows}

                        columns={columns}

                        pageSizeOptions={[5,10,20]}

                        initialState={{

                            pagination: {

                                paginationModel: {

                                    pageSize: 5

                                }

                            }

                        }}

                        disableRowSelectionOnClick

                    />

                </Paper>

            </div>

        </div>

    );

}

export default LeaveRequests;