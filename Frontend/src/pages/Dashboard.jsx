import { useEffect, useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCharts from "../components/DashboardCharts";
import "../styles/Dashboard.css";

function Dashboard() {

    const [dashboard, setDashboard] = useState({
        totalEmployees: 0,
        pendingLeaves: 0,
        approvedLeaves: 0,
        rejectedLeaves: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/dashboard", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setDashboard(response.data);

        } catch (error) {

            console.error(error);

            if (error.response?.status === 401) {

                localStorage.clear();

                window.location.href = "/login";

            } else {

                alert("Unable to load dashboard.");

            }

        }

    };

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="dashboard-header">

                    <h1>Employee Dashboard</h1>

                    <p>
                        Welcome to Employee Management System
                    </p>

                </div>

                <div className="cards">

                    <div className="card">

                        <h3>Total Employees</h3>

                        <p>{dashboard.totalEmployees}</p>

                    </div>

                    <div className="card">

                        <h3>Pending Leaves</h3>

                        <p>{dashboard.pendingLeaves}</p>

                    </div>

                    <div className="card">

                        <h3>Approved Leaves</h3>

                        <p>{dashboard.approvedLeaves}</p>

                    </div>

                    <div className="card">

                        <h3>Rejected Leaves</h3>

                        <p>{dashboard.rejectedLeaves}</p>

                    </div>

                </div>

                <DashboardCharts dashboard={dashboard} />

            </div>

        </div>

    );

}

export default Dashboard;