package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddController {
    @GetMapping("/add")
    public int addnumbers(@RequestParam int a,@RequestParam int b,@RequestParam int c) {
        return a+b+c;
    }
// http://localhost:8080/add?a=5&b=3

@GetMapping("/add/{a}/{b}")
public int addNumbers(@PathVariable int a,@PathVariable int b) {
    return a+b;
} 
 @PostMapping("/add") 
 public String addNumbers(@RequestBody Numbers num) {
    return "result:"+(num.getA()+num.getB());
 }

@PostMapping("/marks")
public int totalmarks(@RequestBody Students s) {
    return (s.getm1()+s.getm2()+s.getm3()+s.getm4()+s.getm5());
}
}

