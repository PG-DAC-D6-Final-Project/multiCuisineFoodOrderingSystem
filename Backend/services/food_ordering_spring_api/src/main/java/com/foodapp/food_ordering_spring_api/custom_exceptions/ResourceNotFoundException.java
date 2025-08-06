package com.foodapp.food_ordering_spring_api.custom_exceptions;

public class ResourceNotFoundException extends RuntimeException{
	public ResourceNotFoundException(String msg) {
		super(msg);
	}
}
