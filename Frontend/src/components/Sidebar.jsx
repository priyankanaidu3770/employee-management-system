import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const role = localStorage.getItem("role");

    const logout = () => {

        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if (!confirmLogout) return;

        localStorage.clear();

        navigate("/login");

    };

    return (

        <div className="sidebar">

            <div>

                <h2 className="logo">

                    EMS

                </h2>

                {role === "ADMIN" ? (

                    <>

                        <Link
                            to="/admin-dashboard"
                            className={location.pathname === "/admin-dashboard" ? "active" : ""}
                        >
                            🏠 Dashboard
                        </Link>

                        <Link
                            to="/employees"
                            className={location.pathname === "/employees" ? "active" : ""}
                        >
                            👨 Employees
                        </Link>

                        <Link
                            to="/add-employee"
                            className={location.pathname === "/add-employee" ? "active" : ""}
                        >
                            ➕ Add Employee
                        </Link>

                        <Link
                            to="/register"
                            className={location.pathname === "/register" ? "active" : ""}
                        >
                            👤 Register Employee
                        </Link>

                        <Link
                            to="/leave-requests"
                            className={location.pathname === "/leave-requests" ? "active" : ""}
                        >
                            📄 Leave Requests
                        </Link>

                        <Link
                            to="/profile"
                            className={location.pathname === "/profile" ? "active" : ""}
                        >
                            ⚙️ Profile
                        </Link>

                    </>

                ) : (

                    <>

                        <Link
                            to="/dashboard"
                            className={location.pathname === "/dashboard" ? "active" : ""}
                        >
                            🏠 Dashboard
                        </Link>

                        <Link
                            to="/apply-leave"
                            className={location.pathname === "/apply-leave" ? "active" : ""}
                        >
                            📝 Apply Leave
                        </Link>

                        <Link
                            to="/leave-history"
                            className={location.pathname === "/leave-history" ? "active" : ""}
                        >
                            📋 Leave History
                        </Link>

                        <Link
                            to="/profile"
                            className={location.pathname === "/profile" ? "active" : ""}
                        >
                            ⚙️ Profile
                        </Link>

                    </>

                )}

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                🚪 Logout
            </button>

        </div>

    );

}

export default Sidebar;