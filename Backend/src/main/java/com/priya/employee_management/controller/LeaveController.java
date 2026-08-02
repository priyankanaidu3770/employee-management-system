package com.priya.employee_management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.priya.employee_management.entity.Leave;
import com.priya.employee_management.service.LeaveService;

@RestController
@RequestMapping("/leave")
public class LeaveController {

    private final LeaveService leaveService;

    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }

    // Employee applies for leave
    @PostMapping("/apply")
    public Leave applyLeave(@RequestBody Leave leave) {
        return leaveService.applyLeave(leave);
    }

    // Admin views all leave requests
    @GetMapping("/all")
    public List<Leave> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    // Employee views only their own leave requests
    @GetMapping("/my")
    public List<Leave> getMyLeaves(@RequestParam String employeeName) {
        return leaveService.getEmployeeLeaves(employeeName);
    }

    // Admin approves leave
    @PutMapping("/approve/{id}")
    public Leave approveLeave(@PathVariable Long id) {
        return leaveService.approveLeave(id);
    }

    // Admin rejects leave
    @PutMapping("/reject/{id}")
    public Leave rejectLeave(@PathVariable Long id) {
        return leaveService.rejectLeave(id);
    }
}