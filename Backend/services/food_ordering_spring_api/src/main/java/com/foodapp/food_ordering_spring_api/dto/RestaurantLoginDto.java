package com.foodapp.food_ordering_spring_api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter
public class RestaurantLoginDto {
	private String email;
	private String password;
}
