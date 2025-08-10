package com.foodapp.food_ordering_spring_api.dto;

import java.time.LocalDateTime;

import com.foodapp.food_ordering_spring_api.entities.Address;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AllRestaurantDto {
	private Long id;
	private String name;
	private Address address;
	private String phone;
	private LocalDateTime openingTime;
	private LocalDateTime closingTime;
	private Double avg_rating;
	private String image_url;
	private double minimum_order_value;
	private RestaurantStatus status;
}
