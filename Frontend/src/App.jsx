import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Register from "./pages/Register";
import ApplyLeave from "./pages/ApplyLeave";
import LeaveHistory from "./pages/LeaveHistory";
import LeaveRequests from "./pages/LeaveRequests";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import ToastProvider from "./components/ToastProvider";

function App() {

    return (

        <>

            <ToastProvider />

            <Routes>

                {/* Login */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* Employee Routes */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute allowedRole="EMPLOYEE">
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/apply-leave"
                    element={
                        <ProtectedRoute allowedRole="EMPLOYEE">
                            <ApplyLeave />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/leave-history"
                    element={
                        <ProtectedRoute allowedRole="EMPLOYEE">
                            <LeaveHistory />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Routes */}

                <Route
                    path="/admin-dashboard"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/employees"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <Employees />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/add-employee"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <AddEmployee />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-employee/:id"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <EditEmployee />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <Register />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/leave-requests"
                    element={
                        <ProtectedRoute allowedRole="ADMIN">
                            <LeaveRequests />
                        </ProtectedRoute>
                    }
                />

                {/* Common Route */}

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                {/* 404 Page */}

                <Route
                    path="*"
                    element={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh",
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "#1f3bb3"
                            }}
                        >
                            404 | Page Not Found
                        </div>
                    }
                />

            </Routes>

        </>

    );

}

export default App;