package com.priya.employee_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.priya.employee_management.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findTop5ByOrderByIdDesc();

}