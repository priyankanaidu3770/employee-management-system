# Employee Management System

A full-stack Employee Management System built using **React.js**, **Spring Boot**, and **PostgreSQL**. The application provides secure role-based authentication using JWT and allows organizations to manage employees and leave requests efficiently.

---

## Features

### Authentication
- Secure JWT-based login
- Employee registration
- Role-based access (Admin & Employee)
- Protected routes

### Admin Module
- Dashboard with employee and leave statistics
- Add new employees
- Edit employee details
- Delete employees
- Search employees
- View all leave requests
- Approve leave requests
- Reject leave requests
- Export employee data to Excel
- Export employee data to PDF

### Employee Module
- Login securely
- Dashboard
- Apply for leave
- View leave history
- View profile

### Dashboard
- Total Employees
- Pending Leaves
- Approved Leaves
- Rejected Leaves
- Pie Chart for Leave Status
- Bar Chart for Employee Statistics

---

# Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Material UI
- Chart.js
- React ChartJS 2
- SweetAlert2
- XLSX
- jsPDF

## Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- JWT Authentication
- Maven

## Database
- PostgreSQL

---

# Project Structure

```
employee-management-system
│
├── Backend
│   ├── src
│   ├── pom.xml
│   └── ...
│
└── Frontend
    ├── src
    ├── public
    ├── package.json
    └── ...
```

---

# Modules

## Admin

- Dashboard
- Employee Management
- Leave Request Management

## Employee

- Dashboard
- Apply Leave
- Leave History
- Profile

---

# REST APIs

## Authentication

```
POST /auth/register
POST /auth/login
```

## Employees

```
GET /employees
GET /employees/{id}
POST /employees
PUT /employees/{id}
DELETE /employees/{id}
```

## Leave

```
POST /leave/apply
GET /leave/my
GET /leave/all
PUT /leave/approve/{id}
PUT /leave/reject/{id}
```

## Dashboard

```
GET /dashboard
```

---

# Database

PostgreSQL is used as the relational database.

Main Tables

- users
- employees
- leave

---

# Installation

## Clone Repository

```bash
git clone https://github.com/priyankanaidu3770/employee-management-system.git
```

---

## Backend Setup

```bash
cd Backend
```

Configure PostgreSQL in

```
src/main/resources/application.properties
```

Run

```bash
./mvnw spring-boot:run
```

Backend URL

```
http://localhost:8080
```

---

## Frontend Setup

```bash
cd Frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---
## Login Page

- Secure JWT Authentication

## Admin Dashboard

- Employee Statistics
- Leave Statistics
- Charts

## Employee Management

- Search Employees
- Add Employee
- Edit Employee
- Delete Employee
- Export Excel
- Export PDF

## Leave Management

- Apply Leave
- Leave History
- Approve Leave
- Reject Leave

---

# Security

- JWT Authentication
- Spring Security
- Protected REST APIs
- Role-Based Authorization

---

# Future Enhancements

- Email Notifications
- Attendance Management
- Payroll Management
- Profile Picture Upload
- Password Reset via Email
- Audit Logs
- Docker Deployment
- Cloud Deployment

---

Developed by---Priyanka Muthyala

