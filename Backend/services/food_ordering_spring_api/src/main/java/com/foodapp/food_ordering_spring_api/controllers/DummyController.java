package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.service.DashboardService;

import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/dashboard")
@AllArgsConstructor

public class DummyController {
	
	private DashboardService dbService;
	
	@GetMapping("")	
	public ResponseEntity<?> getDashBoardData() {
		
		return ResponseEntity.ok(dbService.getData());
		
	}
}
