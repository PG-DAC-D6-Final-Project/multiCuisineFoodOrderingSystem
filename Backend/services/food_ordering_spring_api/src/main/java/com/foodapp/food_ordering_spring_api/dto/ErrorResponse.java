package com.foodapp.food_ordering_spring_api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class ErrorResponse {
	
	private int statusCode;
	private String errorMessage;
	
	
}
