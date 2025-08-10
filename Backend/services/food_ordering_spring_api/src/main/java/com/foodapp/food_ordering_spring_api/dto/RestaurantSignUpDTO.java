package com.foodapp.food_ordering_spring_api.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.foodapp.food_ordering_spring_api.entities.Address;
import com.foodapp.food_ordering_spring_api.entities.RestaurantStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestaurantSignUpDTO {
	private String name;
	private Address address;
	private String phone;
	private String email;
	private String password;
	private LocalDateTime opening_time;
	private LocalDateTime closing_time;
	private String image_url;
//	private double minimum_order_amount;
//	private RestaurantStatus status;
}
