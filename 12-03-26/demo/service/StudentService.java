package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.dto.request.StudentRequest;

import com.example.demo.dto.response.StudentResponse;
import com.example.demo.entity.RegisterNumber;
import com.example.demo.entity.student;
import com.example.demo.repository.RegisterNumberRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final RegisterNumberRepository registerNumberRepository;
    
    public StudentService(StudentRepository studentRepository, RegisterNumberRepository registerNumberRepository) {
        this.studentRepository = studentRepository;
        this.registerNumberRepository = registerNumberRepository;
    }

    public StudentResponse saveStudent(StudentRequest studentRequest){
        student students= new student();
        students.setName(studentRequest.getName());
        student savedstudents=studentRepository.save(students);
        
        return new StudentResponse(
        savedstudents.getId(),
        savedstudents.getName(),
        null);

    }
    public StudentResponse assignRegistration(Long StudentId,String regNumber){
        student students = studentRepository.findById(StudentId)
                          .orElseThrow(()-> new RuntimeException("Student not found"));
                          RegisterNumber register=new RegisterNumber();
                          register.setRegNumber(regNumber);
                          RegisterNumber savedRegister=registerNumberRepository.save(register);

                          students.setRegisterNumber(savedRegister);
                          studentRepository.save(students);

                          return new StudentResponse(
                            students.getId(), 
                            students.getName(), 
                            register.getRegNumber());
    }
   }

