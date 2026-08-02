import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportEmployeesPDF = (employees) => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Employee Management System", 14, 15);

    doc.setFontSize(12);
    doc.text("Employee Report", 14, 24);

    const tableColumn = [
        "ID",
        "Name",
        "Email",
        "Department",
        "Salary"
    ];

    const tableRows = [];

    employees.forEach((employee) => {

        tableRows.push([

            employee.id,

            employee.name,

            employee.email,

            employee.department,

            `₹ ${employee.salary}`

        ]);

    });

    autoTable(doc, {

        head: [tableColumn],

        body: tableRows,

        startY: 30,

        styles: {

            fontSize: 10

        },

        headStyles: {

            fillColor: [31, 59, 179]

        }

    });

    doc.save("Employees_Report.pdf");

};