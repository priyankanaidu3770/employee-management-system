import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username") || "User";
    const role = localStorage.getItem("role") || "EMPLOYEE";

    const logout = () => {

        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if (!confirmLogout) {
            return;
        }

        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");

        navigate("/login");

    };

    return (

        <div className="navbar">

            <div className="navbar-left">

                <h2>Employee Management System</h2>

            </div>

            <div className="navbar-right">

                <span className="role-badge">

                    {role}

                </span>

                <span className="welcome-text">

                    Welcome,

                    <strong> {username}</strong>

                </span>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;