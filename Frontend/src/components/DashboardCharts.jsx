import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function DashboardCharts({ dashboard }) {

    const pieData = {
        labels: [
            "Pending",
            "Approved",
            "Rejected"
        ],
        datasets: [
            {
                data: [
                    dashboard.pendingLeaves,
                    dashboard.approvedLeaves,
                    dashboard.rejectedLeaves
                ],
                backgroundColor: [
                    "#ffc107",
                    "#28a745",
                    "#dc3545"
                ],
                borderWidth: 2,
                borderColor: "#ffffff"
            }
        ]
    };

    const barData = {
        labels: ["Employees"],
        datasets: [
            {
                label: "Total Employees",
                data: [dashboard.totalEmployees],
                backgroundColor: "#1f3bb3",
                borderRadius: 8,
                maxBarThickness: 80
            }
        ]
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top"
            }
        }
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (

        <div className="charts">

            <div className="chart-card">

                <h3>Leave Status</h3>

                <div className="chart-container">

                    <Pie
                        data={pieData}
                        options={pieOptions}
                    />

                </div>

            </div>

            <div className="chart-card">

                <h3>Total Employees</h3>

                <div className="chart-container">

                    <Bar
                        data={barData}
                        options={barOptions}
                    />

                </div>

            </div>

        </div>

    );

}

export default DashboardCharts;