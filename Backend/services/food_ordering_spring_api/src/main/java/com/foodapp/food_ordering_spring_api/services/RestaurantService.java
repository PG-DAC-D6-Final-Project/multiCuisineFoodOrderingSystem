package com.foodapp.food_ordering_spring_api.services;

import java.util.List;
import java.util.Map;

import com.foodapp.food_ordering_spring_api.dto.AllRestaurantDto;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.RestaurantByIdDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantMenuDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.dto.UpdateRestaurantDto;
public interface RestaurantService {
	ApiResponse restaurantSignUp(RestaurantSignUpDTO dto);
	// RestaurantLoginDto restaurantLogin(RestaurantLoginDto dto);
	Map<String, Object> restaurantSignin(RestaurantLoginDto dto);
	RestaurantSignUpDTO restaurantLogin(RestaurantLoginDto dto);
	RestaurantByIdDto getRestaurantById(Long restaurantId);
	ApiResponse UpdateRestaurant(Long id, UpdateRestaurantDto dto);	
	List<AllRestaurantDto> getAllRestaurant();
	ApiResponse deleteRestaurantDetail(Long restaurantId);
	RestaurantMenuDto getRestaurantMenu(Long Id);

}
