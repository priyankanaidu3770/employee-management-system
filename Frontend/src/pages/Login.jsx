import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { successAlert, errorAlert } from "../utils/AlertService";
import "../styles/Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {
                username,
                password
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("username", username);

            successAlert("Login Successful");

            if (response.data.role === "ADMIN") {

                navigate("/admin-dashboard");

            } else {

                navigate("/dashboard");

            }

        } catch (error) {

            console.error(error);

            errorAlert("Invalid Username or Password");

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>Employee Management System</h1>

                <h3>Login</h3>

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;