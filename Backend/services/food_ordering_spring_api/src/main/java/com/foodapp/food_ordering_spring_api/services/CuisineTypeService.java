package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import com.foodapp.food_ordering_spring_api.dto.CuisineTypeDto;

public interface CuisineTypeService {
	public List<CuisineTypeDto> getAllCuisineTypes();
}
