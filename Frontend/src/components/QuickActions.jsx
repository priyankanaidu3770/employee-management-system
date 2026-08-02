import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import AddIcon from "@mui/icons-material/Add";
import EventNoteIcon from "@mui/icons-material/EventNote";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="quick-actions">

            <h3>Quick Actions</h3>

            <Button
                fullWidth
                variant="contained"
                startIcon={<AddIcon />}
                sx={{ mb: 2 }}
                onClick={() => navigate("/add-employee")}
            >
                Add Employee
            </Button>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<PeopleIcon />}
                sx={{ mb: 2 }}
                onClick={() => navigate("/employees")}
            >
                View Employees
            </Button>

            <Button
                fullWidth
                variant="outlined"
                startIcon={<EventNoteIcon />}
                onClick={() => navigate("/apply-leave")}
            >
                Apply Leave
            </Button>

        </div>

    );

}

export default QuickActions;