package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.AllRestaurantDto;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;

public interface RestaurantService {
	ApiResponse restaurantSignUp(RestaurantSignUpDTO dto);
	
	ApiResponse restaurantLogin(RestaurantLoginDto dto);
	
	List<AllRestaurantDto> getAllRestaurant();
}
