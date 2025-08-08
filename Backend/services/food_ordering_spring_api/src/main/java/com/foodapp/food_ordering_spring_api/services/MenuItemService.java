package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.MenuItemResponseDto;
import com.foodapp.food_ordering_spring_api.dto.MenuItemsWithRestaurantDto;

public interface MenuItemService {
	ApiResponse addMenuItemToRestaurant(Long restaurantId, MenuItemDto dto);

	ApiResponse removeMenuItemFromRestaurant(Long menuItemId);
	
	ApiResponse updateMenuItemOfRestaurant(Long restaurantId, MenuItemDto dto);
	
	List<MenuItemResponseDto> getAllMenuItemsOfRestaurant(Long restaurantId);
	
<<<<<<< HEAD
	List<MenuItemResponseDto> getAllMenuItemsByCuisineType(Long cuisineTypeId);
=======
	List<MenuItemsWithRestaurantDto> getAllMenuItemsByCuisineType(Long cuisineTypeId);
>>>>>>> 3832941339d2cede0f5fcb0f7e5f2b5a5dd83deb

}
