package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.CuisineType;
import com.foodapp.food_ordering_spring_api.entities.RestaurantMenuItemAvailability;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuItemWithCuisineDto extends BaseDTO {
	private String name;
	private String description;
	private double price;
	private CuisineType cuisineType;
	private RestaurantMenuItemAvailability availability_status;
}
