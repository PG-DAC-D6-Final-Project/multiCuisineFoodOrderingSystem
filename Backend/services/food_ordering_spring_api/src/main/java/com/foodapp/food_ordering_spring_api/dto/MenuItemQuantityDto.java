package com.foodapp.food_ordering_spring_api.dto;

import com.foodapp.food_ordering_spring_api.entities.RestaurantMenuItemAvailability;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(callSuper = true)
@NoArgsConstructor
public class MenuItemQuantityDto {
	private Long id;
	private String name;
    private String description;
    private double price;
    private String imageUrl;
    private RestaurantMenuItemAvailability availability_status;
    private Long restaurantId;
    private Long cuisineTypeId;
    private String cuisineName;
    private int quantity;
}
