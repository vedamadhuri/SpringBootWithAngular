package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		System.out.println(employeeRepository.findAll());
		return employeeRepository.findAll();
	}

	@GetMapping("/employees/{employeeId}")
	public Optional<Employee> getEmployeeById(@PathVariable(value = "employeeId") Long employeeId)
			throws ResourceNotFoundException {
		Optional<Employee> employee = employeeRepository.findById(employeeId);		
		return employee;
	}


	@PostMapping(value="/employees")
	public Employee createEmployee(@Valid @RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	@PutMapping("/employees/{employeeId}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "employeeId") Long employeeId,
			@Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
		System.out.println(employee);
		System.out.println(employeeDetails);
		employee.setEmailid(employeeDetails.getEmailid());
		employee.setLastname(employeeDetails.getLastname());
		employee.setFirstname(employeeDetails.getFirstname());
		Employee updatedEmployee = employeeRepository.save(employee);
		System.out.println(updatedEmployee);
		return ResponseEntity.ok(updatedEmployee);
	}

	@DeleteMapping("/employees/{employeeId}")
	public ResponseEntity<Boolean> deleteEmployee(@PathVariable(value = "employeeId") Long employeeId)
			throws ResourceNotFoundException {
		Employee employee = employeeRepository.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
		employeeRepository.delete(employee);
		//response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(true);
	}

}
