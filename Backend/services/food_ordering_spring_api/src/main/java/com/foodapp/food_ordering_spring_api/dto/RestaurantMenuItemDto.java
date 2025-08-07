package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.CuisineType;
import com.foodapp.food_ordering_spring_api.entities.RestaurantMenuItemAvailability;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestaurantMenuItemDto extends BaseDTO {
	private String name;
	private String description;
	private double price;
//	private CuisineType cuisineType;
	private String cuisineType;
	private String image_url;
	private RestaurantMenuItemAvailability availability_status;
}
