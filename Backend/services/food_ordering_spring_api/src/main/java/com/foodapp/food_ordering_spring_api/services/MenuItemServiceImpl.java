package com.foodapp.food_ordering_spring_api.services;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.dao.CuisineTypeDao;
import com.foodapp.food_ordering_spring_api.dao.MenuItemDao;
import com.foodapp.food_ordering_spring_api.dao.RestaurantDao;
import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.entities.CuisineType;
import com.foodapp.food_ordering_spring_api.entities.MenuItem;
import com.foodapp.food_ordering_spring_api.entities.Restaurant;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class MenuItemServiceImpl implements MenuItemService {
	private final MenuItemDao menuItemDao;
	private final ModelMapper modelMapper;
	private final RestaurantDao restaurantDao;
	private final CuisineTypeDao cuisineTypeDao;

	@Override
	public ApiResponse addMenuItemToRestaurant(Long restaurantId, MenuItemDto dto) {
		
		Restaurant restaurant = restaurantDao.findById(restaurantId).orElseThrow(() -> 
		new RuntimeException("Invalid restaurant id - Food Item can't be added!!!!"));
		
		CuisineType cuisineType = cuisineTypeDao.findById(dto.getCuisineType()).orElseThrow(() -> 
		new RuntimeException("Invalid cuisine type id - Food Item can't be added!!!!"));
		
		MenuItem menuItem = modelMapper.map(dto, MenuItem.class);
		
		restaurant.addMenuItem(menuItem);
		cuisineType.addMenuItem(menuItem);
		
		return new ApiResponse("New food item added to the restaurant");
	}

}
