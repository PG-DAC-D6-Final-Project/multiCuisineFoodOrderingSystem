package com.foodapp.food_ordering_spring_api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodapp.food_ordering_spring_api.dto.MenuItemDto;
import com.foodapp.food_ordering_spring_api.services.MenuItemService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/menu-item")
@AllArgsConstructor
public class MenuItemController {
	private final MenuItemService menuItemService;
	
	@PostMapping("/{restaurantId}")
	public ResponseEntity<?> addMenuItem(@PathVariable Long restaurantId, @RequestBody MenuItemDto dto){
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(menuItemService.addMenuItemToRestaurant(restaurantId, dto));
	}
}
