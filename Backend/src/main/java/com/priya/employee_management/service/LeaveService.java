package com.priya.employee_management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.priya.employee_management.entity.Leave;
import com.priya.employee_management.enums.LeaveStatus;
import com.priya.employee_management.repository.LeaveRepository;

@Service
public class LeaveService {

    private final LeaveRepository leaveRepository;

    public LeaveService(LeaveRepository leaveRepository) {
        this.leaveRepository = leaveRepository;
    }

    // Employee applies for leave
    public Leave applyLeave(Leave leave) {
        leave.setStatus(LeaveStatus.PENDING);
        return leaveRepository.save(leave);
    }

    // Admin views all leave requests
    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

    // Admin approves leave
    public Leave approveLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        leave.setStatus(LeaveStatus.APPROVED);
        return leaveRepository.save(leave);
    }

    // Admin rejects leave
    public Leave rejectLeave(Long id) {
        Leave leave = leaveRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Leave request not found"));

        leave.setStatus(LeaveStatus.REJECTED);
        return leaveRepository.save(leave);
    }

    // Employee views only their own leave requests
    public List<Leave> getEmployeeLeaves(String employeeName) {
        return leaveRepository.findByEmployeeName(employeeName);
    }
}