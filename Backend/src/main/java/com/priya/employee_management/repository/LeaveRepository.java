package com.priya.employee_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.priya.employee_management.entity.Leave;
import com.priya.employee_management.enums.LeaveStatus;

public interface LeaveRepository extends JpaRepository<Leave, Long> {

    long countByStatus(LeaveStatus status);

    List<Leave> findByEmployeeName(String employeeName);

}