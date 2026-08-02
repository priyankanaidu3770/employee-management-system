import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCharts from "../components/DashboardCharts";
import RecentEmployees from "../components/RecentEmployees";
import QuickActions from "../components/QuickActions";
import api from "../services/api";
import "../styles/Dashboard.css";

function AdminDashboard() {

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

        }

    };

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="dashboard-header">

                    <h1>Admin Dashboard</h1>

                    <p>
                        Welcome back! Here's what's happening today.
                    </p>

                </div>

                <div className="cards">

                    <div className="card total-card">

                        <h3>Total Employees</h3>

                        <p>{dashboard.totalEmployees}</p>

                    </div>

                    <div className="card pending-card">

                        <h3>Pending Leaves</h3>

                        <p>{dashboard.pendingLeaves}</p>

                    </div>

                    <div className="card approved-card">

                        <h3>Approved Leaves</h3>

                        <p>{dashboard.approvedLeaves}</p>

                    </div>

                    <div className="card rejected-card">

                        <h3>Rejected Leaves</h3>

                        <p>{dashboard.rejectedLeaves}</p>

                    </div>

                </div>

                <DashboardCharts dashboard={dashboard} />

                <div className="dashboard-bottom">

                    <RecentEmployees />

                    <QuickActions />

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;