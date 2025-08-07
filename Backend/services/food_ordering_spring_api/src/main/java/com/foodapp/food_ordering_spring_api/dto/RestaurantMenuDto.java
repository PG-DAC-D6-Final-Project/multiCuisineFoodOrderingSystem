package com.foodapp.food_ordering_spring_api.dto;

import java.util.ArrayList;
import java.util.List;

import com.foodapp.food_ordering_spring_api.entities.Address;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RestaurantMenuDto extends BaseDTO{
	private String name;
	private Address address;
	private List<RestaurantMenuItemDto> menuItems = new ArrayList<>();
}
