package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.custom_exceptions.ApiException;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dto.AllRestaurantDto;
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
    public ApiResponse restaurantLogin(RestaurantLoginDto dto) {
        boolean exists = restaurantDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword()).isPresent();
        if(exists) {
        	return new ApiResponse("Restaurant login successful...");
        }
        else {
        	return new ApiResponse("Invalid Email or password");
        }
    }

	@Override
	public List<AllRestaurantDto> getAllRestaurant() {
		return restaurantDao.findAll()
				.stream()
				.map(restaurant -> modelMapper.map(restaurant, AllRestaurantDto.class)).toList();
	}
}
