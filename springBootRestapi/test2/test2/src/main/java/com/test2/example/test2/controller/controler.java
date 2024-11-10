package com.test2.example.test2.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Controller

public class controler {

    @GetMapping("/")
    public String adhi(){
        return "add this /products url to get products ";
    }
    
}
