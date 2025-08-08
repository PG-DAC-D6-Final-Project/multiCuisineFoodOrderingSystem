package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.CrossOrigin;
>>>>>>> 3832941339d2cede0f5fcb0f7e5f2b5a5dd83deb
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.services.CuisineTypeService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/cuisine")
@AllArgsConstructor
<<<<<<< HEAD
=======
@CrossOrigin
>>>>>>> 3832941339d2cede0f5fcb0f7e5f2b5a5dd83deb
public class CuisineTypeController {
	public final CuisineTypeService cuisineTypeService;

	@GetMapping
	public ResponseEntity<?> getAllCuisineTypes(){
		return ResponseEntity.ok(cuisineTypeService.getAllCuisineTypes());
	}
}
