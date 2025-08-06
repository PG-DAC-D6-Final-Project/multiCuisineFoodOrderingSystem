package com.foodapp.food_ordering_spring_api.services;

import com.foodapp.food_ordering_spring_api.dto.ApiResponse;
import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;

public interface MenuItemService {
	ApiResponse addMenuItemToRestaurant(Long restaurantId, MenuItemDto dto);

	ApiResponse removeMenuItemFromRestaurant(Long menuItemId);
}
