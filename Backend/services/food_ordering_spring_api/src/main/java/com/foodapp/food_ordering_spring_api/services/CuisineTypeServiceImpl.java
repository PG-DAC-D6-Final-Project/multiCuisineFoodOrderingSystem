package com.foodapp.food_ordering_spring_api.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.foodapp.food_ordering_spring_api.dao.CuisineTypeDao;
import com.foodapp.food_ordering_spring_api.dto.CuisineTypeDto;
import com.foodapp.food_ordering_spring_api.entities.CuisineType;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class CuisineTypeServiceImpl implements CuisineTypeService {
	private final CuisineTypeDao cuisineTypeDao;
	private final ModelMapper mapper;

	@Override
	public List<CuisineTypeDto> getAllCuisineTypes() {
		List<CuisineType> cuisines = cuisineTypeDao.findAll();
		return cuisines.stream()
				.map(cuisine -> mapper.map(cuisine, CuisineTypeDto.class))
				.toList();
	}

}
