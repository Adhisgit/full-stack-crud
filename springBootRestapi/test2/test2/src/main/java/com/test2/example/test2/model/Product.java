package com.test2.example.test2.model;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@CrossOrigin("*")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Product {

    private int prodId;
    private String prodName;
    private int price;
}
