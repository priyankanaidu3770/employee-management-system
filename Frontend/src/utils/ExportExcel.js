import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportEmployees = (employees) => {

    const data = employees.map(employee => ({

        ID: employee.id,

        Name: employee.name,

        Email: employee.email,

        Department: employee.department,

        Salary: employee.salary

    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Employees"
    );

    const excelBuffer = XLSX.write(
        workbook,
        {
            bookType: "xlsx",
            type: "array"
        }
    );

    const file = new Blob(
        [excelBuffer],
        {
            type: "application/octet-stream"
        }
    );

    saveAs(file, "Employees.xlsx");

};