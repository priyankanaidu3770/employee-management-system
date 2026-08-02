import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../services/api";

import {
    successAlert,
    errorAlert
} from "../utils/AlertService";

import "../styles/AddEmployee.css";

function AddEmployee() {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    const handleChange = (e) => {

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.post(

                "/employees",

                employee,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            successAlert("Employee Added Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            errorAlert("Unable to Add Employee");

        }

    };

    return (

        <div className="employee-layout">

            <Sidebar />

            <div className="employee-content">

                <Navbar />

                <Container maxWidth="sm">

                    <Paper

                        elevation={5}

                        sx={{

                            mt: 5,

                            p: 4,

                            borderRadius: 3

                        }}

                    >

                        <Typography

                            variant="h4"

                            align="center"

                            gutterBottom

                            color="primary"

                        >

                            Add Employee

                        </Typography>

                        <Box

                            component="form"

                            onSubmit={handleSubmit}

                        >

                            <TextField

                                fullWidth

                                label="Employee Name"

                                name="name"

                                margin="normal"

                                value={employee.name}

                                onChange={handleChange}

                                required

                            />

                            <TextField

                                fullWidth

                                label="Email"

                                type="email"

                                name="email"

                                margin="normal"

                                value={employee.email}

                                onChange={handleChange}

                                required

                            />

                            <TextField

                                fullWidth

                                label="Department"

                                name="department"

                                margin="normal"

                                value={employee.department}

                                onChange={handleChange}

                                required

                            />

                            <TextField

                                fullWidth

                                label="Salary"

                                type="number"

                                name="salary"

                                margin="normal"

                                value={employee.salary}

                                onChange={handleChange}

                                required

                            />

                            <Button

                                type="submit"

                                variant="contained"

                                fullWidth

                                sx={{

                                    mt: 3,

                                    py: 1.5

                                }}

                            >

                                Save Employee

                            </Button>

                        </Box>

                    </Paper>

                </Container>

            </div>

        </div>

    );

}

export default AddEmployee;