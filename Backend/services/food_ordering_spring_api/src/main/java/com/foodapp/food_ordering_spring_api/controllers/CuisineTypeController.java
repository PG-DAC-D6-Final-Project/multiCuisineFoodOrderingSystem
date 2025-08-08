package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.services.CuisineTypeService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/cuisine")
@AllArgsConstructor
@CrossOrigin
public class CuisineTypeController {
	public final CuisineTypeService cuisineTypeService;

	@GetMapping
	public ResponseEntity<?> getAllCuisineTypes(){
		return ResponseEntity.ok(cuisineTypeService.getAllCuisineTypes());
	}
}
