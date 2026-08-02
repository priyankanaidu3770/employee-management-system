import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Profile.css";

function Profile() {

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="profile-card">

                    <div className="profile-image">

                        👤

                    </div>

                    <h2>{username}</h2>

                    <p>{role}</p>

                    <div className="profile-details">

                        <div>

                            <strong>Username</strong>

                            <span>{username}</span>

                        </div>

                        <div>

                            <strong>Role</strong>

                            <span>{role}</span>

                        </div>

                    </div>

                    <button>

                        Edit Profile

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Profile;