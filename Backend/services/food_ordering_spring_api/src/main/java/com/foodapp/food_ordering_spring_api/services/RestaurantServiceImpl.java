package com.foodapp.food_ordering_spring_api.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.RestaurantLoginDto;
import com.foodapp.food_ordering_spring_api.dto.RestaurantSignUpDTO;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {
	
	private final RestaurantDao restaurantDao;
	private final ModelMapper modelMapper;
	
	@Override
	public ApiResponse restaurantSignUp(RestaurantSignUpDTO dto) {
		if(restaurantDao.existsByName(dto.getName())) {
			throw new ApiException("Restaurant Already Exists...");
		}
		Restaurant entity = modelMapper.map(dto,Restaurant.class);
		Restaurant persistentRestaurant = restaurantDao.save(entity);
		return new ApiResponse("Added new Restaurant with ID = " + persistentRestaurant.getId());
	}

//	restaurant login function 
	@Override
    public RestaurantSignUpDTO restaurantLogin(RestaurantLoginDto dto) {
        Restaurant  restaurant = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
        		.orElseThrow(()->new RuntimeException("Invalid Email or password"));
        return modelMapper.map(restaurant, RestaurantSignUpDTO.class);
    }
}
