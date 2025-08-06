package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.HttpStatus;import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.dto.UpdateRestaurantDto;
import com.foodapp.food_ordering_spring_api.services.RestaurantService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/restaurant")
@AllArgsConstructor
@Validated
public class RestaurantController {
	private RestaurantService restaurantService;
	
	@PostMapping("/Register")
	public ResponseEntity<?> RestaurantSignUp(@RequestBody RestaurantSignUpDTO dto){
		return ResponseEntity.status(HttpStatus.CREATED).body(restaurantService.restaurantSignUp(dto));
	}
	
//	Restaurant login 
	@PostMapping("/")
	public ResponseEntity<?> RestaurantLogin(@RequestBody RestaurantLoginDto dto){
		return ResponseEntity.ok(restaurantService.restaurantLogin(dto));
		
	}
	@GetMapping("/{restaurantId}")
	public ResponseEntity<?> GetRestaurantById(@PathVariable Long restaurantId){
		return ResponseEntity.ok(restaurantService.getRestaurantById(restaurantId));
	}
	
	@PatchMapping("/{restaurantId}")
	public ResponseEntity<?> UpdateRestaurant(@PathVariable Long restaurantId, @RequestBody UpdateRestaurantDto dto){
		return ResponseEntity.ok(restaurantService.UpdateRestaurant(restaurantId, dto));
	}
}
