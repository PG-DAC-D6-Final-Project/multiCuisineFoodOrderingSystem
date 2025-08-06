package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.dto.MenuItemResponseDto;

public interface MenuItemService {
	ApiResponse addMenuItemToRestaurant(Long restaurantId, MenuItemDto dto);

	ApiResponse removeMenuItemFromRestaurant(Long menuItemId);
	
	ApiResponse updateMenuItemOfRestaurant(Long restaurantId, MenuItemDto dto);
	
	List<MenuItemResponseDto> getAllMenuItemsOfRestaurant(Long restaurantId);
}
