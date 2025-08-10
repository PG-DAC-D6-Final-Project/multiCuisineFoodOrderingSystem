package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.FoodItemReviewDto;
import com.foodapp.food_ordering_spring_api.services.ReviewService;

import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/review")
@AllArgsConstructor
@CrossOrigin("*")
public class ReviewController {
	
	private ReviewService reviewService;
	
	@PostMapping("/addReview")
	public ResponseEntity<?> addReviewOnOrder(@RequestBody FoodItemReviewDto review){
		reviewService.addReview(review);
		return ResponseEntity.ok("Review added sucessfully");
	}
	@GetMapping("/getAllReviewsByUserId/")
	public ResponseEntity<?> getAllReviewsByUserId(@RequestParam Long userId){
		return ResponseEntity.ok(reviewService.getAllReviewsByUserId(userId));
		
	}
}
