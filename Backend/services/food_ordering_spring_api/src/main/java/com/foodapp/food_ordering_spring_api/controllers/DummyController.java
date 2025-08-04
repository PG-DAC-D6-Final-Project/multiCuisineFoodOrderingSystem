package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/")
public class DummyController {
	
	@GetMapping("")	
	public String returnHello() {
		return "helloworld";
	}
}
