package com.priya.employee_management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.priya.employee_management.dto.DashboardResponse;
import com.priya.employee_management.entity.Employee;
import com.priya.employee_management.enums.LeaveStatus;
import com.priya.employee_management.repository.EmployeeRepository;
import com.priya.employee_management.repository.LeaveRepository;

@Service
public class DashboardService {

    private final EmployeeRepository employeeRepository;
    private final LeaveRepository leaveRepository;

    public DashboardService(EmployeeRepository employeeRepository,
                            LeaveRepository leaveRepository) {

        this.employeeRepository = employeeRepository;
        this.leaveRepository = leaveRepository;
    }

    public DashboardResponse getDashboard() {

        long totalEmployees = employeeRepository.count();

        long pendingLeaves = leaveRepository.countByStatus(LeaveStatus.PENDING);

        long approvedLeaves = leaveRepository.countByStatus(LeaveStatus.APPROVED);

        long rejectedLeaves = leaveRepository.countByStatus(LeaveStatus.REJECTED);

        return new DashboardResponse(
                totalEmployees,
                pendingLeaves,
                approvedLeaves,
                rejectedLeaves
        );
    }

    public List<Employee> getRecentEmployees() {

        return employeeRepository.findTop5ByOrderByIdDesc();

    }

}