package com.example.Fullstackcrud.controller;

import com.example.Fullstackcrud.exception.ResourceNotFoundException;
import com.example.Fullstackcrud.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Fullstackcrud.repository.EmployeeRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(" Employee not exist id: " + id));
        return ResponseEntity.ok(employee);
    }

    //update employee rest api
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {

        Employee employee1 = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(" Employee not exist with id: " + id));

        employee1.setFirstName(employeeDetails.getFirstName());
        employee1.setLastName(employeeDetails.getLastName());
        employee1.setEmailId(employeeDetails.getEmailId());

        Employee updateEmployee = employeeRepository.save(employee1);
        return ResponseEntity.ok(updateEmployee);

    }

    // delete employee rest api
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        employeeRepository.delete(employee);

        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
