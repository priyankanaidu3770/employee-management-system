import { useEffect, useState } from "react";
import api from "../services/api";

function RecentEmployees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/employees", {

                headers: {
                    Authorization: `Bearer ${token}`
                }

            });

            setEmployees(response.data.slice(0, 5));

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="recent-employees">

            <h3>Recent Employees</h3>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Department</th>
                        <th>Email</th>

                    </tr>

                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>{employee.name}</td>

                            <td>{employee.department}</td>

                            <td>{employee.email}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentEmployees;