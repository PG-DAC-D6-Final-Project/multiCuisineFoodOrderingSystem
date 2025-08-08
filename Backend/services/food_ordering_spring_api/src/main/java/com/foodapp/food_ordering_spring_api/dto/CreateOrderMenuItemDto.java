package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.RestaurantMenuItemAvailability;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CreateOrderMenuItemDto {
	private String name;
	private String description;
	private double price;
//	private Long cuisineType;
	private RestaurantMenuItemAvailability availability_status;
}
