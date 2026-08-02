package com.priya.employee_management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.priya.employee_management.dto.DashboardResponse;
import com.priya.employee_management.entity.Employee;
import com.priya.employee_management.service.DashboardService;

@RestController
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/dashboard")
    public DashboardResponse getDashboard() {
        return dashboardService.getDashboard();
    }

    @GetMapping("/dashboard/recent-employees")
    public List<Employee> getRecentEmployees() {
        return dashboardService.getRecentEmployees();
    }
}