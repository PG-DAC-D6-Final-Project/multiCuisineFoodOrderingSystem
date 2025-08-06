package com.foodapp.food_ordering_spring_api.services;

import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;

public interface RestaurantService {
	ApiResponse restaurantSignUp(RestaurantSignUpDTO dto);
}
