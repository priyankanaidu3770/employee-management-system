import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/LeaveHistory.css";

function LeaveHistory() {

    const [leaves, setLeaves] = useState([]);

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

            alert("Unable to load leave history.");

        }

    };

    return (

        <div className="history-layout">

            <Sidebar />

            <div className="history-content">

                <h1>Leave History</h1>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Employee</th>

                            <th>Start Date</th>

                            <th>End Date</th>

                            <th>Reason</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {leaves.length === 0 ? (

                            <tr>

                                <td colSpan="6">
                                    No Leave Records Found
                                </td>

                            </tr>

                        ) : (

                            leaves.map((leave) => (

                                <tr key={leave.id}>

                                    <td>{leave.id}</td>

                                    <td>{leave.employeeName}</td>

                                    <td>{leave.startDate}</td>

                                    <td>{leave.endDate}</td>

                                    <td>{leave.reason}</td>

                                    <td>

                                        <span className={`status ${leave.status.toLowerCase()}`}>
                                            {leave.status}
                                        </span>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default LeaveHistory;