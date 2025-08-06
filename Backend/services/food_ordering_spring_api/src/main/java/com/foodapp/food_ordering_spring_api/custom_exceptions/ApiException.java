package com.foodapp.food_ordering_spring_api.custom_exceptions;

public class ApiException extends RuntimeException {
	public 	ApiException(String msg) {
		super(msg);
	}
}
