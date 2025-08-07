package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.RestaurantMenuItemAvailability;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true)
public class MenuItemDto extends BaseDTO {
	private String name;
	private String description;
	private double price;
//	private Long cuisineType;
	private RestaurantMenuItemAvailability availability_status;
}
