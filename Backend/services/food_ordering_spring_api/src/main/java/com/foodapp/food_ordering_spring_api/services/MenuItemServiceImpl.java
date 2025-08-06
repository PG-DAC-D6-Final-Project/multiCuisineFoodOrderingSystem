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
		new RuntimeException("Invalid restaurant id - Menu Item can't be added!!!!"));
		
		CuisineType cuisineType = cuisineTypeDao.findById(dto.getCuisineType()).orElseThrow(() -> 
		new RuntimeException("Invalid cuisine type id - Menu Item can't be added!!!!"));
		
		MenuItem menuItem = modelMapper.map(dto, MenuItem.class);
		
		restaurant.addMenuItem(menuItem);
		cuisineType.addMenuItem(menuItem);
		
		return new ApiResponse("New menu item added to the restaurant");
	}

	@Override
	public ApiResponse removeMenuItemFromRestaurant(Long menuItemId) {
		
		MenuItem menuItem = menuItemDao.findById(menuItemId).orElseThrow(() ->
		new RuntimeException("Invalid menu item id - Menu Item can't be removed!!!!"));
		
		Restaurant restaurant = restaurantDao.findById(menuItem.getRestaurant().getId()).orElseThrow(() -> 
		new RuntimeException("Invalid restaurant id - Menu Item can't be removed!!!!"));
		
		CuisineType cuisineType = cuisineTypeDao.findById(menuItem.getCuisineType().getId()).orElseThrow(() -> 
		new RuntimeException("Invalid cuisine type id - Menu Item can't be added!!!!"));
		
		restaurant.removeMenuItem(menuItem);
		cuisineType.removeMenuItem(menuItem);
		
		menuItemDao.delete(menuItem);
		
		return new ApiResponse("Food item removed from the restaurant");
	}

	@Override
	public ApiResponse updateMenuItemOfRestaurant(Long menuItemId, MenuItemDto dto) {
		
		MenuItem menuItem = menuItemDao.findById(menuItemId).orElseThrow(() ->
		new RuntimeException("Invalid menu item id - Menu Item can't be removed!!!!"));
		
		CuisineType cuisineType = cuisineTypeDao.findById(menuItem.getCuisineType().getId()).orElseThrow(() -> 
		new RuntimeException("Invalid cuisine type id - Menu Item can't be added!!!!"));
		
		CuisineType newCuisineType = cuisineTypeDao.findById(dto.getCuisineType()).orElseThrow(() -> 
		new RuntimeException("Invalid cuisine type id - Menu Item can't be added!!!!"));
		
		cuisineType.removeMenuItem(menuItem);
		
		menuItem.setName(dto.getName());
		menuItem.setDescription(dto.getDescription());
		menuItem.setAvailability_status(dto.getAvailability_status());
		menuItem.setPrice(dto.getPrice());
		menuItem.setCuisineType(newCuisineType);
		
		newCuisineType.addMenuItem(menuItem);
		
		return new ApiResponse("Food item updated in the restaurant");
	}
	
	

}
