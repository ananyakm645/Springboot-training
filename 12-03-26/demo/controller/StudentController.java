package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.request.StudentRequest;
import com.example.demo.dto.response.ApiResponse;
import com.example.demo.dto.response.StudentResponse;
import com.example.demo.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/add")
    public ApiResponse<StudentResponse> createstudent(@RequestBody StudentRequest request){
        StudentResponse studentResponse = studentService.saveStudent(request);
        return new ApiResponse<>("success", studentResponse);
    }

    @PostMapping("/{id}/register")
    public ApiResponse<StudentResponse> assignRegister(
            @PathVariable Long id,
            @RequestBody RegisterRequest request
    ){

        StudentResponse response =
                studentService.assignRegistration(id, request.getRegisterNumber());

        return new ApiResponse<>("success", response);
    }
}