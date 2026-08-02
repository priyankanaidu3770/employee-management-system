import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

function EditEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        salary: ""
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(`/employees/${id}`, {

                headers: {
                    Authorization: `Bearer ${token}`
                }

            });

            setEmployee(response.data);

        } catch (error) {

            console.error(error);

            errorAlert("Unable to load employee.");

        }

    };

    const handleChange = (e) => {

        setEmployee({

            ...employee,

            [e.target.name]: e.target.value

        });

    };

    const updateEmployee = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.put(

                `/employees/${id}`,

                employee,

                {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                }

            );

            successAlert("Employee Updated Successfully");

            navigate("/employees");

        } catch (error) {

            console.error(error);

            errorAlert("Unable to update employee.");

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
                            color="primary"
                            gutterBottom
                        >
                            Edit Employee
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={updateEmployee}
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
                                type="number"
                                label="Salary"
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
                                Update Employee
                            </Button>

                        </Box>

                    </Paper>

                </Container>

            </div>

        </div>

    );

}

export default EditEmployee;