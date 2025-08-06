package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.services.RestaurantService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/restaurant")
@AllArgsConstructor
@Validated
public class RestaurantController {
	private RestaurantService restaurantService;
	
	@PostMapping
	public ResponseEntity<?> RestaurantSignUp(@RequestBody RestaurantSignUpDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(restaurantService.restaurantSignUp(dto));
	}
}
